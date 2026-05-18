import type { Metadata } from "next";
import Link from "next/link";
import { primaryServices } from "@/components/home/home-data";
import { SiteHeader } from "@/components/site/site-header";
import { ProofDiagram } from "@/components/site/proof-diagram";
import { VisualMedia } from "@/components/site/visual-media";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Niyyah Labs services across Salesforce integrations, AI automation, and MVP development.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="grid-shell relative overflow-hidden">
        <div className="page-shell px-6 py-6 lg:px-10">
          <SiteHeader currentPath="/services" />

          <div className="max-w-3xl space-y-5 py-12 lg:py-16">
            <p className="eyebrow">Services</p>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              Product builds, AI workflows, and integrations for teams with operational pressure.
            </h1>
            <p className="text-base leading-7 text-foreground-soft sm:text-lg">
              Choose the entry point closest to the business bottleneck. Each
              service includes fit, not-fit, deliverables, proof examples,
              artifacts, and the first practical next step.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell px-6 pb-18 lg:px-10 lg:pb-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {primaryServices.map((service) => (
            <article className="panel service-card" key={service.slug}>
              <VisualMedia asset={service.visual} size="card" />
              <p className="stack-label">{service.label}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-foreground-soft">
                {service.summary}
              </p>
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
      </section>

      <section className="page-shell px-6 pb-18 lg:px-10 lg:pb-20">
        <div className="panel">
          <div className="max-w-3xl">
            <p className="eyebrow">How to choose</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Start with the risk you need to reduce.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {primaryServices.map((service) => (
              <article className="panel-subtle" key={service.slug}>
                <ProofDiagram
                  items={service.artifacts}
                  label={service.label}
                  title={service.title}
                  variant={
                    service.slug === "salesforce-integrations"
                      ? "integration"
                      : service.slug === "ai-automation"
                        ? "ai"
                        : "platform"
                  }
                />
                <p className="stack-label">Choose this when</p>
                <div className="mt-4 space-y-3">
                  {service.fit.slice(0, 2).map((item) => (
                    <div className="list-row" key={item}>
                      <span className="list-dot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-foreground-soft">
                  <span className="text-white">Typical first output: </span>
                  {service.artifacts[0]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
