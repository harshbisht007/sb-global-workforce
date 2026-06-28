import Image from "next/image";
import { CheckCircle2, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Counter } from "@/components/ui/counter";

const highlights = [
  "Ethical, government-compliant recruitment",
  "Verified employers & transparent contracts",
  "End-to-end visa & documentation support",
  "Dedicated post-deployment assistance",
];

export function AboutPreview() {
  return (
    <section className="section">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-2">
        {/* Visual */}
        <Reveal direction="right" className="relative order-2 lg:order-1">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80"
                alt="Recruitment consultants discussing candidate placements"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80"
                alt="A successful candidate interview"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Experience badge */}
          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-card">
            <span className="font-display text-4xl font-bold text-gradient">
              <Counter value={15} suffix="+" />
            </span>
            <span className="text-sm font-medium leading-tight text-muted-foreground">
              Years of trusted
              <br />
              overseas hiring
            </span>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">About S.B. Global Workforce</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-[2.6rem]">
              A recruitment partner built on{" "}
              <span className="text-gradient">trust, speed and integrity</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Headquartered in Muzaffarpur, Bihar, we bridge the gap between
              ambitious Indian workers and reputable international employers. Our
              mission is simple — make overseas employment safe, transparent and
              life-changing for every candidate we serve.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-ink-soft">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/about" className="group">
                Discover Our Story
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <div className="flex items-start gap-2 text-sm italic text-muted-foreground">
                <Quote className="size-4 shrink-0 text-primary/40" />
                <span>“Right people. Right jobs. Every time.”</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
