import { siteConfig } from "./site";
import { faqs } from "@/data/faqs";

const { contact } = siteConfig;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon.svg`,
  image: `${siteConfig.url}/opengraph-image`,
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  foundingDate: String(siteConfig.established),
  email: contact.email,
  telephone: contact.primaryPhone,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
    addressLocality: contact.address.city,
    addressRegion: contact.address.state,
    postalCode: contact.address.postalCode,
    addressCountry: "IN",
  },
  areaServed: [
    "Saudi Arabia",
    "United Arab Emirates",
    "Qatar",
    "Kuwait",
    "Oman",
    "Bahrain",
  ],
  contactPoint: contact.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone,
    contactType: "customer service",
    areaServed: ["IN", "SA", "AE", "QA", "KW", "OM", "BH"],
    availableLanguage: ["English", "Hindi"],
  })),
  sameAs: [
    siteConfig.socials.linkedin,
    siteConfig.socials.facebook,
    siteConfig.socials.instagram,
    siteConfig.socials.youtube,
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: { "@id": `${siteConfig.url}/#organization` },
  inLanguage: "en-IN",
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/** Helper to render a JSON-LD script tag's props. */
export function jsonLd(data: unknown) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
