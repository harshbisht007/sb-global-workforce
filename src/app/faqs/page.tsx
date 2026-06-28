import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { buildMetadata } from "@/lib/seo";
import { jsonLd, breadcrumbSchema, faqSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about applying for overseas jobs, documentation, visas, timelines, employer verification and support — from S.B. Global Workforce.",
  path: "/faqs",
  keywords: ["overseas job FAQ", "recruitment questions", "Gulf visa questions"],
});

export default function FaqsPage() {
  return (
    <>
      <script {...jsonLd(faqSchema)} />
      <script {...jsonLd(breadcrumbSchema([{ name: "FAQs", path: "/faqs" }]))} />

      <PageHero
        eyebrow="FAQs"
        crumbs={[{ name: "FAQs" }]}
        title={
          <>
            Frequently asked{" "}
            <span className="text-gradient">questions</span>
          </>
        }
        description="Everything you need to know about working abroad through S.B. Global Workforce. Can't find your answer? Our team is always happy to help."
      />

      <FaqSection />
      <CtaSection />
    </>
  );
}
