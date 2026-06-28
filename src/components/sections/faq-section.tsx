import Link from "next/link";
import { MessageCircleQuestion, ArrowRight } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/faqs";

interface FaqSectionProps {
  /** Limit number of FAQs shown (home page shows a subset). */
  limit?: number;
  withSideCta?: boolean;
}

export function FaqSection({ limit, withSideCta = true }: FaqSectionProps) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section id="faqs" className="section">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left rail */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="eyebrow">FAQs</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-3xl font-bold leading-[1.12] sm:text-4xl">
              Questions?{" "}
              <span className="text-gradient">We have answers.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Everything you need to know about applying, documentation, visas
              and working abroad. Still unsure? Our team is one message away.
            </p>
          </Reveal>

          {withSideCta && (
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-3xl border border-primary/15 bg-primary/[0.04] p-6">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-white">
                  <MessageCircleQuestion className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  Can&apos;t find your answer?
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Talk to a recruitment advisor for personalised guidance.
                </p>
                <Button href="/contact" className="mt-5 w-full sm:w-auto">
                  Ask a Question
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </Reveal>
          )}
        </div>

        {/* Accordion */}
        <Reveal delay={0.1} direction="left">
          <Accordion items={items} />
          {limit && limit < faqs.length && (
            <div className="mt-6">
              <Link
                href="/faqs"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:underline"
              >
                View all {faqs.length} questions
                <ArrowRight className="size-4" />
              </Link>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
