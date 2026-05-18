import Link from "next/link";
import { featuredProjects, type ServiceDetail } from "@/components/home/home-data";
import { SiteHeader } from "@/components/site/site-header";
import { ProofDiagram } from "@/components/site/proof-diagram";
import { VisualMedia } from "@/components/site/visual-media";

type ServiceDetailPageProps = {
  service: ServiceDetail;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const relatedProjects = featuredProjects.filter((project) =>
    service.relatedProjectIds.includes(project.id)
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="grid-shell relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <SiteHeader currentPath="/services" />

          <div className="grid gap-8 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:py-24">
            <div className="space-y-6">
              <p className="eyebrow">{service.label}</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl">
                {service.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-foreground-soft sm:text-lg">
                {service.intro}
              </p>
              <p className="max-w-2xl text-sm leading-7 text-foreground-muted">
                {service.detailIntro}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel service-hero-visual">
              <VisualMedia asset={service.visual} priority size="hero" />
              <p className="stack-label">What this service solves</p>
              <div className="mt-6 space-y-3">
                {service.outcomes.map((outcome) => (
                  <div className="list-row" key={outcome}>
                    <span className="list-dot" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="panel lg:col-span-2">
            <p className="eyebrow">Deliverables</p>
            <div className="mt-6 grid gap-4">
              {service.deliverables.map((item) => (
                <div className="panel-subtle" key={item}>
                  <p className="text-sm leading-7 text-foreground-soft">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <p className="eyebrow">Best Fit</p>
            <div className="mt-6 space-y-3">
              {service.fit.map((item) => (
                <div className="list-row" key={item}>
                  <span className="list-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="panel grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <ProofDiagram
            items={service.artifacts}
            label="Expected artifacts"
            title={service.label}
            variant={
              service.slug === "salesforce-integrations"
                ? "integration"
                : service.slug === "ai-automation"
                  ? "ai"
                  : "platform"
            }
          />

          <div>
            <p className="eyebrow">Example Starting Scopes</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Concrete enough to evaluate before a full proposal.
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground-soft">
              {service.timeline}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="panel-subtle">
                <p className="stack-label">Example work</p>
                <div className="mt-4 space-y-3">
                  {service.examples.map((item) => (
                    <div className="list-row" key={item}>
                      <span className="list-dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel-subtle">
                <p className="stack-label">Artifacts you should expect</p>
                <div className="mt-4 space-y-3">
                  {service.artifacts.map((item) => (
                    <div className="list-row" key={item}>
                      <span className="list-dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="button-primary" href="/#contact">
                Send a project brief
              </Link>
              <Link className="button-secondary" href="/work">
                See proof examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="panel">
            <p className="eyebrow">How Engagements Start</p>
            <div className="mt-6 grid gap-4">
              {service.engagementSteps.map((item, index) => (
                <div className="artifact-row" key={item}>
                  <p className="artifact-label">Step 0{index + 1}</p>
                  <p className="artifact-text">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <p className="eyebrow">Not Ideal For</p>
            <div className="mt-6 space-y-3">
              {service.notFit.map((item) => (
                <div className="list-row" key={item}>
                  <span className="list-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="panel grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="eyebrow">Expected Outcomes</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Built to improve speed, clarity, and system reliability.
            </h2>
          </div>

          <div className="space-y-3">
            {service.results.map((item) => (
              <div className="list-row" key={item}>
                <span className="list-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="panel">
            <p className="eyebrow">Trust Signals</p>
            <div className="mt-6 space-y-3">
              {service.proofPoints.map((item) => (
                <div className="list-row" key={item}>
                  <span className="list-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <p className="eyebrow">Buyer Questions</p>
            <div className="mt-6 grid gap-4">
              {service.keyQuestions.map((item) => (
                <div className="panel-subtle" key={item.question}>
                  <h2 className="text-lg font-semibold tracking-[-0.03em] text-white">
                    {item.question}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-foreground-soft">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="panel">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Related Work</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Examples that show how this service works in real systems.
                </h2>
              </div>
              <Link className="button-secondary" href="/work">
                View all system examples
              </Link>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {relatedProjects.map((project) => (
                <article className="panel-subtle" key={project.id}>
                  <VisualMedia asset={project.visual} size="card" />
                  <p className="stack-label">{project.category}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground-soft">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.proof.map((item) => (
                      <span className="tag" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link
                    className="mt-6 inline-flex text-sm text-accent-cyan"
                    href={`/work/${project.slug}`}
                  >
                    Read system example
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="panel cta-panel">
          <p className="eyebrow">Next Step</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            If this is the bottleneck, we can turn it into the build plan.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-foreground-soft">
            Share the context through the project brief and we will respond with
            the clearest path for scope, architecture, and delivery.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="button-primary" href="/#contact">
              Send a project brief
            </Link>
            <Link className="button-secondary" href="/services">
              Explore all services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
