import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { industries } from "@/data/industries";

interface IndustriesSectionProps {
  /** When false, renders a tighter grid without the section heading/CTA. */
  withHeading?: boolean;
}

export function IndustriesSection({
  withHeading = true,
}: IndustriesSectionProps) {
  return (
    <section id="industries" className="section bg-secondary/40">
      <div className="container-wide">
        {withHeading && (
          <SectionHeading
            eyebrow="Industries We Serve"
            title={
              <>
                Specialist manpower for{" "}
                <span className="text-gradient">eight core sectors</span>
              </>
            }
            description="From construction sites to five-star hotels, we deploy trade-tested professionals matched precisely to your requirements."
            className="mb-14"
          />
        )}

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <Link
                href={`/industries#${industry.slug}`}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-card"
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    industry.accent
                  )}
                />
                <div className="relative flex items-center justify-between">
                  <span className="flex size-[3.25rem] items-center justify-center rounded-2xl bg-primary/8 text-primary-700 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <industry.icon className="size-6" strokeWidth={1.75} />
                  </span>
                  <ArrowUpRight className="size-5 -translate-y-1 translate-x-1 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-primary group-hover:opacity-100" />
                </div>
                <div className="relative">
                  <h3 className="text-lg font-semibold text-ink">
                    {industry.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {industry.short}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {withHeading && (
          <div className="mt-12 flex justify-center">
            <Button href="/industries" variant="outline" size="lg">
              Explore All Industries
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
