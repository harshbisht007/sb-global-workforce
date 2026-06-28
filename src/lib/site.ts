/**
 * Central configuration for S.B. Global Workforce.
 * Single source of truth for contact info, navigation and brand metadata.
 */

export const siteConfig = {
  name: "S.B. Global Workforce",
  shortName: "S.B. Global",
  legalName: "S.B. Global Workforce",
  tagline: "Connecting the Right People with the Right Jobs",
  description:
    "S.B. Global Workforce is a trusted overseas manpower recruitment company in India, helping skilled and unskilled Indian workers find verified employment across the Gulf and beyond — and helping international employers hire reliable talent.",
  // Used for canonical URLs / OG / sitemap. Update to the live domain when deployed.
  url: "https://www.sbglobalworkforce.com",
  ogImage: "/og-image.png",
  locale: "en_IN",
  established: 2009,

  contact: {
    phones: ["+91 9910504898", "+91 9810506898", "+91 6214413628"],
    primaryPhone: "+91 9910504898",
    whatsapp: "+91 9910504898",
    email: "sbetkt@gmail.com",
    timing: "Mon – Sat · 10:00 AM – 7:00 PM IST",
    address: {
      line1: "3rd Floor, Sagar Complex",
      line2: "NH 57, SKMCH Flyover, PO Umanagar",
      area: "Ahiyapur",
      city: "Muzaffarpur",
      state: "Bihar",
      postalCode: "842004",
      country: "India",
    },
    // Generic embed centred on Muzaffarpur — no API key required.
    mapEmbed:
      "https://www.google.com/maps?q=Muzaffarpur%2C%20Bihar%20842004&output=embed",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Muzaffarpur+Bihar+842004",
  },

  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
    twitter: "https://x.com",
  },
} as const;

export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Industries", href: "/industries" },
  { title: "Services", href: "/services" },
  { title: "Why Us", href: "/why-choose-us" },
  { title: "Process", href: "/recruitment-process" },
  { title: "Countries", href: "/countries" },
  { title: "Gallery", href: "/gallery" },
  { title: "FAQs", href: "/faqs" },
  { title: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { title: "About Us", href: "/about" },
    { title: "Why Choose Us", href: "/why-choose-us" },
    { title: "Recruitment Process", href: "/recruitment-process" },
    { title: "Gallery", href: "/gallery" },
    { title: "FAQs", href: "/faqs" },
    { title: "Contact", href: "/contact" },
  ],
  industries: [
    { title: "Construction", href: "/industries#construction" },
    { title: "Oil & Gas", href: "/industries#oil-gas" },
    { title: "Hospitality", href: "/industries#hospitality" },
    { title: "Healthcare", href: "/industries#healthcare" },
    { title: "Manufacturing", href: "/industries#manufacturing" },
    { title: "Engineering", href: "/industries#engineering" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};
