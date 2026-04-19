import Link from "next/link";
import type { ReactNode } from "react";
import { TerminalIntake } from "@/components/contact/terminal-intake";
import { SectionHeading } from "@/components/home/section-heading";
import {
  buildCapabilities,
  deliveryArtifacts,
  engineeringPillars,
  faqItems,
  navItems,
  primaryServices,
  processSignals,
  processSteps,
  stackGroups,
  trustMetrics,
} from "@/components/home/home-data";

function SectionShell({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-6 lg:px-10 ${className}`} id={id}>
      {children}
    </section>
  );
}

function HeroSection() {
  return (
    <section className="grid-shell relative overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-between px-6 py-8 lg:px-10">
        <header className="flex items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.35em] text-foreground-muted">
              Niyyah Labs
            </p>
            <p className="text-sm text-foreground-soft">
              Product engineering, AI systems, and integrations
            </p>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-foreground-muted md:flex">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <nav className="mt-6 flex flex-wrap gap-2 text-sm text-foreground-soft md:hidden">
          {navItems.map((item) => (
            <a
              className="rounded-full border border-white/10 bg-white/4 px-3 py-2"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/4 px-4 py-2 text-xs uppercase tracking-[0.25em] text-foreground-muted">
              <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_16px_rgba(93,211,255,0.9)]" />
              Senior systems thinking for digital growth
            </div>

            <div className="space-y-5">
              <p className="eyebrow">System-first digital experiences</p>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
                We build the software layer your business can actually run on.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-foreground-soft sm:text-lg">
                Niyyah Labs helps founders and operators launch products,
                automate workflows, and connect fragmented tools into one clear
                operating system.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a className="button-primary" href="#contact">
                Send a project brief
              </a>
              <a className="button-secondary" href="#services">
                Explore services
              </a>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {trustMetrics.map((metric) => (
                <div className="metric-card" key={metric.value}>
                  <p className="metric-value">{metric.value}</p>
                  <p className="metric-label">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel glow-panel hero-panel">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-xs uppercase tracking-[0.24em] text-foreground-muted">
              <span>business_problem.yml</span>
              <span>command center</span>
            </div>

            <div className="grid gap-6 p-5">
              <pre className="code-block">
                {`challenge: "Scale operations without hiring 50 reps"
goals:
  - launch client portal
  - automate lead routing
  - connect crm + reporting
solution:
  product: "customer operations dashboard"
  ai: "assistant + workflow logic"
  integrations: "salesforce, stripe, analytics"
outcome: "One system for growth"`}
              </pre>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/4 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-white">
                      AI Operations Pipeline
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground-muted">
                      Live architecture preview
                    </p>
                  </div>
                  <span className="rounded-full bg-accent-violet/15 px-3 py-1 text-xs text-accent-violet">
                    Active
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    "Customer request intake",
                    "Knowledge retrieval + policy checks",
                    "CRM update + owner routing",
                    "Reporting stream to dashboard",
                  ].map((item, index) => (
                    <div className="pipeline-row" key={item}>
                      <span className="pipeline-index">0{index + 1}</span>
                      <span className="text-sm text-foreground-soft">{item}</span>
                      <span className="pipeline-dot" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {["Product", "Automation", "Integrations"].map((item) => (
                  <div className="status-card" key={item}>
                    <p className="stack-label">{item}</p>
                    <p className="mt-2 text-sm text-white">System aligned</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <SectionShell className="py-20" id="approach">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Manifesto"
          title="Stop managing tools. Start running systems."
          description="Niyyah Labs is built for teams that need operational clarity: products, AI workflows, and integrations engineered as one connected business system."
        />

        <div className="panel space-y-6">
          <div className="manifesto-grid">
            {[
              "Architecture before implementation",
              "Business workflows before feature lists",
              "Reliable integrations over manual handoffs",
              "Production systems beyond demo screens",
            ].map((line) => (
              <div className="manifesto-chip" key={line}>
                {line}
              </div>
            ))}
          </div>
          <p className="text-lg leading-8 text-foreground-soft">
            The work is calm, precise, technically deep, and commercially
            intelligent: fewer disconnected tools, fewer manual handoffs, and a
            clearer system for growth.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

function ServicesSection() {
  return (
    <SectionShell className="pb-24" id="services">
      <SectionHeading
        eyebrow="Core Offers"
        title="Three entry points, backed by deep engineering capability."
        description="Choose the starting point closest to the bottleneck: launching a product, automating a workflow, or connecting Salesforce with the rest of the business."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {primaryServices.map((service) => (
          <article className="panel service-card" key={service.id}>
            <p className="stack-label">{service.label}</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
              {service.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-foreground-soft">
              {service.summary}
            </p>

            <div className="mt-6 space-y-3">
              {service.outcomes.map((outcome) => (
                <div className="list-row" key={outcome}>
                  <span className="list-dot" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {service.stack.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <Link className="mt-8 inline-flex text-sm text-accent-cyan" href={`/services/${service.slug}`}>
              Explore service
            </Link>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function ProofSection() {
  return (
    <SectionShell className="pb-24" id="proof">
      <div className="panel compact-proof-panel">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Proof Signals"
            title="Built for the hard parts most websites never show."
            description="The strongest work happens below the surface: data sync, service boundaries, workflow automation, roles, dashboards, payments, queues, and operational visibility."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {buildCapabilities.map((capability) => (
              <article className="compact-build-card" key={capability.title}>
                <p className="stack-label">{capability.title}</p>
                <p className="mt-3 text-sm leading-7 text-foreground-soft">
                  {capability.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function EngineeringSection() {
  return (
    <SectionShell className="pb-24" id="engineering">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Engineering Depth"
            title="The build quality is the differentiator."
            description="This is where we move beyond surface-level web development. The engineering layer includes backend architecture, enterprise data sync, async workflows, observability, and production-grade product surfaces."
          />

          <div className="panel engineering-summary">
            <p className="stack-label">Engineering signals</p>
            <div className="mt-5 grid gap-3">
              {[
                "SAP, Salesforce, and ecommerce synchronization",
                "12-service marketplace backend architecture",
                "RabbitMQ events, Redis caching, and webhook flows",
                "Docker, CI/CD, Winston logging, and Grafana visibility",
              ].map((item) => (
                <div className="list-row" key={item}>
                  <span className="list-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {engineeringPillars.map((pillar) => (
            <article className="panel engineering-card" key={pillar.title}>
              <p className="stack-label">{pillar.title}</p>
              <p className="mt-4 text-sm leading-7 text-foreground-soft">
                {pillar.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {pillar.capabilities.map((capability) => (
                  <span className="tag" key={capability}>
                    {capability}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ProcessSection() {
  return (
    <SectionShell className="pb-24" id="process">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="Process"
            title="Business-first delivery with technical depth behind it."
            description="Every engagement starts with the business workflow, then turns it into a practical system plan, implementation path, and release-ready foundation."
          />

          <div className="panel process-signal-panel">
            <p className="stack-label">What fills the gap between idea and code</p>
            <div className="mt-5 space-y-3">
              {processSignals.map((signal) => (
                <div className="list-row" key={signal}>
                  <span className="list-dot" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel process-artifact-panel">
            <p className="stack-label">Delivery artifacts</p>
            <div className="mt-5 grid gap-4">
              {deliveryArtifacts.map((artifact) => (
                <div className="artifact-row" key={artifact.label}>
                  <p className="artifact-label">{artifact.label}</p>
                  <p className="artifact-text">{artifact.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {[
              ["01", "Discovery map"],
              ["02", "Architecture plan"],
              ["03", "Release path"],
            ].map(([value, label]) => (
              <div className="process-mini-card" key={label}>
                <p className="metric-value">{value}</p>
                <p className="metric-label">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {processSteps.map((item) => (
            <article className="panel process-row" key={item.step}>
              <div className="process-index">{item.step}</div>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground-soft">
                  {item.text}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.details.map((detail) => (
                    <span className="tag" key={detail}>
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function StackSection() {
  return (
    <SectionShell className="pb-24">
      <div className="panel grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Technology Base"
          title="Implementation stack chosen for real systems."
          description="The stack now reflects the engineering profile more accurately: product frontends, Node.js services, Salesforce/data integrations, queues, caching, DevOps, and observability."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {stackGroups.map((group) => (
            <div className="panel-subtle" key={group.title}>
              <p className="stack-label">{group.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function FaqSection() {
  return (
    <SectionShell className="pb-24" id="faq">
      <SectionHeading
        eyebrow="FAQ"
        title="What buyers usually want to know before a build."
        description="Clear answers around fit, delivery, ownership, and how Niyyah Labs turns business problems into production-ready systems."
      />

      <div className="mt-10 grid gap-4">
        {faqItems.map((item) => (
          <article className="panel faq-card" key={item.question}>
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
              {item.question}
            </h3>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-foreground-soft">
              {item.answer}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function ContactSection() {
  return (
    <SectionShell className="pb-24" id="contact">
      <div className="panel cta-panel">
        <div className="space-y-5">
          <p className="eyebrow">Contact</p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Bring the business problem. We&apos;ll shape the system.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-foreground-soft">
            Share the scope, timeline, budget range, and business problem. We
            will use that context to recommend the right next step instead of
            starting with a vague sales call.
          </p>
          <p className="text-sm text-foreground-muted">
            Prefer email? Write directly to{" "}
            <a className="text-accent-cyan" href="mailto:hello@niyyahlabs.dev">
              hello@niyyahlabs.dev
            </a>
            .
          </p>
        </div>

        <div className="mt-8">
          <TerminalIntake />
        </div>
      </div>
    </SectionShell>
  );
}

function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Niyyah Labs",
    url: "https://niyyahlabs.dev",
    description:
      "Niyyah Labs builds software, AI systems, and integrations that run modern businesses.",
    email: "hello@niyyahlabs.dev",
    knowsAbout: [
      "Product engineering",
      "MVP development",
      "AI systems",
      "Workflow automation",
      "Integrations",
      "Salesforce development",
    ],
    makesOffer: primaryServices.map((service) => ({
      "@type": "Offer",
      name: service.label,
      description: service.summary,
      url: `https://niyyahlabs.dev/services/${service.slug}`,
    })),
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  );
}

export function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <StructuredData />
      <HeroSection />
      <ManifestoSection />
      <ServicesSection />
      <ProofSection />
      <EngineeringSection />
      <ProcessSection />
      <StackSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
