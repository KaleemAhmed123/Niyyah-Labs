import Link from "next/link";
import type { ReactNode } from "react";
import { TerminalIntake } from "@/components/contact/terminal-intake";
import { HeroCommandPanel } from "@/components/home/hero-command-panel";
import { SectionHeading } from "@/components/home/section-heading";
import {
  buildCapabilities,
  primaryServices,
  processSignals,
  trustMetrics,
} from "@/components/home/home-data";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { SiteHeader } from "@/components/site/site-header";

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
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-5 lg:px-10 lg:py-6">
        <SiteHeader currentPath="/" />

        <div className="grid flex-1 gap-8 py-6 lg:grid-cols-[0.98fr_0.82fr] lg:items-start lg:py-10 xl:gap-10 xl:py-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/4 px-4 py-2 text-xs uppercase tracking-[0.25em] text-foreground-muted">
              <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_16px_rgba(93,211,255,0.9)]" />
              Senior systems thinking for digital growth
            </div>

            <div className="space-y-5">
              <p className="eyebrow">System-first digital experiences</p>
              <h1 className="max-w-4xl text-[clamp(3.2rem,6vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white">
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

            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {trustMetrics.map((metric) => (
                <div className="metric-card" key={metric.value}>
                  <p className="metric-value">{metric.value}</p>
                  <p className="metric-label">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[35rem] lg:-mt-4 xl:-mt-8 xl:max-w-[37rem]">
            <HeroCommandPanel />
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <SectionShell className="py-16 lg:py-18" id="approach">
      <ScrollReveal>
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
      </ScrollReveal>
    </SectionShell>
  );
}

function ServicesSection() {
  return (
    <SectionShell className="pb-18 lg:pb-20" id="services">
      <SectionHeading
        eyebrow="Services"
        title="Choose the closest starting point, then go deeper on the dedicated page."
        description="The homepage now stays focused on direction. Each service has its own page for deliverables, fit, outcomes, and next steps."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {primaryServices.map((service, index) => (
          <ScrollReveal delayMs={index * 80} key={service.id}>
            <article className="panel service-card">
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

            <Link
              className="mt-8 inline-flex text-sm text-accent-cyan"
              href={`/services/${service.slug}`}
            >
              Explore service
            </Link>
            </article>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal className="mt-8 flex justify-start" delayMs={120}>
        <Link className="button-secondary" href="/services">
          View all service pages
        </Link>
      </ScrollReveal>
    </SectionShell>
  );
}

function ProofSection() {
  return (
    <SectionShell className="pb-18 lg:pb-20" id="proof">
      <ScrollReveal>
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
      </ScrollReveal>
    </SectionShell>
  );
}

function ProcessPreviewSection() {
  return (
    <SectionShell className="pb-18 lg:pb-20">
      <ScrollReveal>
        <div className="panel grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="space-y-6">
          <SectionHeading
            eyebrow="How We Work"
            title="The detailed process and engineering depth now live on dedicated pages."
            description="The homepage keeps the overview compact. Use the destination pages for the full delivery model, technical signals, and implementation profile."
          />

          <div className="panel-subtle">
            <p className="stack-label">What stays consistent</p>
            <div className="mt-5 space-y-3">
              {processSignals.map((signal) => (
                <div className="list-row" key={signal}>
                  <span className="list-dot" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Link className="panel-subtle block" href="/process">
              <p className="stack-label">Process</p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">
                See the delivery path from system mapping to release readiness.
              </h3>
              <p className="mt-3 text-sm leading-7 text-foreground-soft">
                Review the engagement flow, delivery artifacts, and how decisions
                are made before implementation starts.
              </p>
            </Link>

            <Link className="panel-subtle block" href="/engineering">
              <p className="stack-label">Engineering</p>
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">
                Explore the technical layer behind product, AI, and integration work.
              </h3>
              <p className="mt-3 text-sm leading-7 text-foreground-soft">
                See backend architecture, data sync, async workflows, observability,
                and the implementation stack in one place.
              </p>
            </Link>
          </div>

          <div className="panel-subtle relative overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-40 bg-[radial-gradient(circle_at_center,rgba(93,211,255,0.16),transparent_70%)]" />
            <p className="stack-label">Why teams hire us</p>
            <div className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  Calm execution for messy product and operations problems.
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-foreground-soft">
                  Most teams do not need more software noise. They need someone who
                  can map the bottleneck, define the system, and ship something
                  reliable enough to operate on.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  ["01", "Clear scope before build"],
                  ["02", "System logic before automation"],
                  ["03", "Launch paths built for iteration"],
                ].map(([value, label]) => (
                  <div className="process-mini-card" key={label}>
                    <p className="metric-value">{value}</p>
                    <p className="metric-label">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </ScrollReveal>
    </SectionShell>
  );
}

function ContactSection() {
  return (
    <SectionShell className="pb-18 lg:pb-20" id="contact">
      <ScrollReveal>
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
      </ScrollReveal>
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
      <ProcessPreviewSection />
      <ContactSection />
    </main>
  );
}
