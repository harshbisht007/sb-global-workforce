import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { CtaSection } from "@/components/sections/cta-section";
import { buildMetadata } from "@/lib/seo";
import { jsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "A glimpse into S.B. Global Workforce — our team, candidate interviews, documentation process and the workplaces our recruits are deployed to across the Gulf.",
  path: "/gallery",
  keywords: ["recruitment gallery", "overseas jobs photos"],
});

export default function GalleryPage() {
  return (
    <>
      <script
        {...jsonLd(breadcrumbSchema([{ name: "Gallery", path: "/gallery" }]))}
      />

      <PageHero
        eyebrow="Gallery"
        crumbs={[{ name: "Gallery" }]}
        title={
          <>
            Moments from our{" "}
            <span className="text-gradient">recruitment journey</span>
          </>
        }
        description="From interviews and documentation to deployment — a look inside how we help people build better futures abroad."
      />

      <section className="section">
        <div className="container-wide">
          <GalleryGrid />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
