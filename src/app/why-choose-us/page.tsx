import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { buildMetadata } from "@/lib/seo";
import { jsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { trustStats } from "@/data/stats";

export const metadata: Metadata = buildMetadata({
  title: "Why Choose Us",
  description:
    "Why thousands of workers and hundreds of employers trust S.B. Global Workforce — experienced team, verified employers, fast documentation, full visa assistance and transparent, government-compliant recruitment.",
  path: "/why-choose-us",
  keywords: ["trusted recruitment agency", "ethical overseas recruitment"],
});

const comparison = [
  "Government-compliant, ethical recruitment",
  "Verified employers & transparent contracts",
  "No hidden charges — costs explained upfront",
  "Fast, parallel documentation processing",
  "Full visa & emigration assistance",
  "Dedicated post-deployment support",
  "Trade-tested, job-ready candidates",
];

export default function WhyChooseUsPage() {
  return (
    <>
      <script
        {...jsonLd(
          breadcrumbSchema([{ name: "Why Choose Us", path: "/why-choose-us" }])
        )}
      />

      <PageHero
        eyebrow="Why Choose Us"
        crumbs={[{ name: "Why Choose Us" }]}
        title={
          <>
            The recruitment partner you can{" "}
            <span className="text-gradient">genuinely trust</span>
          </>
        }
        description="Experience, integrity and a relentless focus on doing right by every candidate and employer — here's what sets S.B. Global Workforce apart."
      />

      <WhyChooseUsSection withHeading={false} />

      {/* Stats */}
      <section className="border-y border-border bg-ink py-16 text-white">
        <div className="container-wide grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {trustStats.map((stat) => (
            <Reveal key={stat.label}>
              <div className="font-display text-4xl font-bold sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="section">
        <div className="container-wide">
          <SectionHeading
            eyebrow="The Difference"
            title={
              <>
                The S.B. Global standard vs.{" "}
                <span className="text-gradient">the rest</span>
              </>
            }
            description="Not all recruitment agencies are equal. Here's how we compare to the typical experience."
            className="mb-12"
          />

          <Reveal>
            <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
              {/* Us */}
              <div className="rounded-[2rem] border-2 border-primary/30 bg-primary/[0.03] p-7 shadow-soft">
                <h3 className="text-lg font-bold text-primary-700">
                  S.B. Global Workforce
                </h3>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {comparison.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                        <Check className="size-3.5" />
                      </span>
                      <span className="text-sm font-medium text-ink-soft">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Others */}
              <div className="rounded-[2rem] border border-border bg-white p-7 shadow-soft">
                <h3 className="text-lg font-bold text-muted-foreground">
                  Typical agencies
                </h3>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {comparison.map((item) => (
                    <li key={item} className="flex items-start gap-3 opacity-70">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                        <X className="size-3.5" />
                      </span>
                      <span className="text-sm text-muted-foreground line-through decoration-destructive/30">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
