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

const budgetOptions: BudgetOption[] = ["< $5k", "$5k-$15k", "$15k-$30k", "$30k+"];

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
  company: string;
};

const initialState: IntakeState = {
  scope: "",
  timeline: "",
  budget: "",
  challenge: "",
  name: "",
  email: "",
  company: "",
};

function buildBrief(form: IntakeState) {
  return [
    "Niyyah Labs Inquiry",
    `Scope: ${form.scope || "Not provided yet"}`,
    `Timeline: ${form.timeline || "Not provided yet"}`,
    `Budget: ${form.budget || "Not provided yet"}`,
    `Company: ${form.company || "Not provided yet"}`,
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
  const [form, setForm] = useState<IntakeState>(initialState);
  const [activeStep, setActiveStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const [briefDraft, setBriefDraft] = useState(buildBrief(initialState));
  const [briefEdited, setBriefEdited] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const isStepComplete = (index: number) => {
    if (index === 0) return Boolean(form.scope);
    if (index === 1) return Boolean(form.timeline);
    if (index === 2) return Boolean(form.budget);
    if (index === 3) return form.challenge.trim().length >= 20;
    if (index === 4) return Boolean(form.name && form.email);
    return false;
  };

  const completedSteps = steps.filter((_, index) => isStepComplete(index)).length;
  const progress = `${completedSteps}/${steps.length}`;
  const generatedBrief = buildBrief(form);
  const isReadyToSubmit = completedSteps === steps.length;

  const firstIncompleteStep = steps.findIndex((_, index) => !isStepComplete(index));

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

  const updateField = <K extends keyof IntakeState>(key: K, value: IntakeState[K]) => {
    setCopied(false);
    setSubmitStatus("idle");
    setSubmitMessage("");
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

  const submitLead = async () => {
    if (submitStatus === "submitting") return;

    if (!isReadyToSubmit) {
      const nextStep = firstIncompleteStep >= 0 ? firstIncompleteStep : 0;

      setActiveStep(nextStep);
      setSubmitStatus("error");
      setSubmitMessage(
        `Complete "${steps[nextStep].prompt}" before sending the project brief.`
      );
      return;
    }

    setSubmitStatus("submitting");
    setSubmitMessage("Sending project brief...");

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
            : "Project brief submission failed"
        );
      }

      setSubmitStatus("success");
      setSubmitMessage(
        "Project brief received. We will review the context and reply with the clearest next step."
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Project brief submission failed.";
      setSubmitStatus("error");
      setSubmitMessage(message);
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
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
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
              Structured brief builder for product, AI, and integration projects.
            </p>
          </div>

          <div className="terminal-progress">
            <div className="flex items-center justify-between gap-4">
              <p className="stack-label">Progress</p>
              <p className="font-mono text-xs text-foreground-muted">{progress}</p>
            </div>
            <div className="terminal-progress-bar">
              <motion.div
                animate={{ width: `${(completedSteps / steps.length) * 100}%` }}
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
                    {isStepComplete(index) ? "done" : activeStep === index ? "open" : "pending"}
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
                                    setBriefDraft(`${buildBrief({ ...form, scope: option })}\n\n${customPrompt}`);
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
                            className="terminal-input min-h-36"
                            onChange={(event) => updateField("challenge", event.target.value)}
                            placeholder="Example: We have leads coming in from multiple channels, our team routes them manually, and reporting is inconsistent across systems."
                            value={form.challenge}
                          />
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-xs text-foreground-muted">
                              Aim for one concise paragraph with the current bottleneck and desired outcome.
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
                        <div className="grid gap-3 sm:grid-cols-2">
                          <input
                            className="terminal-input"
                            onChange={(event) => updateField("name", event.target.value)}
                            placeholder="Your name"
                            value={form.name}
                          />
                          <input
                            className="terminal-input"
                            onChange={(event) => updateField("company", event.target.value)}
                            placeholder="Company"
                            value={form.company}
                          />
                          <input
                            className="terminal-input sm:col-span-2"
                            onChange={(event) => updateField("email", event.target.value)}
                            placeholder="Work email"
                            type="email"
                            value={form.email}
                          />
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
          Edit the brief if you want to refine wording before copying or sending it.
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
          <a
            className={`button-primary${submitStatus === "submitting" ? " button-disabled" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              void submitLead();
            }}
            href="/api/lead"
          >
            {submitStatus === "submitting" ? "Sending..." : "Send project brief"}
          </a>
          <button className="button-secondary" onClick={copyBrief} type="button">
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
          <button className="button-secondary" onClick={resetForm} type="button">
            Reset
          </button>
        </div>

        {submitMessage ? (
          <p
            className={
              submitStatus === "success"
                ? "terminal-submit-message terminal-submit-success"
                : submitStatus === "error"
                  ? "terminal-submit-message terminal-submit-error"
                  : "terminal-submit-message"
            }
          >
            {submitMessage}
          </p>
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
            <span>Securely sends your brief to the Niyyah Labs project intake</span>
          </div>
          <div className="terminal-note">
            <span className="terminal-note-label">best for</span>
            <span>MVPs, AI workflows, internal platforms, and integrations</span>
          </div>
        </div>
      </div>
    </div>
  );
}
