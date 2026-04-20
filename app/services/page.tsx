import type { Metadata } from "next";
import Link from "next/link";
import { primaryServices } from "@/components/home/home-data";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Niyyah Labs services across Salesforce integrations, AI automation, and MVP development.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="grid-shell relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <SiteHeader currentPath="/services" />

          <div className="max-w-3xl space-y-5 py-12 lg:py-16">
            <p className="eyebrow">Services</p>
            <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              Three core service pages built for modern business systems.
            </h1>
            <p className="text-base leading-7 text-foreground-soft sm:text-lg">
              Choose the entry point closest to your current bottleneck, then use
              the project brief to turn it into a practical build conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18 lg:px-10 lg:pb-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {primaryServices.map((service) => (
            <article className="panel service-card" key={service.slug}>
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
    </main>
  );
}
