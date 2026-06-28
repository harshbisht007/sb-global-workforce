import { Marquee } from "@/components/ui/marquee";
import { industries } from "@/data/industries";

export function TrustMarquee() {
  return (
    <section className="border-y border-border bg-secondary/40 py-10">
      <div className="container-wide">
        <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Recruiting specialist talent across every major sector
        </p>
        <Marquee>
          {industries.map((industry) => (
            <div
              key={industry.slug}
              className="flex items-center gap-2.5 text-ink-muted"
            >
              <industry.icon className="size-5 text-primary/70" />
              <span className="whitespace-nowrap font-display text-lg font-semibold">
                {industry.title}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
