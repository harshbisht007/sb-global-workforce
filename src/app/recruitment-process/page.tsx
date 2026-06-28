import type { Metadata } from "next";
import { Clock, ShieldCheck, FileCheck2, Headset } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ProcessSection } from "@/components/sections/process-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { buildMetadata } from "@/lib/seo";
import { jsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { processSteps } from "@/data/process";

export const metadata: Metadata = buildMetadata({
  title: "Our Recruitment Process",
  description:
    "A transparent 7-step overseas recruitment process — Apply, Screening, Interview, Documentation, Visa, Travel and Deployment — managed end-to-end by S.B. Global Workforce.",
  path: "/recruitment-process",
  keywords: ["recruitment process", "overseas job process", "visa process steps"],
});

const assurances = [
  {
    icon: Clock,
    title: "Fast Timelines",
    text: "Most deployments completed within 30–60 days through parallel processing.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Compliant",
    text: "Every step follows Indian emigration law and destination regulations.",
  },
  {
    icon: FileCheck2,
    title: "Documentation Done",
    text: "Attestation, medicals and clearances handled entirely by our team.",
  },
  {
    icon: Headset,
    title: "Always Supported",
    text: "A dedicated coordinator guides you from application to arrival.",
  },
];

export default function RecruitmentProcessPage() {
  return (
    <>
      <script
        {...jsonLd(
          breadcrumbSchema([
            { name: "Recruitment Process", path: "/recruitment-process" },
          ])
        )}
      />

      <PageHero
        eyebrow="Our Recruitment Process"
        crumbs={[{ name: "Recruitment Process" }]}
        title={
          <>
            A clear path from{" "}
            <span className="text-gradient">application to arrival</span>
          </>
        }
        description="No confusion, no surprises. Our proven seven-step process keeps you informed and supported at every stage of your overseas journey."
      />

      {/* Vertical timeline */}
      <section className="section">
        <div className="container-wide max-w-3xl">
          <div className="relative">
            <div className="absolute bottom-0 left-[1.6rem] top-2 w-px bg-gradient-to-b from-primary via-border to-transparent sm:left-[1.85rem]" />
            <div className="flex flex-col gap-10">
              {processSteps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.05} direction="left">
                  <div className="relative flex gap-5 sm:gap-7">
                    <div className="relative z-10 flex size-[3.25rem] shrink-0 items-center justify-center rounded-2xl border border-border bg-white shadow-soft sm:size-[3.75rem]">
                      <step.icon className="size-6 text-primary" />
                      <span className="absolute -right-1.5 -top-1.5 flex size-6 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <div className="flex-1 rounded-3xl border border-border bg-white p-5 shadow-soft sm:p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-semibold text-ink">
                          {step.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/8 px-2.5 py-0.5 text-[11px] font-semibold text-primary-700">
                          <Clock className="size-3" />
                          {step.duration}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assurances */}
      <section className="section bg-secondary/40">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Promise"
            title={
              <>
                What you can{" "}
                <span className="text-gradient">always count on</span>
              </>
            }
            className="mb-14"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {assurances.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-border bg-white p-6 text-center shadow-soft">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                    <a.icon className="size-7" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection limit={6} />
      <CtaSection />
    </>
  );
}
