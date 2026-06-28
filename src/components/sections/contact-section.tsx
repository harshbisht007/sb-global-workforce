import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site";
import { telHref, whatsappHref } from "@/lib/utils";

interface ContactSectionProps {
  withHeading?: boolean;
}

export function ContactSection({ withHeading = true }: ContactSectionProps) {
  const { contact } = siteConfig;
  const addr = contact.address;

  const infoCards = [
    {
      icon: Phone,
      label: "Call us",
      lines: contact.phones,
      hrefs: contact.phones.map((p) => telHref(p)),
    },
    {
      icon: Mail,
      label: "Email us",
      lines: [contact.email],
      hrefs: [`mailto:${contact.email}`],
    },
    {
      icon: Clock,
      label: "Office hours",
      lines: [contact.timing],
    },
  ];

  return (
    <section id="contact" className="section bg-secondary/40">
      <div className="container-wide">
        {withHeading && (
          <SectionHeading
            eyebrow="Get In Touch"
            title={
              <>
                Let&apos;s start your{" "}
                <span className="text-gradient">journey together</span>
              </>
            }
            description="Reach out for job opportunities or hiring requirements. Our team responds quickly across phone, email and WhatsApp."
            className="mb-14"
          />
        )}

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
          {/* Left: info + map */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {infoCards.map((card) => (
                  <div
                    key={card.label}
                    className="rounded-3xl border border-border bg-white p-5 shadow-soft"
                  >
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/8 text-primary-700">
                      <card.icon className="size-5" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {card.label}
                    </p>
                    <div className="mt-1 flex flex-col gap-0.5">
                      {card.lines.map((line, i) =>
                        card.hrefs ? (
                          <a
                            key={line}
                            href={card.hrefs[i]}
                            className="text-sm font-semibold text-ink transition-colors hover:text-primary-700"
                          >
                            {line}
                          </a>
                        ) : (
                          <span
                            key={line}
                            className="text-sm font-semibold text-ink"
                          >
                            {line}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Address + WhatsApp */}
            <Reveal delay={0.05}>
              <div className="flex flex-col gap-4 rounded-3xl border border-border bg-white p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent-700">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Visit our office
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink">
                      {addr.line1}, {addr.line2}, {addr.area}, {addr.city},{" "}
                      {addr.state} {addr.postalCode}
                    </p>
                  </div>
                </div>
                <a
                  href={whatsappHref(contact.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="size-4" fill="currentColor" />
                  WhatsApp
                </a>
              </div>
            </Reveal>

            {/* Map */}
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                <iframe
                  src={contact.mapEmbed}
                  title={`Map showing ${siteConfig.name} office in ${addr.city}`}
                  width="100%"
                  height="280"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full grayscale-[0.2]"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.05} direction="left">
            <div className="rounded-[2rem] border border-border bg-white p-6 shadow-card sm:p-8">
              <h3 className="text-xl font-semibold text-ink">
                Send us a message
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Fill in the form and we&apos;ll prepare your enquiry on WhatsApp
                instantly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
