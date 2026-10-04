import type { Locale, Localized } from "@/types";

export const locales: Locale[] = ["en", "uk", "ru"];

export const defaultLocale: Locale = "en";

export const localePath: Record<Locale, string> = { en: "/", uk: "/uk", ru: "/ru" };

export const localeLabel: Record<Locale, string> = { en: "EN", uk: "UA", ru: "RU" };

export const ogLocale: Record<Locale, string> = { en: "en_US", uk: "uk_UA", ru: "ru_UA" };

export function t(value: Localized, locale: Locale): string {
  return typeof value === "string" ? value : value[locale];
}
