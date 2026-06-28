"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Star,
  MapPin,
  Plane,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { flagUrl } from "@/data/countries";

const heroCountries = [
  { code: "sa", name: "Saudi Arabia" },
  { code: "ae", name: "UAE" },
  { code: "qa", name: "Qatar" },
  { code: "kw", name: "Kuwait" },
  { code: "om", name: "Oman" },
  { code: "bh", name: "Bahrain" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
      {/* Background layers */}
      <div className="absolute inset-0 -z-20 bg-radial-fade" />
      <div className="absolute inset-0 -z-20 bg-grid-light bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="absolute -left-40 top-10 -z-10 size-[28rem] rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute -right-40 top-40 -z-10 size-[26rem] rounded-full bg-accent/10 blur-[120px]" />

      <div className="container-wide grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — copy */}
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-primary-700 shadow-soft backdrop-blur"
          >
            <span className="flex size-2 items-center justify-center">
              <span className="absolute size-2 animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="size-2 rounded-full bg-emerald-500" />
            </span>
            Trusted overseas recruitment since 2009
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[4.1rem]"
          >
            Connecting the{" "}
            <span className="text-gradient">right people</span> with the right
            jobs worldwide
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            S.B. Global Workforce recruits skilled and unskilled Indian talent
            for leading employers across the Gulf — handling screening, visas,
            documentation and deployment, end to end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.18 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/contact" size="lg" className="group">
              Apply Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <PhoneCall className="size-4" />
              Contact Us
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.26 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-brand-gradient text-[10px] font-bold text-white"
                  >
                    {["RK", "SY", "MS", "AH"][i - 1]}
                  </span>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5" fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs font-medium text-muted-foreground">
                  12,000+ workers placed
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-ink-soft">
              <ShieldCheck className="size-5 text-primary" />
              Govt. guideline compliant
            </div>
          </motion.div>
        </div>

        {/* Right — visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.15 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/60 shadow-card sm:aspect-[5/5]">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1100&q=80"
              alt="A professional recruitment team helping candidates find overseas jobs"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
          </div>

          {/* Floating: visa approved */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-8 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/90 p-3 pr-4 shadow-card backdrop-blur-md sm:-left-8"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
              <Plane className="size-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-ink">Visa Approved</p>
              <p className="text-xs text-muted-foreground">98% success rate</p>
            </div>
          </motion.div>

          {/* Floating: countries */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-5 -right-2 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-card backdrop-blur-md sm:-right-6"
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <MapPin className="size-3.5 text-primary" />
              Hiring across 6 Gulf countries
            </div>
            <div className="mt-2.5 flex gap-1.5">
              {heroCountries.map((c) => (
                <span
                  key={c.code}
                  title={c.name}
                  className="relative h-5 w-7 overflow-hidden rounded-[3px] ring-1 ring-black/5"
                >
                  <Image
                    src={flagUrl(c.code, 80)}
                    alt={c.name}
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
