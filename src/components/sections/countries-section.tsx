import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { countries, flagUrl } from "@/data/countries";

interface CountriesSectionProps {
  withHeading?: boolean;
  withCta?: boolean;
}

export function CountriesSection({
  withHeading = true,
  withCta = true,
}: CountriesSectionProps) {
  return (
    <section
      id="countries"
      className="section relative overflow-hidden bg-ink text-white"
    >
      <div className="pointer-events-none absolute -left-40 top-1/3 size-96 rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-80 rounded-full bg-accent/10 blur-[140px]" />
      <div className="container-wide relative">
        {withHeading && (
          <SectionHeading
            light
            eyebrow="Countries We Recruit For"
            title={
              <>
                Trusted placements across the{" "}
                <span className="text-gradient">Gulf region</span>
              </>
            }
            description="We maintain strong employer relationships in six Gulf countries, opening doors to safe, well-paid opportunities."
            className="mb-14"
          />
        )}

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <StaggerItem key={country.code}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]">
                <div className="flex items-center gap-4">
                  <span className="relative h-10 w-14 overflow-hidden rounded-md shadow-md ring-1 ring-white/20">
                    <Image
                      src={flagUrl(country.code, 160)}
                      alt={`${country.name} flag`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {country.name}
                    </h3>
                    <p className="flex items-center gap-1 text-xs text-white/50">
                      <MapPin className="size-3" />
                      {country.capital}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {country.blurb}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {country.sectors.map((sector) => (
                    <Badge key={sector} variant="white" className="text-[11px]">
                      {sector}
                    </Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {withCta && (
          <div className="mt-12 flex justify-center">
            <Button href="/countries" variant="white" size="lg" className="group">
              View Country Details
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
