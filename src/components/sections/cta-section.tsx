import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";
import { telHref } from "@/lib/utils";

interface CtaSectionProps {
  title?: React.ReactNode;
  description?: string;
}

export function CtaSection({
  title = (
    <>
      Ready to take the next step in your{" "}
      <span className="text-white">overseas career?</span>
    </>
  ),
  description = "Whether you are a job seeker dreaming of a better future or an employer searching for reliable talent — we are ready to help today.",
}: CtaSectionProps) {
  return (
    <section className="section">
      <div className="container-wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-hero-gradient px-6 py-16 text-center shadow-card sm:px-12 sm:py-20">
            {/* Decorative layers */}
            <div className="pointer-events-none absolute inset-0 bg-grid-light bg-[size:40px_40px] opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-primary/40 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -right-16 size-72 rounded-full bg-accent/30 blur-[100px]" />

            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow border-white/20 bg-white/10 text-white">
                Let&apos;s get started
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                {description}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/contact" variant="white" size="lg" className="group">
                  Apply Now
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button
                  href={telHref(siteConfig.contact.primaryPhone)}
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <PhoneCall className="size-4" />
                  {siteConfig.contact.primaryPhone}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
