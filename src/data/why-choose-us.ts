import {
  Award,
  BadgeCheck,
  Zap,
  Plane,
  MessagesSquare,
  Eye,
  Landmark,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export type Reason = {
  title: string;
  icon: LucideIcon;
  description: string;
};

export const reasons: Reason[] = [
  {
    title: "Experienced Recruitment Team",
    icon: Award,
    description:
      "A seasoned team with deep knowledge of Gulf labour markets, trades and employer expectations.",
  },
  {
    title: "Verified Employers",
    icon: BadgeCheck,
    description:
      "We partner only with genuine, vetted employers offering fair contracts and safe workplaces.",
  },
  {
    title: "Fast Documentation",
    icon: Zap,
    description:
      "Parallel processing of attestation, medicals and clearances keeps deployment timelines short.",
  },
  {
    title: "Visa Assistance",
    icon: Plane,
    description:
      "Complete visa stamping and emigration support handled accurately and on time.",
  },
  {
    title: "Interview Support",
    icon: MessagesSquare,
    description:
      "We coordinate interviews and prepare candidates so selection success rates stay high.",
  },
  {
    title: "Transparent Process",
    icon: Eye,
    description:
      "Clear costs, clear timelines and honest communication at every stage — no hidden surprises.",
  },
  {
    title: "Government Guidelines",
    icon: Landmark,
    description:
      "Ethical recruitment conducted strictly within Indian emigration law and destination regulations.",
  },
  {
    title: "Dedicated Support",
    icon: LifeBuoy,
    description:
      "A responsive support line for candidates and employers — before, during and after deployment.",
  },
];
