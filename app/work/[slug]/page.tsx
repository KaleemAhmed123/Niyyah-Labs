import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  primaryServices,
  type FeaturedProject,
  featuredProjects,
} from "@/components/home/home-data";
import { SiteHeader } from "@/components/site/site-header";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getRelatedServices(project: FeaturedProject) {
  return primaryServices.filter((service) =>
    project.relatedServices.includes(service.slug)
  );
}

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedServices = getRelatedServices(project);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="grid-shell relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <SiteHeader currentPath="/work" />

          <div className="grid gap-8 py-16 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:py-24">
            <div className="space-y-6">
              <p className="eyebrow">{project.category}</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-white sm:text-6xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-foreground-soft sm:text-lg">
                {project.summary}
              </p>
            </div>

            <div className="panel">
              <p className="stack-label">Proof Signals</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.proof.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-foreground-soft">
                {project.clientLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="panel">
            <p className="eyebrow">Problem</p>
            <p className="mt-6 text-sm leading-7 text-foreground-soft">
              {project.problem}
            </p>
          </article>

          <article className="panel">
            <p className="eyebrow">Architecture</p>
            <div className="mt-6 space-y-3">
              {project.architecture.map((item) => (
                <div className="list-row" key={item}>
                  <span className="list-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <p className="eyebrow">Outcome</p>
            <p className="mt-6 text-sm leading-7 text-foreground-soft">
              {project.outcome}
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <article className="panel">
            <p className="eyebrow">Implementation Approach</p>
            <div className="mt-6 grid gap-4">
              {project.approach.map((item, index) => (
                <div className="artifact-row" key={item}>
                  <p className="artifact-label">Decision 0{index + 1}</p>
                  <p className="artifact-text">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel">
            <p className="eyebrow">Impact</p>
            <div className="mt-6 space-y-3">
              {project.impact.map((item) => (
                <div className="list-row" key={item}>
                  <span className="list-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {relatedServices.length > 0 ? (
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="panel">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Related Services</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  Services connected to this kind of delivery work.
                </h2>
              </div>
              <Link className="button-secondary" href="/services">
                Explore all services
              </Link>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <article className="panel-subtle" key={service.slug}>
                  <p className="stack-label">{service.label}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-foreground-soft">
                    {service.summary}
                  </p>
                  <Link
                    className="mt-6 inline-flex text-sm text-accent-cyan"
                    href={`/services/${service.slug}`}
                  >
                    View service
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
            If this looks close to your bottleneck, we can shape the right scope.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="button-primary" href="/#contact">
              Send a project brief
            </Link>
            <Link className="button-secondary" href="/work">
              Back to work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
