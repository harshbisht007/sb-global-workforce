import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/sections/cta-section";
import { buildMetadata } from "@/lib/seo";
import { jsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "S.B. Global Workforce recruits skilled and unskilled manpower across construction, oil & gas, hospitality, healthcare, manufacturing, engineering, facility management and logistics.",
  path: "/industries",
  keywords: [
    "construction recruitment",
    "oil and gas manpower",
    "hospitality staff recruitment",
    "healthcare recruitment Gulf",
  ],
});

export default function IndustriesPage() {
  return (
    <>
      <script
        {...jsonLd(
          breadcrumbSchema([{ name: "Industries", path: "/industries" }])
        )}
      />

      <PageHero
        eyebrow="Industries We Serve"
        crumbs={[{ name: "Industries" }]}
        title={
          <>
            Specialist talent for{" "}
            <span className="text-gradient">every major sector</span>
          </>
        }
        description="We understand the unique demands of each industry — and supply trade-tested, job-ready professionals matched precisely to your requirements."
      >
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {industries.map((i) => (
            <a
              key={i.slug}
              href={`#${i.slug}`}
              className="rounded-full border border-border bg-white/70 px-3.5 py-1.5 text-sm font-medium text-ink-soft backdrop-blur transition-colors hover:border-primary/30 hover:text-primary-700"
            >
              {i.title}
            </a>
          ))}
        </div>
      </PageHero>

      {/* Detail sections */}
      <div className="divide-y divide-border">
        {industries.map((industry, index) => {
          const reversed = index % 2 === 1;
          return (
            <section
              key={industry.slug}
              id={industry.slug}
              className="scroll-mt-24 py-16 sm:py-20 lg:py-24"
            >
              <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
                {/* Image */}
                <Reveal
                  direction={reversed ? "left" : "right"}
                  className={cn(reversed && "lg:order-2")}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-card">
                    <Image
                      src={industry.image}
                      alt={`${industry.title} workforce`}
                      fill
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-tr mix-blend-multiply",
                        industry.accent
                      )}
                    />
                    <span className="absolute left-5 top-5 flex size-14 items-center justify-center rounded-2xl bg-white/90 text-primary-700 shadow-soft backdrop-blur">
                      <industry.icon className="size-7" strokeWidth={1.75} />
                    </span>
                  </div>
                </Reveal>

                {/* Copy */}
                <div className={cn(reversed && "lg:order-1")}>
                  <Reveal>
                    <Badge>{`0${index + 1}`} · Sector</Badge>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
                      {industry.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {industry.description}
                    </p>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink">
                      Roles we recruit
                    </p>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {industry.roles.map((role) => (
                        <li key={role} className="flex items-start gap-2.5">
                          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                          <span className="text-sm font-medium text-ink-soft">
                            {role}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal delay={0.2}>
                    <Button href="/contact" className="mt-8 group">
                      Hire {industry.title} Talent
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CtaSection />
    </>
  );
}
