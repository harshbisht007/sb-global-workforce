"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  // Split into two columns for a staggered masonry-style flow on desktop.
  return (
    <section className="section bg-secondary/40">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by workers and{" "}
              <span className="text-gradient">employers alike</span>
            </>
          }
          description="Real stories from candidates we have placed and the companies that rely on us for dependable manpower."
          className="mb-14"
        />

        <div className="columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="break-inside-avoid rounded-3xl border border-border bg-white p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5 text-accent">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="size-4" fill="currentColor" />
                  ))}
                </div>
                <Quote className="size-7 text-primary/15" />
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <span
                  className={cn(
                    "flex size-11 items-center justify-center rounded-full text-sm font-bold text-white",
                    "bg-brand-gradient"
                  )}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-xs text-primary-600">{t.location}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
