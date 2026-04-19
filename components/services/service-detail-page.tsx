import Link from "next/link";
import type { ServiceDetail } from "@/components/home/home-data";

type ServiceDetailPageProps = {
  service: ServiceDetail;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="grid-shell relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <Link className="text-sm text-foreground-muted" href="/">
              Home
            </Link>
            <Link className="text-sm text-foreground-muted" href="/services">
              All services
            </Link>
          </div>

          <div className="grid gap-8 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:py-24">
            <div className="space-y-6">
              <p className="eyebrow">{service.label}</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl">
                {service.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-foreground-soft sm:text-lg">
                {service.intro}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel">
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
