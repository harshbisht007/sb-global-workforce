import Image from "next/image";
import type { Metadata } from "next";
import { MapPin, Briefcase, ArrowRight, Globe2 } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/sections/cta-section";
import { buildMetadata } from "@/lib/seo";
import { jsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { countries, flagUrl } from "@/data/countries";

export const metadata: Metadata = buildMetadata({
  title: "Countries We Recruit For",
  description:
    "S.B. Global Workforce places Indian talent across the Gulf — Saudi Arabia, UAE, Qatar, Kuwait, Oman and Bahrain — with verified employers and strong local relationships.",
  path: "/countries",
  keywords: [
    "jobs in Saudi Arabia",
    "jobs in UAE",
    "jobs in Qatar",
    "Gulf country recruitment",
  ],
});

export default function CountriesPage() {
  return (
    <>
      <script
        {...jsonLd(
          breadcrumbSchema([{ name: "Countries", path: "/countries" }])
        )}
      />

      <PageHero
        eyebrow="Countries We Recruit For"
        crumbs={[{ name: "Countries" }]}
        title={
          <>
            Opportunities across the{" "}
            <span className="text-gradient">Gulf region</span>
          </>
        }
        description="We maintain trusted, long-standing relationships with verified employers in six Gulf countries — opening doors to safe, well-paid careers."
      />

      <section className="section">
        <div className="container-wide">
          <Stagger className="grid gap-6 md:grid-cols-2">
            {countries.map((country) => (
              <StaggerItem key={country.code}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="flex items-center gap-4 border-b border-border p-6">
                    <span className="relative h-14 w-20 overflow-hidden rounded-lg shadow-md ring-1 ring-black/5">
                      <Image
                        src={flagUrl(country.code, 320)}
                        alt={`${country.name} flag`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-ink">
                        {country.name}
                      </h2>
                      <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="size-3.5" />
                        Capital · {country.capital}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {country.blurb}
                    </p>
                    <div className="mt-5">
                      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink">
                        <Briefcase className="size-3.5 text-primary" />
                        In-demand sectors
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {country.sectors.map((sector) => (
                          <Badge key={sector}>{sector}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button
                      href="/contact"
                      variant="outline"
                      className="mt-6 w-full group/btn"
                    >
                      Explore {country.name} Jobs
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </Button>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Beyond the Gulf */}
          <Reveal>
            <div className="mt-10 flex flex-col items-center gap-4 rounded-[2rem] border border-dashed border-primary/30 bg-primary/[0.03] p-8 text-center sm:flex-row sm:text-left">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                <Globe2 className="size-7" />
              </span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-ink">
                  Looking beyond the Gulf?
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We also support selected international employers in other
                  regions. Get in touch to discuss your specific requirement.
                </p>
              </div>
              <Button href="/contact">Talk to Us</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
