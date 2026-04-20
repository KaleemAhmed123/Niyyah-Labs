import type { Metadata } from "next";
import { faqItems } from "@/components/home/home-data";
import { SiteHeader } from "@/components/site/site-header";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common buyer questions about fit, delivery, ownership, and how Niyyah Labs approaches product, AI, and integration work.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="grid-shell relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <SiteHeader currentPath="/faq" />

          <div className="max-w-4xl py-16 lg:py-24">
            <p className="eyebrow">FAQ</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
              Clear answers before the build starts.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-foreground-soft sm:text-lg">
              Questions buyers usually ask before they commit to a product build,
              automation system, or integration engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 lg:px-10">
        <div className="grid gap-4">
          {faqItems.map((item) => (
            <article className="panel faq-card" key={item.question}>
              <h2 className="text-xl font-semibold tracking-[-0.03em] text-white">
                {item.question}
              </h2>
              <p className="mt-4 text-sm leading-7 text-foreground-soft">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
