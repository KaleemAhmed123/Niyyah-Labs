import type { Metadata } from "next";
import Link from "next/link";
import { featuredProjects } from "@/components/home/home-data";
import { SiteHeader } from "@/components/site/site-header";
import { ProofDiagram } from "@/components/site/proof-diagram";

export const metadata: Metadata = {
  title: "Selected System Examples",
  description:
    "Explore anonymized Niyyah Labs system examples across marketplace platforms, Salesforce integrations, AI automation, and desktop AI tools.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="grid-shell relative overflow-hidden">
        <div className="page-shell px-6 py-6 lg:px-10">
          <SiteHeader currentPath="/work" />

          <div className="mt-10 max-w-3xl space-y-5 pb-12 lg:pb-16">
            <p className="eyebrow">Work</p>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              Selected system examples, anonymized until full public case studies are approved.
            </h1>
            <p className="text-base leading-7 text-foreground-soft sm:text-lg">
              A closer look at the proof behind the claims: marketplace
              infrastructure, enterprise data movement, AI document workflows,
              and focused AI utilities. Sensitive client data, payloads, and
              screenshots are withheld until approved.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell px-6 pb-18 lg:px-10 lg:pb-20">
        <div className="mt-8 grid gap-5">
          {featuredProjects.map((project) => (
            <article className="panel proof-project" key={project.id}>
              <div className="work-project-header">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-accent-cyan">
                    {project.category}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-foreground-muted">
                    {project.clientLabel}
                  </p>
                </div>

                <div className="work-project-summary">
                  <p className="text-sm leading-7 text-foreground-soft">
                    {project.summary}
                  </p>
                  <Link
                    className="mt-4 inline-flex text-sm text-accent-cyan"
                    href={`/work/${project.slug}`}
                  >
                    Read system example
                  </Link>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <ProofDiagram
                    items={project.metrics}
                    label={project.category}
                    title={project.title}
                    variant={
                      project.id === "sap-salesforce-sync"
                        ? "integration"
                        : project.id === "acord-automation"
                          ? "ai"
                          : project.id === "bayanflow-desktop"
                            ? "desktop"
                            : project.id === "forever-yours"
                              ? "realtime"
                              : "platform"
                    }
                  />
                </div>

                <div className="work-proof-stack">
                  <div className="panel-subtle work-proof-row">
                    <p className="stack-label">Problem</p>
                    <div>
                      <p className="text-sm leading-7 text-foreground-soft">
                        {project.problem}
                      </p>
                    </div>
                  </div>

                  <div className="panel-subtle work-proof-row">
                    <p className="stack-label">Architecture</p>
                    <div className="work-proof-list">
                      {project.architecture.map((item) => (
                        <div className="list-row" key={item}>
                          <span className="list-dot" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="panel-subtle work-proof-row">
                    <p className="stack-label">Proof</p>
                    <div>
                      <p className="text-sm leading-7 text-foreground-soft">
                        {project.outcome}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.proof.map((item) => (
                          <span className="tag" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
                <div className="panel-subtle">
                  <p className="stack-label">Confidentiality note</p>
                  <p className="mt-3 text-sm leading-7 text-foreground-soft">
                    {project.confidentialityNote}
                  </p>
                </div>
                <div className="panel-subtle">
                  <p className="stack-label">Assets to add next</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.proofAssets.map((asset) => (
                      <span className="tag" key={asset}>
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
