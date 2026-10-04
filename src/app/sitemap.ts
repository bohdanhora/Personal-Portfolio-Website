import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/profile";
import { localePath, locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => new URL(path, siteUrl).toString();
  const languages = Object.fromEntries(locales.map((code) => [code, url(localePath[code])]));

  return locales.map((code) => ({
    url: url(localePath[code]),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: code === "en" ? 1 : 0.8,
    alternates: { languages },
  }));
}
