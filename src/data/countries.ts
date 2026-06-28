export type Country = {
  name: string;
  code: string; // ISO 3166-1 alpha-2 for flagcdn
  capital: string;
  blurb: string;
  sectors: string[];
};

/** Flag images are served from flagcdn.com (no key required). */
export const flagUrl = (code: string, w: 80 | 160 | 320 = 160) =>
  `https://flagcdn.com/w${w}/${code.toLowerCase()}.png`;

export const countries: Country[] = [
  {
    name: "Saudi Arabia",
    code: "sa",
    capital: "Riyadh",
    blurb:
      "The Gulf's largest economy with sustained demand across Vision 2030 mega-projects, energy and hospitality.",
    sectors: ["Construction", "Oil & Gas", "Hospitality", "Healthcare"],
  },
  {
    name: "United Arab Emirates",
    code: "ae",
    capital: "Abu Dhabi",
    blurb:
      "A global business hub spanning Dubai and Abu Dhabi with strong demand for skilled and service talent.",
    sectors: ["Hospitality", "Facility Mgmt", "Logistics", "Engineering"],
  },
  {
    name: "Qatar",
    code: "qa",
    capital: "Doha",
    blurb:
      "Rapid infrastructure and tourism growth driving demand for trades, hospitality and engineering professionals.",
    sectors: ["Construction", "Hospitality", "Engineering"],
  },
  {
    name: "Kuwait",
    code: "kw",
    capital: "Kuwait City",
    blurb:
      "Established oil-economy with ongoing requirements for energy, manufacturing and facility teams.",
    sectors: ["Oil & Gas", "Manufacturing", "Facility Mgmt"],
  },
  {
    name: "Oman",
    code: "om",
    capital: "Muscat",
    blurb:
      "Diversifying economy with opportunities in tourism, logistics, construction and industrial projects.",
    sectors: ["Construction", "Logistics", "Hospitality"],
  },
  {
    name: "Bahrain",
    code: "bh",
    capital: "Manama",
    blurb:
      "A financial and industrial centre with consistent demand for skilled trades and service workers.",
    sectors: ["Manufacturing", "Hospitality", "Facility Mgmt"],
  },
];
