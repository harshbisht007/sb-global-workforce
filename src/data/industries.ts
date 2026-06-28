import {
  HardHat,
  Flame,
  ConciergeBell,
  HeartPulse,
  Factory,
  Wrench,
  Building2,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  roles: string[];
  image: string;
  accent: string; // tailwind gradient classes
};

export const industries: Industry[] = [
  {
    slug: "construction",
    title: "Construction",
    icon: HardHat,
    short: "Skilled trades & site labour for mega projects.",
    description:
      "From high-rise towers to highways, we deploy site-ready construction crews — masons, steel fixers, shuttering carpenters, plumbers, electricians and supervisors — screened for safety and trade competency.",
    roles: [
      "Masons & Steel Fixers",
      "Shuttering Carpenters",
      "Electricians & Plumbers",
      "Heavy Equipment Operators",
      "Site Supervisors & Foremen",
      "Civil & QA/QC Engineers",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    accent: "from-amber-500/15 to-orange-500/5",
  },
  {
    slug: "oil-gas",
    title: "Oil & Gas",
    icon: Flame,
    short: "Onshore & offshore energy specialists.",
    description:
      "We supply certified manpower for refineries, petrochemical plants and offshore platforms — welders, riggers, pipe fitters and technicians who meet international HSE standards.",
    roles: [
      "6G Welders & Pipe Fitters",
      "Riggers & Scaffolders",
      "Instrument & Electrical Techs",
      "Mechanical Technicians",
      "HSE Officers",
      "Process & Piping Engineers",
    ],
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    accent: "from-rose-500/15 to-red-500/5",
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    icon: ConciergeBell,
    short: "Five-star service talent for hotels & catering.",
    description:
      "Front-of-house and back-of-house professionals for luxury hotels, resorts and catering companies — trained in international service etiquette and hygiene standards.",
    roles: [
      "Chefs & Cooks (all cuisines)",
      "Waiters & Stewards",
      "Housekeeping Attendants",
      "Front Office & Concierge",
      "Baristas & Bartenders",
      "Food & Beverage Supervisors",
    ],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    accent: "from-violet-500/15 to-purple-500/5",
  },
  {
    slug: "engineering",
    title: "Engineering",
    icon: Wrench,
    short: "Technical & project engineering professionals.",
    description:
      "Degree and diploma engineers across civil, mechanical, electrical and instrumentation disciplines for EPC contractors and industrial clients.",
    roles: [
      "Civil & Structural Engineers",
      "Mechanical Engineers",
      "Electrical & Instrumentation",
      "Planning & QA/QC Engineers",
      "Draughtsmen & CAD Technicians",
      "Project & Site Engineers",
    ],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    accent: "from-sky-500/15 to-blue-500/5",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    short: "Qualified medical & care professionals.",
    description:
      "Licensed and experienced healthcare staff for hospitals, clinics and home-care providers — supported through credentialing and licensing processes.",
    roles: [
      "Staff Nurses (GNM/BSc)",
      "Lab & Radiology Technicians",
      "Pharmacists",
      "Caregivers & Attendants",
      "Physiotherapists",
      "Hospital Support Staff",
    ],
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    accent: "from-emerald-500/15 to-teal-500/5",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    short: "Production & plant operations workforce.",
    description:
      "Reliable production-line operators, machinists and quality staff for factories and industrial units, mobilised at scale with consistent quality.",
    roles: [
      "Machine Operators",
      "CNC & Lathe Operators",
      "Production Technicians",
      "Quality Inspectors",
      "Warehouse & Packing Staff",
      "Maintenance Technicians",
    ],
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    accent: "from-indigo-500/15 to-blue-500/5",
  },
  {
    slug: "facility-management",
    title: "Facility Management",
    icon: Building2,
    short: "Soft & hard services for built environments.",
    description:
      "Complete facility-management teams for commercial complexes, malls and residential communities — cleaning, security support and MEP maintenance.",
    roles: [
      "Cleaners & Janitors",
      "MEP Maintenance Staff",
      "AC Technicians",
      "Gardeners & Landscapers",
      "Security Support Staff",
      "Facility Supervisors",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    accent: "from-cyan-500/15 to-sky-500/5",
  },
  {
    slug: "logistics",
    title: "Logistics",
    icon: Truck,
    short: "Drivers & supply-chain personnel.",
    description:
      "Licensed drivers and warehouse professionals for transport, distribution and e-commerce operations across the Gulf.",
    roles: [
      "Light & Heavy Drivers",
      "Forklift Operators",
      "Warehouse Assistants",
      "Storekeepers",
      "Delivery Riders",
      "Logistics Coordinators",
    ],
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
    accent: "from-fuchsia-500/15 to-pink-500/5",
  },
];
