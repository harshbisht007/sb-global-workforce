"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { whatsappHref, cn } from "@/lib/utils";
import { industries } from "@/data/industries";
import { countries } from "@/data/countries";

type Field = "name" | "email" | "phone" | "industry" | "country" | "message";
type Errors = Partial<Record<Field, string>>;

const initial = {
  name: "",
  email: "",
  phone: "",
  industry: "",
  country: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (field: Field, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email))
      next.email = "Please enter a valid email.";
    if (values.phone.replace(/\D/g, "").length < 8)
      next.phone = "Please enter a valid phone number.";
    if (values.message.trim().length < 10)
      next.message = "Please add a few details (min. 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    // No backend — hand off to WhatsApp with a structured, prefilled message.
    const lines = [
      "New enquiry from S.B. Global Workforce website:",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      values.industry ? `Industry: ${values.industry}` : "",
      values.country ? `Preferred country: ${values.country}` : "",
      `Message: ${values.message}`,
    ].filter(Boolean);

    const href = whatsappHref(siteConfig.contact.whatsapp, lines.join("\n"));

    // Small delay for UX feedback, then open WhatsApp.
    window.setTimeout(() => {
      window.open(href, "_blank", "noopener,noreferrer");
      setStatus("sent");
      setValues(initial);
    }, 700);
  };

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-emerald-200 bg-emerald-50/60 p-10 text-center"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-emerald-500 text-white">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="text-xl font-semibold text-ink">Thank you!</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Your enquiry has been prepared in WhatsApp. Just press send and our
          team will get back to you shortly. You can also email us at{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-medium text-primary-700 underline"
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another enquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Full name"
          name="name"
          value={values.name}
          onChange={(v) => update("name", v)}
          error={errors.name}
          placeholder="e.g. Ramesh Kumar"
          required
        />
        <TextField
          label="Phone / WhatsApp"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(v) => update("phone", v)}
          error={errors.phone}
          placeholder="+91 98765 43210"
          required
        />
      </div>

      <TextField
        label="Email address"
        name="email"
        type="email"
        value={values.email}
        onChange={(v) => update("email", v)}
        error={errors.email}
        placeholder="you@example.com"
        required
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField
          label="Industry of interest"
          name="industry"
          value={values.industry}
          onChange={(v) => update("industry", v)}
          options={industries.map((i) => i.title)}
          placeholder="Select industry"
        />
        <SelectField
          label="Preferred country"
          name="country"
          value={values.country}
          onChange={(v) => update("country", v)}
          options={countries.map((c) => c.name)}
          placeholder="Select country"
        />
      </div>

      <Field label="Your message" name="message" error={errors.message} required>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your experience, skills or hiring requirement…"
          className={inputClass(!!errors.message)}
        />
      </Field>

      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="w-full sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Preparing…
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send Enquiry
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        By submitting, you agree to our{" "}
        <a href="/privacy-policy" className="underline hover:text-primary-700">
          Privacy Policy
        </a>
        . We never share your details with third parties.
      </p>
    </form>
  );
}

/* ---------- field primitives ---------- */

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-2xl border bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:ring-4",
    hasError
      ? "border-destructive/50 focus:border-destructive focus:ring-destructive/10"
      : "border-border focus:border-primary focus:ring-primary/10"
  );
}

function Field({
  label,
  name,
  error,
  required,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-1 text-xs text-destructive"
          >
            <AlertCircle className="size-3" />
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

function TextField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <Field label={label} name={name} error={error} required={required}>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClass(!!error)}
      />
    </Field>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <Field label={label} name={name}>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(inputClass(false), "cursor-pointer appearance-none")}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </Field>
  );
}
