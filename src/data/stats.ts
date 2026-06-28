export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 12000, suffix: "+", label: "Workers Deployed" },
  { value: 250, suffix: "+", label: "Employer Partners" },
  { value: 8, suffix: "", label: "Industries Served" },
];

export const trustStats: Stat[] = [
  { value: 6, suffix: "", label: "Gulf Countries" },
  { value: 98, suffix: "%", label: "Visa Success Rate" },
  { value: 30, suffix: "+", label: "Days Avg. Deployment" },
  { value: 24, suffix: "/7", label: "Candidate Support" },
];
