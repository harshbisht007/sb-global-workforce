import type { Metadata } from "next";
import { Wrench, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { telHref } from "@/lib/utils";
export const metadata: Metadata = {
  title: `Under Maintenance | ${siteConfig.name}`,
  description:
    "We're currently performing scheduled maintenance. We'll be back shortly.",
  robots: { index: false, follow: false },
};
export default function MaintenancePage() {
  const { contact } = siteConfig;
  const primaryEmail = contact.email.split(",")[0].trim();
  return (
    <main className="flex min-h-screen items-center justify-center bg-secondary/40 px-4">
      {" "}
      <div className="mx-auto flex w-full max-w-xl flex-col items-center rounded-[2rem] border border-border bg-white p-10 text-center shadow-soft sm:p-14">
        {" "}
        <span className="flex size-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
          {" "}
          <Wrench className="size-8" strokeWidth={1.75} />{" "}
        </span>{" "}
        <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary-700">
          {" "}
          {siteConfig.name}{" "}
        </p>{" "}
        <h1 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
          {" "}
          We&apos;ll be back soon{" "}
        </h1>{" "}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {" "}
          Our website is currently undergoing scheduled maintenance to serve you
          better. Please check back shortly.{" "}
        </p>{" "}
        <div className="mt-8 w-full rounded-2xl border border-border bg-secondary/40 p-5">
          {" "}
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
            {" "}
            For more queries, please contact{" "}
          </p>{" "}
          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
            {" "}
            <a
              href={telHref(contact.primaryPhone)}
              className="flex items-center gap-2 text-sm font-medium text-ink hover:text-primary"
            >
              {" "}
              <Phone className="size-4 text-primary" />{" "}
              {contact.primaryPhone}{" "}
            </a>{" "}
            <a
              href={`mailto:${primaryEmail}`}
              className="flex items-center gap-2 text-sm font-medium text-ink hover:text-primary"
            >
              {" "}
              <Mail className="size-4 text-primary" /> {primaryEmail}{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </main>
  );
}
