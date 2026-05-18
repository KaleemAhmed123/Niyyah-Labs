import type { Metadata } from "next";
import Link from "next/link";
import {
  deliveryArtifacts,
  engagementModels,
  processSignals,
  processSteps,
} from "@/components/home/home-data";
import { SiteHeader } from "@/components/site/site-header";
import { ProofDiagram } from "@/components/site/proof-diagram";

export const metadata: Metadata = {
  title: "Process",
  description:
    "See how Niyyah Labs turns business bottlenecks into practical delivery plans, architecture decisions, and release-ready systems.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="grid-shell relative overflow-hidden">
        <div className="page-shell px-6 py-6 lg:px-10">
          <SiteHeader currentPath="/process" />

          <div className="max-w-4xl py-12 lg:py-16">
            <p className="eyebrow">Process</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              A delivery process that produces decisions, artifacts, and launch clarity.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-foreground-soft sm:text-lg">
              The goal is not to jump from idea to code too early. Each project
              starts by clarifying the operating problem, then turns that into a
              system map, build plan, proof package, and release-ready
              foundation.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell px-6 pb-18 lg:px-10 lg:pb-20">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="panel">
            <ProofDiagram
              items={["Brief intake", "System map", "Build contract", "Release layer"]}
              label="Process loop"
              title="From bottleneck to build path"
              variant="platform"
            />
            <p className="eyebrow">Core Signals</p>
            <div className="mt-6 space-y-3">
              {processSignals.map((signal) => (
                <div className="list-row" key={signal}>
                  <span className="list-dot" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <p className="eyebrow">Delivery Artifacts</p>
            <div className="mt-6 grid gap-4">
              {deliveryArtifacts.map((artifact) => (
                <div className="artifact-row" key={artifact.label}>
                  <p className="artifact-label">{artifact.label}</p>
                  <p className="artifact-text">{artifact.text}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="page-shell px-6 pb-18 lg:px-10 lg:pb-20">
        <div className="panel">
          <div className="max-w-3xl">
            <p className="eyebrow">Engagement Models</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              The shape changes based on the uncertainty.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {engagementModels.map((model) => (
              <article className="panel-subtle" key={model.title}>
                <p className="stack-label">{model.title}</p>
                <p className="mt-4 text-sm leading-7 text-foreground-soft">
                  <span className="text-white">Best for: </span>
                  {model.bestFor}
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground-soft">
                  <span className="text-white">Output: </span>
                  {model.output}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell px-6 pb-18 lg:px-10 lg:pb-20">
        <div className="grid gap-4">
          {processSteps.map((item) => (
            <article className="panel process-row" key={item.step}>
              <div className="process-index">{item.step}</div>
              <div>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </h2>
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
      </section>

      <section className="page-shell px-6 pb-18 lg:px-10 lg:pb-20">
        <div className="panel cta-panel">
          <p className="eyebrow">Next Step</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            If the process feels right, the next move is a structured brief.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-foreground-soft">
            Bring the business problem, timeline, and scope assumptions. From
            there we can shape the clearest build path.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="button-primary" href="/#contact">
              Send a project brief
            </Link>
            <Link className="button-secondary" href="/services">
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
