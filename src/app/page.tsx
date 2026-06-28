import { Hero } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats-section";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { AboutPreview } from "@/components/sections/about-preview";
import { IndustriesSection } from "@/components/sections/industries-section";
import { ProcessSection } from "@/components/sections/process-section";
import { CountriesSection } from "@/components/sections/countries-section";
import { WhyChooseUsSection } from "@/components/sections/why-choose-us-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { ContactSection } from "@/components/sections/contact-section";
import { jsonLd, faqSchema } from "@/lib/jsonld";

export default function HomePage() {
  return (
    <>
      <script {...jsonLd(faqSchema)} />
      <Hero />
      <StatsSection />
      <TrustMarquee />
      <AboutPreview />
      <IndustriesSection />
      <WhyChooseUsSection />
      <ProcessSection className="bg-secondary/40" />
      <CountriesSection />
      <TestimonialsSection />
      <FaqSection limit={6} />
      <CtaSection />
      <ContactSection />
    </>
  );
}
