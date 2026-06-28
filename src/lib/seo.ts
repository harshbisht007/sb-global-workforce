import type { Metadata } from "next";
import { siteConfig } from "./site";

interface PageSeo {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

const baseKeywords = [
  "overseas recruitment agency",
  "manpower recruitment India",
  "Gulf jobs for Indians",
  "Indian workers for Gulf",
  "overseas manpower consultancy",
  "recruitment agency Bihar",
  "jobs in Saudi Arabia UAE Qatar",
  "skilled and unskilled manpower",
];

/** Build per-page metadata with consistent OG/Twitter/canonical tags. */
export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageSeo): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === "/" ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
