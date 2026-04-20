import type { Metadata } from "next";
import Link from "next/link";
import { featuredProjects } from "@/components/home/home-data";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Niyyah Labs work across Salesforce integrations, ecommerce systems, and multi-surface product engineering.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="grid-shell relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <SiteHeader currentPath="/work" />

          <div className="mt-16 max-w-3xl space-y-5 pb-16 lg:pb-24">
            <p className="eyebrow">Work</p>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              Systems built around reliability, automation, and operational clarity.
            </h1>
            <p className="text-base leading-7 text-foreground-soft sm:text-lg">
              A closer look at the kinds of engineering problems Niyyah Labs is
              built for: enterprise data movement, marketplace infrastructure,
              and multi-surface products that support real business workflows.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="mt-12 grid gap-5">
          {featuredProjects.map((project) => (
            <article className="panel proof-project" key={project.id}>
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-accent-cyan">
                    {project.category}
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm text-foreground-muted">
                    {project.clientLabel}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-foreground-soft">
                    {project.summary}
                  </p>
                  <Link
                    className="mt-6 inline-flex text-sm text-accent-cyan"
                    href={`/work/${project.slug}`}
                  >
                    Read case study
                  </Link>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                  <div className="panel-subtle">
                    <p className="stack-label">Problem</p>
                    <p className="mt-3 text-sm leading-7 text-foreground-soft">
                      {project.problem}
                    </p>
                  </div>
                  <div className="panel-subtle">
                    <p className="stack-label">Architecture</p>
                    <div className="mt-3 space-y-3">
                      {project.architecture.map((item) => (
                        <div className="list-row" key={item}>
                          <span className="list-dot" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="panel-subtle">
                    <p className="stack-label">Outcome</p>
                    <p className="mt-3 text-sm leading-7 text-foreground-soft">
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
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
