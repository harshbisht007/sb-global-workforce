import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { footerNav, siteConfig } from "@/lib/site";
import { telHref } from "@/lib/utils";
import { Logo } from "./logo";

const socials = [
  { icon: Linkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
  { icon: Facebook, href: siteConfig.socials.facebook, label: "Facebook" },
  { icon: Instagram, href: siteConfig.socials.instagram, label: "Instagram" },
  { icon: Youtube, href: siteConfig.socials.youtube, label: "YouTube" },
];

export function Footer() {
  const { contact } = siteConfig;
  const year = 2025;

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* Glow accents */}
      <div className="pointer-events-none absolute -left-32 top-0 size-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container-wide relative">
        {/* Top */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-20">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Logo light />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <FooterColumn title="Company" links={footerNav.company} />
          {/* Industries links */}
          <FooterColumn title="Industries" links={footerNav.industries} />

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary-300" />
                <span>
                  {contact.address.line1}, {contact.address.line2},{" "}
                  {contact.address.area}, {contact.address.city},{" "}
                  {contact.address.state} {contact.address.postalCode}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary-300" />
                <span className="flex flex-col">
                  {contact.phones.map((p) => (
                    <a
                      key={p}
                      href={telHref(p)}
                      className="transition-colors hover:text-white"
                    >
                      {p}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary-300" />
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary-300" />
                <span>{contact.timing}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm text-white/50 md:flex-row">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">
        {title}
      </h4>
      <ul className="flex flex-col gap-3 text-sm text-white/70">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1 transition-colors hover:text-white"
            >
              {link.title}
              <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
