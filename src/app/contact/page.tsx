import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { ContactSection } from "@/components/sections/contact-section";
import { buildMetadata } from "@/lib/seo";
import { jsonLd, breadcrumbSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact S.B. Global Workforce in Muzaffarpur, Bihar. Call, email or WhatsApp us for overseas job opportunities or to hire skilled Indian manpower for the Gulf.",
  path: "/contact",
  keywords: ["contact recruitment agency", "overseas jobs contact", "hire manpower India"],
});

export default function ContactPage() {
  const { contact } = siteConfig;
  const quick = [
    {
      icon: Phone,
      label: "Phone",
      value: contact.primaryPhone,
      href: telHref(contact.primaryPhone),
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    { icon: Clock, label: "Hours", value: "Mon–Sat · 10–7 IST" },
    { icon: MapPin, label: "City", value: "Muzaffarpur, Bihar" },
  ];

  return (
    <>
      <script
        {...jsonLd(breadcrumbSchema([{ name: "Contact", path: "/contact" }]))}
      />

      <PageHero
        eyebrow="Contact Us"
        crumbs={[{ name: "Contact" }]}
        title={
          <>
            Let&apos;s talk about your{" "}
            <span className="text-gradient">next opportunity</span>
          </>
        }
        description="Whether you're seeking an overseas job or skilled manpower for your company, our team is ready to help. Reach out — we respond fast."
      >
        <div className="mt-6 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {quick.map((q) => {
            const Inner = (
              <div className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-white/70 px-3 py-4 text-center shadow-soft backdrop-blur transition-colors hover:border-primary/30">
                <q.icon className="size-5 text-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {q.label}
                </span>
                <span className="text-xs font-medium text-ink">{q.value}</span>
              </div>
            );
            return q.href ? (
              <a key={q.label} href={q.href}>
                {Inner}
              </a>
            ) : (
              <div key={q.label}>{Inner}</div>
            );
          })}
        </div>
      </PageHero>

      <ContactSection withHeading={false} />
    </>
  );
}
