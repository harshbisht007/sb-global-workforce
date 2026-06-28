import {
  Users,
  FileCheck2,
  Plane,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  Headset,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "manpower-recruitment",
    title: "Manpower Recruitment",
    icon: Users,
    description:
      "End-to-end sourcing of skilled, semi-skilled and unskilled manpower matched precisely to each employer's job specification.",
    points: [
      "Large candidate database",
      "Trade-test verified profiles",
      "Bulk & project mobilisation",
    ],
  },
  {
    slug: "candidate-screening",
    title: "Screening & Trade Testing",
    icon: ClipboardCheck,
    description:
      "Rigorous multi-stage screening — document checks, skill assessments and trade tests — so employers receive only job-ready candidates.",
    points: [
      "Background verification",
      "Practical trade tests",
      "Skill & experience grading",
    ],
  },
  {
    slug: "interview-coordination",
    title: "Interview Coordination",
    icon: Briefcase,
    description:
      "We organise and manage online or on-site interviews and selection drives, handling logistics so you can focus on choosing the right people.",
    points: [
      "On-site & video interviews",
      "Selection drive management",
      "Shortlist preparation",
    ],
  },
  {
    slug: "documentation-attestation",
    title: "Documentation & Attestation",
    icon: FileCheck2,
    description:
      "Complete handling of passports, certificates, attestation, medicals and PCC so deployment timelines are never delayed.",
    points: [
      "Certificate attestation",
      "Medical (GAMCA) coordination",
      "Police clearance support",
    ],
  },
  {
    slug: "visa-processing",
    title: "Visa Processing",
    icon: Plane,
    description:
      "Reliable visa stamping and emigration clearance managed in line with government and embassy guidelines.",
    points: [
      "Work-visa stamping",
      "Emigration (eMigrate) clearance",
      "Ticketing & travel support",
    ],
  },
  {
    slug: "pre-departure-orientation",
    title: "Pre-Departure Orientation",
    icon: GraduationCap,
    description:
      "Orientation programmes that prepare candidates for life and work abroad — culture, rights, safety and workplace expectations.",
    points: [
      "Cultural orientation",
      "Worker rights briefing",
      "Safety & conduct training",
    ],
  },
  {
    slug: "compliance-guidance",
    title: "Compliance & Legal Guidance",
    icon: ShieldCheck,
    description:
      "Recruitment conducted strictly within Indian emigration law and destination-country labour regulations.",
    points: [
      "Government-guideline compliant",
      "Ethical recruitment",
      "Transparent contracts",
    ],
  },
  {
    slug: "post-deployment-support",
    title: "Post-Deployment Support",
    icon: Headset,
    description:
      "A dedicated support line that stays with workers and employers after deployment to resolve issues quickly.",
    points: [
      "Dedicated coordinators",
      "Issue resolution",
      "Replacement guarantee*",
    ],
  },
];
