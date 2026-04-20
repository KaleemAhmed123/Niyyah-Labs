"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { primaryServices } from "@/components/home/home-data";

type TimelineOption = "ASAP" | "2-8 weeks" | "2-3 months" | "Exploring";
type BudgetOption = "< $5k" | "$5k-$15k" | "$15k-$30k" | "$30k+";

const timelineOptions: TimelineOption[] = [
  "ASAP",
  "2-8 weeks",
  "2-3 months",
  "Exploring",
];

const budgetOptions: BudgetOption[] = [
  "< $5k",
  "$5k-$15k",
  "$15k-$30k",
  "$30k+",
];

const scopeOptions = [
  ...primaryServices.map((service) => service.label),
  "Internal Tools",
  "Custom Software",
  "Product Audit",
  "System Integration",
  "Discovery Sprint",
  "Custom",
  "Not sure yet",
];

type IntakeState = {
  scope: string;
  timeline: string;
  budget: string;
  challenge: string;
  name: string;
  email: string;
  phone: string;
  company: string;
};

const initialState: IntakeState = {
  scope: "",
  timeline: "",
  budget: "",
  challenge: "",
  name: "",
  email: "",
  phone: "",
  company: "",
};

function buildBrief(form: IntakeState) {
  return [
    "Niyyah Labs Inquiry",
    `Scope: ${form.scope || "Not provided yet"}`,
    `Timeline: ${form.timeline || "Not provided yet"}`,
    `Budget: ${form.budget || "Not provided yet"}`,
    `Company: ${form.company || "Not provided yet"}`,
    `Phone: ${form.phone || "Not provided yet"}`,
    `Contact: ${form.name || "Not provided yet"}${form.email ? ` <${form.email}>` : ""}`,
    "",
    "Business challenge:",
    form.challenge.trim() || "Not provided yet",
  ].join("\n");
}

const steps = [
  {
    key: "scope",
    command: "select_scope",
    prompt: "What are you mainly trying to build right now?",
  },
  {
    key: "timeline",
    command: "set_timeline",
    prompt: "How soon do you want to move?",
  },
  {
    key: "budget",
    command: "set_budget",
    prompt: "What budget band are you working within?",
  },
  {
    key: "challenge",
    command: "describe_problem",
    prompt: "What is the business problem, bottleneck, or goal?",
  },
  {
    key: "contact",
    command: "identify_contact",
    prompt: "Where should we reply?",
  },
] as const;

export function TerminalIntake() {
  const briefEditorRef = useRef<HTMLTextAreaElement | null>(null);
  const intakeRootRef = useRef<HTMLDivElement | null>(null);
  const [form, setForm] = useState<IntakeState>(initialState);
  const [activeStep, setActiveStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const [briefDraft, setBriefDraft] = useState(buildBrief(initialState));
  const [briefEdited, setBriefEdited] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [validationMessages, setValidationMessages] = useState<string[]>([]);
  const [dialogState, setDialogState] = useState<{
    mode: "success" | "error";
    name: string;
    email: string;
    message: string;
  } | null>(null);

  const contactValidation = {
    name: !form.name.trim() ? "Name is required." : "",
    phone: !form.phone.trim() ? "Phone number is required." : "",
    email: !form.email.trim()
      ? "Work email is required."
      : !/\S+@\S+\.\S+/.test(form.email)
        ? "Enter a valid work email."
        : "",
  };

  const challengeValidation =
    form.challenge.trim().length === 0
      ? "Please describe the current bottleneck or goal."
      : form.challenge.trim().length < 20
        ? "Add a bit more detail so we can understand the problem clearly."
        : "";

  const isStepComplete = (index: number) => {
    if (index === 0) return Boolean(form.scope);
    if (index === 1) return Boolean(form.timeline);
    if (index === 2) return Boolean(form.budget);
    if (index === 3) return form.challenge.trim().length >= 20;
    if (index === 4) return Boolean(form.name && form.email && form.phone);
    return false;
  };

  const completedSteps = steps.filter((_, index) =>
    isStepComplete(index),
  ).length;
  const progress = `${completedSteps}/${steps.length}`;
  const generatedBrief = buildBrief(form);
  const isReadyToSubmit = completedSteps === steps.length;

  const firstIncompleteStep = steps.findIndex(
    (_, index) => !isStepComplete(index),
  );

  useEffect(() => {
    if (form.scope !== "Custom") return;

    const editor = briefEditorRef.current;

    if (!editor) return;

    requestAnimationFrame(() => {
      const updatedEditor = briefEditorRef.current;

      if (!updatedEditor) return;

      const cursorPosition = updatedEditor.value.length;
      updatedEditor.focus();
      updatedEditor.setSelectionRange(cursorPosition, cursorPosition);
    });
  }, [form.scope]);

  const advanceIfNeeded = (stepIndex: number) => {
    if (stepIndex === activeStep && activeStep < steps.length - 1) {
      setActiveStep(stepIndex + 1);
    }
  };

  const updateField = <K extends keyof IntakeState>(
    key: K,
    value: IntakeState[K],
  ) => {
    setCopied(false);
    setSubmitStatus("idle");
    setSubmitMessage("");
    setValidationMessages([]);
    const nextForm = { ...form, [key]: value };
    setForm(nextForm);

    if (!briefEdited) {
      setBriefDraft(buildBrief(nextForm));
    }
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(briefDraft);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const focusFirstInput = () => {
    requestAnimationFrame(() => {
      const root = intakeRootRef.current;

      if (!root) return;

      const firstTarget = root.querySelector<HTMLElement>(
        ".terminal-chip, .terminal-input, .terminal-step-trigger",
      );

      firstTarget?.focus();
    });
  };

  const startAnotherBrief = () => {
    setDialogState(null);
    resetForm();
    focusFirstInput();
  };

  const buildMissingFieldMessages = () => {
    const messages: string[] = [];

    if (!form.scope) messages.push("Choose a service or project scope.");
    if (!form.timeline) messages.push("Select a timeline.");
    if (!form.budget) messages.push("Select a budget range.");
    if (challengeValidation) messages.push(challengeValidation);
    if (contactValidation.name) messages.push(contactValidation.name);
    if (contactValidation.phone) messages.push(contactValidation.phone);
    if (contactValidation.email) messages.push(contactValidation.email);

    return messages;
  };

  const submitLead = async () => {
    if (submitStatus === "submitting") return;

    if (!isReadyToSubmit) {
      const nextStep = firstIncompleteStep >= 0 ? firstIncompleteStep : 0;
      const messages = buildMissingFieldMessages();

      setActiveStep(nextStep);
      setSubmitStatus("error");
      setSubmitMessage(
        `Complete "${steps[nextStep].prompt}" before sending the project brief.`,
      );
      setValidationMessages(messages);
      return;
    }

    setSubmitStatus("submitting");
    setSubmitMessage("Sending project brief...");
    setValidationMessages([]);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          brief: briefDraft,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          typeof data.message === "string"
            ? data.message
            : "Project brief submission failed",
        );
      }

      setDialogState({
        mode: "success",
        name: form.name.trim(),
        email: form.email.trim(),
        message:
          "Your project brief has been received successfully. We will review the context carefully and reply with the clearest next step.",
      });
      setSubmitStatus("success");
      setSubmitMessage("");
      resetForm();
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Project brief submission failed.";
      setSubmitStatus("error");
      setSubmitMessage(message);
      setDialogState({
        mode: "error",
        name: form.name.trim() || "there",
        email: form.email.trim() || "your inbox",
        message,
      });
    }
  };

  const resetForm = () => {
    setForm(initialState);
    setActiveStep(0);
    setCopied(false);
    setBriefEdited(false);
    setBriefDraft(buildBrief(initialState));
    setSubmitStatus("idle");
    setSubmitMessage("");
    setValidationMessages([]);
  };

  return (
    <>
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]" ref={intakeRootRef}>
        <div className="terminal-shell">
          <div className="terminal-header">
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-foreground-muted">
              inquiry_terminal.sh
            </span>
            <span className="terminal-status">ready</span>
          </div>

          <div className="space-y-6 p-5">
            <div className="space-y-2">
              <p className="font-mono text-sm text-foreground-soft">
                &gt; initialize client intake
              </p>
              <p className="text-sm text-foreground-muted">
                Structured brief builder for product, AI, and integration
                projects.
              </p>
            </div>

            <div className="terminal-progress">
              <div className="flex items-center justify-between gap-4">
                <p className="stack-label">Progress</p>
                <p className="font-mono text-xs text-foreground-muted">
                  {progress}
                </p>
              </div>
              <div className="terminal-progress-bar">
                <motion.div
                  animate={{
                    width: `${(completedSteps / steps.length) * 100}%`,
                  }}
                  className="terminal-progress-fill"
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
            </div>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div className="terminal-step" key={step.key}>
                  <button
                    className="terminal-step-trigger"
                    onClick={() => setActiveStep(index)}
                    type="button"
                  >
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-foreground-muted">
                        {step.command}
                      </p>
                      <p className="mt-2 text-sm text-white">{step.prompt}</p>
                    </div>
                    <span
                      className={
                        isStepComplete(index)
                          ? "terminal-badge terminal-badge-complete"
                          : activeStep === index
                            ? "terminal-badge terminal-badge-active"
                            : "terminal-badge"
                      }
                    >
                      {isStepComplete(index)
                        ? "done"
                        : activeStep === index
                          ? "open"
                          : "pending"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {activeStep === index ? (
                      <motion.div
                        animate={{ opacity: 1, height: "auto" }}
                        className="terminal-step-panel"
                        exit={{ opacity: 0, height: 0 }}
                        initial={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        {step.key === "scope" ? (
                          <div className="terminal-option-grid">
                            {scopeOptions.map((option) => (
                              <button
                                className={
                                  form.scope === option
                                    ? "terminal-chip terminal-chip-selected"
                                    : "terminal-chip"
                                }
                                key={option}
                                onClick={() => {
                                  updateField("scope", option);
                                  if (option === "Custom") {
                                    const customPrompt = "Custom scope:\n";

                                    if (!briefDraft.includes(customPrompt)) {
                                      setBriefDraft(
                                        `${buildBrief({ ...form, scope: option })}\n\n${customPrompt}`,
                                      );
                                      setBriefEdited(true);
                                    }

                                    setActiveStep(index);
                                    return;
                                  }

                                  advanceIfNeeded(index);
                                }}
                                type="button"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        ) : null}

                        {step.key === "timeline" ? (
                          <div className="terminal-option-grid">
                            {timelineOptions.map((option) => (
                              <button
                                className={
                                  form.timeline === option
                                    ? "terminal-chip terminal-chip-selected"
                                    : "terminal-chip"
                                }
                                key={option}
                                onClick={() => {
                                  updateField("timeline", option);
                                  advanceIfNeeded(index);
                                }}
                                type="button"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        ) : null}

                        {step.key === "budget" ? (
                          <div className="terminal-option-grid">
                            {budgetOptions.map((option) => (
                              <button
                                className={
                                  form.budget === option
                                    ? "terminal-chip terminal-chip-selected"
                                    : "terminal-chip"
                                }
                                key={option}
                                onClick={() => {
                                  updateField("budget", option);
                                  advanceIfNeeded(index);
                                }}
                                type="button"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        ) : null}

                        {step.key === "challenge" ? (
                          <div className="space-y-3">
                            <textarea
                              className={`terminal-input min-h-36${challengeValidation && activeStep === index ? " terminal-input-error" : ""}`}
                              onChange={(event) =>
                                updateField("challenge", event.target.value)
                              }
                              placeholder="Example: We have leads coming in from multiple channels, our team routes them manually, and reporting is inconsistent across systems."
                              value={form.challenge}
                            />
                            <div className="flex items-center justify-between gap-4">
                              <p
                                className={
                                  challengeValidation
                                    ? "terminal-field-hint terminal-field-hint-error"
                                    : "terminal-field-hint"
                                }
                              >
                                {challengeValidation ||
                                  "Aim for one concise paragraph with the current bottleneck and desired outcome."}
                              </p>
                              <button
                                className="button-secondary"
                                disabled={form.challenge.trim().length < 20}
                                onClick={() => advanceIfNeeded(index)}
                                type="button"
                              >
                                Save answer
                              </button>
                            </div>
                          </div>
                        ) : null}

                        {step.key === "contact" ? (
                          <div className="space-y-3">
                            <div className="grid gap-3 sm:grid-cols-2">
                              <div>
                                <input
                                  className={`terminal-input${contactValidation.name ? " terminal-input-error" : ""}`}
                                  onChange={(event) =>
                                    updateField("name", event.target.value)
                                  }
                                  placeholder="Your name"
                                  value={form.name}
                                />
                                {contactValidation.name ? (
                                  <p className="terminal-field-hint terminal-field-hint-error">
                                    {contactValidation.name}
                                  </p>
                                ) : null}
                              </div>
                              <div>
                                <input
                                  className="terminal-input"
                                  onChange={(event) =>
                                    updateField("company", event.target.value)
                                  }
                                  placeholder="Company"
                                  value={form.company}
                                />
                              </div>
                              <div>
                                <input
                                  className={`terminal-input${contactValidation.phone ? " terminal-input-error" : ""}`}
                                  onChange={(event) =>
                                    updateField("phone", event.target.value)
                                  }
                                  placeholder="Phone number"
                                  type="tel"
                                  value={form.phone}
                                />
                                {contactValidation.phone ? (
                                  <p className="terminal-field-hint terminal-field-hint-error">
                                    {contactValidation.phone}
                                  </p>
                                ) : null}
                              </div>
                              <div className="sm:col-span-2">
                                <input
                                  className={`terminal-input sm:col-span-2${contactValidation.email ? " terminal-input-error" : ""}`}
                                  onChange={(event) =>
                                    updateField("email", event.target.value)
                                  }
                                  placeholder="Work email"
                                  type="email"
                                  value={form.email}
                                />
                                {contactValidation.email ? (
                                  <p className="terminal-field-hint terminal-field-hint-error">
                                    {contactValidation.email}
                                  </p>
                                ) : null}
                              </div>
                            </div>

                            <p className="terminal-field-hint">
                              We will use these details for a professional follow-up on the brief.
                            </p>
                          </div>
                        ) : null}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="panel cta-panel">
          <p className="eyebrow">Generated Brief</p>
          <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-white">
            A structured project summary, ready to send.
          </h3>
          <p className="mt-4 text-sm leading-7 text-foreground-soft">
            Edit the brief if you want to refine wording before copying or
            sending it.
          </p>

          <label className="sr-only" htmlFor="brief-draft">
            Editable project brief
          </label>
          <textarea
            className="terminal-preview terminal-preview-editable"
            id="brief-draft"
            ref={briefEditorRef}
            onChange={(event) => {
              setBriefEdited(true);
              setCopied(false);
              setBriefDraft(event.target.value);
            }}
            value={briefDraft}
          />

          <div className="flex flex-wrap gap-3">
            <button
              className={`button-primary${submitStatus === "submitting" ? " button-disabled" : ""}`}
              onClick={() => {
                void submitLead();
              }}
              type="button"
            >
              {submitStatus === "submitting"
                ? "Sending..."
                : "Send project brief"}
            </button>
            <button
              className="button-secondary"
              onClick={copyBrief}
              type="button"
            >
              {copied ? "Brief copied" : "Copy brief"}
            </button>
            <button
              className="button-secondary"
              onClick={() => {
                setBriefDraft(generatedBrief);
                setBriefEdited(false);
                setCopied(false);
              }}
              type="button"
            >
              Use generated
            </button>
            <button
              className="button-secondary"
              onClick={resetForm}
              type="button"
            >
              Reset
            </button>
          </div>

          {submitMessage ? (
            <div
              className={
                submitStatus === "error"
                  ? "terminal-submit-message terminal-submit-error"
                  : "terminal-submit-message"
              }
            >
              <p>{submitMessage}</p>
              {validationMessages.length > 0 ? (
                <ul className="terminal-validation-list">
                  {validationMessages.map((message) => (
                    <li key={message}>{message}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}

          <div className="terminal-note mt-5">
            <span className="terminal-note-label">what happens next</span>
            <span>
              We review the brief, identify the strongest build path, and reply
              with the right next step for scope, timeline, and technical risk.
            </span>
          </div>

          <div className="mt-5 grid gap-3">
            <div className="terminal-note">
              <span className="terminal-note-label">direct</span>
              <span>
                Securely sends your brief to the Niyyah Labs project intake
              </span>
            </div>
            <div className="terminal-note">
              <span className="terminal-note-label">best for</span>
              <span>
                MVPs, AI workflows, internal platforms, and integrations
              </span>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {dialogState ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="terminal-modal-backdrop"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setDialogState(null)}
          >
            <motion.div
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={
                dialogState.mode === "error"
                  ? "terminal-modal terminal-modal-error"
                  : "terminal-modal"
              }
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              onClick={(event) => event.stopPropagation()}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <p className="eyebrow mt-4">
                {dialogState.mode === "error"
                  ? "Submission Needs Attention"
                  : "Project Brief Received"}
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                {dialogState.mode === "error"
                  ? `We could not send the brief for ${dialogState.name}.`
                  : `Thank you, ${dialogState.name}.`}
              </h3>
              <p className="mt-4 text-base leading-7 text-foreground-soft">
                {dialogState.message}{" "}
                <span className="text-white">{dialogState.email}</span>
                {dialogState.mode === "error"
                  ? " once the form is corrected or retried."
                  : " will receive the clearest next step."}
              </p>
              <div className="terminal-modal-note mt-6">
                {dialogState.mode === "error"
                  ? "Review the highlighted fields, then try again. The form will stay in place so you can continue without losing your work."
                  : "Expect a thoughtful response focused on scope, technical risk, and the best path forward for the project."}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  className="button-primary"
                  onClick={startAnotherBrief}
                  type="button"
                >
                  Send another brief
                </button>
                <button
                  className="button-secondary"
                  onClick={() => {
                    setDialogState(null);
                    focusFirstInput();
                  }}
                  type="button"
                >
                  {dialogState.mode === "error" ? "Review form" : "Close"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
