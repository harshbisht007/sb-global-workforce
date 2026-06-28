import {
  Send,
  SearchCheck,
  Users,
  FileText,
  StampIcon,
  PlaneTakeoff,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

export type ProcessStep = {
  number: string;
  title: string;
  icon: LucideIcon;
  description: string;
  duration: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Apply",
    icon: Send,
    description:
      "Candidates register and submit their profile, qualifications and work experience through our team.",
    duration: "Day 1",
  },
  {
    number: "02",
    title: "Screening",
    icon: SearchCheck,
    description:
      "We verify documents and conduct skill assessments and trade tests to confirm job readiness.",
    duration: "2–4 days",
  },
  {
    number: "03",
    title: "Interview",
    icon: Users,
    description:
      "Shortlisted candidates are presented to employers for on-site or video interviews and selection.",
    duration: "1–2 weeks",
  },
  {
    number: "04",
    title: "Documentation",
    icon: FileText,
    description:
      "Passports, attestation, medicals (GAMCA) and police clearance are processed in parallel.",
    duration: "1–3 weeks",
  },
  {
    number: "05",
    title: "Visa",
    icon: StampIcon,
    description:
      "Work-visa stamping and eMigrate emigration clearance are completed per government guidelines.",
    duration: "1–2 weeks",
  },
  {
    number: "06",
    title: "Travel",
    icon: PlaneTakeoff,
    description:
      "Tickets are booked, pre-departure orientation is delivered and travel is arranged end-to-end.",
    duration: "2–4 days",
  },
  {
    number: "07",
    title: "Deployment",
    icon: CheckCircle2,
    description:
      "The worker joins the employer abroad, with our team providing continued post-arrival support.",
    duration: "Ongoing",
  },
];
