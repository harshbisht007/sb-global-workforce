import type { Metadata } from "next";
import { Check, ArrowRight, Building2, UserRound } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ProcessSection } from "@/components/sections/process-section";
import { CtaSection } from "@/components/sections/cta-section";
import { buildMetadata } from "@/lib/seo";
import { jsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { services } from "@/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "End-to-end overseas recruitment services — manpower sourcing, screening & trade testing, documentation, visa processing, pre-departure orientation and post-deployment support.",
  path: "/services",
  keywords: [
    "overseas recruitment services",
    "visa processing",
    "manpower documentation",
    "trade testing",
  ],
});

const audiences = [
  {
    icon: UserRound,
    tag: "For Job Seekers",
    title: "Your gateway to overseas employment",
    points: [
      "Free career guidance & profiling",
      "Genuine, verified job opportunities",
      "Complete visa & documentation support",
      "Pre-departure orientation & training",
    ],
  },
  {
    icon: Building2,
    tag: "For Employers",
    title: "Reliable manpower, mobilised fast",
    points: [
      "Access to a large, trade-tested talent pool",
      "Bulk & project-based recruitment drives",
      "Managed interviews & selection",
      "Full compliance & on-time deployment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        {...jsonLd(breadcrumbSchema([{ name: "Services", path: "/services" }]))}
      />

      <PageHero
        eyebrow="Our Services"
        crumbs={[{ name: "Services" }]}
        title={
          <>
            End-to-end recruitment,{" "}
            <span className="text-gradient">handled for you</span>
          </>
        }
        description="From first application to final deployment, we manage every step — so candidates travel prepared and employers receive the right people, on time."
      />

      {/* Services grid */}
      <section className="section">
        <div className="container-wide">
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <StaggerItem key={service.slug}>
                <div className="group flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-card">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 text-sm text-ink-soft"
                      >
                        <Check className="size-4 shrink-0 text-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Two audiences */}
      <section className="section bg-secondary/40">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Who We Help"
            title={
              <>
                Built for{" "}
                <span className="text-gradient">candidates and employers</span>
              </>
            }
            description="Whichever side you're on, we make overseas recruitment simple, transparent and successful."
            className="mb-14"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {audiences.map((aud, i) => (
              <Reveal key={aud.tag} delay={i * 0.08} direction={i === 0 ? "right" : "left"}>
                <div className="flex h-full flex-col rounded-[2rem] border border-border bg-white p-8 shadow-soft sm:p-10">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/8 text-primary-700">
                    <aud.icon className="size-7" strokeWidth={1.75} />
                  </span>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary-700">
                    {aud.tag}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-ink">
                    {aud.title}
                  </h3>
                  <ul className="mt-6 flex flex-col gap-3">
                    {aud.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="size-3.5" />
                        </span>
                        <span className="text-sm font-medium text-ink-soft">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/contact"
                    variant="outline"
                    className="mt-8 w-full sm:w-auto group"
                  >
                    {i === 0 ? "Apply as a Candidate" : "Hire Talent"}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CtaSection />
    </>
  );
}
