import type { Metadata } from "next";
import Link from "next/link";
import {
  buildCapabilities,
  engineeringPillars,
  stackGroups,
} from "@/components/home/home-data";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Explore the engineering layer behind Niyyah Labs work across backend systems, integrations, async workflows, and observability.",
};

export default function EngineeringPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="grid-shell relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <SiteHeader currentPath="/engineering" />

          <div className="max-w-4xl py-16 lg:py-24">
            <p className="eyebrow">Engineering</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              The engineering layer is where the long-term reliability comes from.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-foreground-soft sm:text-lg">
              The visible interface matters, but the differentiator is often
              below the surface: backend boundaries, data ownership, queue
              behavior, observability, and release practices that make systems
              usable after launch.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="panel">
          <div className="max-w-3xl">
            <p className="eyebrow">Capability Signals</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              The kinds of implementation problems this work is designed to handle.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="panel grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Technology Base</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              A stack chosen for systems that need to keep operating after launch.
            </h2>
          </div>

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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="panel cta-panel">
          <p className="eyebrow">Next Step</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            If the technical depth matters, the service pages show where it applies.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="button-primary" href="/services">
              Explore services
            </Link>
            <Link className="button-secondary" href="/work">
              Review work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
