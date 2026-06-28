import Image from "next/image";
import type { Metadata } from "next";
import {
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Globe2,
  Users,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";
import { CtaSection } from "@/components/sections/cta-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { buildMetadata } from "@/lib/seo";
import { jsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { trustStats } from "@/data/stats";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about S.B. Global Workforce — a trusted overseas manpower recruitment company in Muzaffarpur, Bihar, connecting Indian talent with verified Gulf employers since 2009.",
  path: "/about",
  keywords: ["about S.B. Global Workforce", "overseas recruitment company India"],
});

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity First",
    text: "Honest, ethical recruitment with transparent costs and no false promises — ever.",
  },
  {
    icon: HeartHandshake,
    title: "People-Centric",
    text: "Every candidate is treated with dignity; every employer as a long-term partner.",
  },
  {
    icon: Globe2,
    title: "Global Standards",
    text: "We operate to international compliance, safety and quality benchmarks.",
  },
  {
    icon: Sparkles,
    title: "Relentless Quality",
    text: "Rigorous screening ensures only the right, job-ready people are deployed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        {...jsonLd(
          breadcrumbSchema([{ name: "About", path: "/about" }])
        )}
      />

      <PageHero
        eyebrow="About Us"
        crumbs={[{ name: "About" }]}
        title={
          <>
            People-first recruitment,{" "}
            <span className="text-gradient">delivered with integrity</span>
          </>
        }
        description="For over a decade, S.B. Global Workforce has been a bridge between skilled Indian workers and reputable employers across the Gulf — built on trust, transparency and genuine care."
      />

      {/* Story */}
      <section className="section">
        <div className="container-wide grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=80"
                  alt="The S.B. Global Workforce team collaborating in the office"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-card sm:-right-6">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Users className="size-6" />
                </span>
                <div>
                  <p className="font-display text-2xl font-bold text-ink">
                    <Counter value={250} suffix="+" />
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Employer partners
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow">Our Story</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-3xl font-bold leading-[1.12] sm:text-4xl">
                From Muzaffarpur to the{" "}
                <span className="text-gradient">Gulf and beyond</span>
              </h2>
            </Reveal>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <Reveal delay={0.1}>
                <p>
                  S.B. Global Workforce was founded with a clear purpose: to give
                  Indian workers safe, dignified access to life-changing overseas
                  employment, while giving international employers a recruitment
                  partner they can truly rely on.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Headquartered in Muzaffarpur, Bihar, we have grown into a
                  trusted name in overseas manpower recruitment — placing
                  thousands of skilled and unskilled professionals across
                  construction, oil &amp; gas, hospitality, healthcare and more.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  What sets us apart is not just scale, but our unwavering
                  commitment to ethical, government-compliant recruitment — and
                  the dedicated support we provide at every step of the journey.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-border bg-ink py-16 text-white">
        <div className="container-wide grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {trustStats.map((stat) => (
            <Reveal key={stat.label}>
              <div className="font-display text-4xl font-bold text-white sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container-wide grid gap-6 lg:grid-cols-2">
          {[
            {
              icon: Target,
              tag: "Our Mission",
              title: "Empower lives through ethical global employment",
              text: "To connect the right people with the right jobs — opening doors to better futures for workers and dependable talent for employers, always within a transparent, lawful and respectful framework.",
            },
            {
              icon: Eye,
              tag: "Our Vision",
              title: "To be India's most trusted overseas recruiter",
              text: "To set the benchmark for integrity and quality in international recruitment, recognised across the Gulf and beyond as the partner that puts people first — every single time.",
            },
          ].map((item, i) => (
            <Reveal key={item.tag} delay={i * 0.08} direction={i === 0 ? "right" : "left"}>
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-border bg-white p-8 shadow-soft sm:p-10">
                <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary/5 blur-2xl" />
                <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <item.icon className="size-7" />
                </span>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary-700">
                  {item.tag}
                </p>
                <h3 className="mt-2 text-2xl font-bold text-ink">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section bg-secondary/40">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Core Values"
            title={
              <>
                The principles that{" "}
                <span className="text-gradient">guide everything we do</span>
              </>
            }
            className="mb-14"
          />
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="h-full rounded-3xl border border-border bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/8 text-primary-700">
                    <value.icon className="size-7" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <WhyChooseUsSection />
      <CtaSection />
    </>
  );
}
