import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Turn a phone string into a tel: friendly value. */
export function telHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

/** Build a wa.me link with an optional prefilled message. */
export function whatsappHref(phone: string, message?: string) {
  const number = phone.replace(/[^\d]/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${text}`;
}
