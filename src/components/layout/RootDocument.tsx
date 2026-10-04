import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Martian_Mono, Unbounded } from "next/font/google";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { dictionaries } from "@/data/dictionary";
import { profile, siteUrl } from "@/data/profile";
import { localePath, locales, ogLocale, t } from "@/lib/i18n";
import type { Locale } from "@/types";
import "@/app/globals.css";

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-unbounded",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-plex",
  display: "swap",
});

const martian = Martian_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-martian",
  display: "swap",
});

export function buildMetadata(locale: Locale): Metadata {
  const name = t(profile.name, locale);
  const title = `${name} | ${profile.title}`;
  const description = dictionaries[locale].description;

  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s | ${name}` },
    description,
    applicationName: `${name} portfolio`,
    authors: [{ name, url: profile.links.github.href }],
    creator: name,
    keywords: [
      "Bohdan Hora",
      "Full-Stack Software Engineer",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "PostgreSQL",
    ],
    alternates: {
      canonical: localePath[locale],
      languages: {
        ...Object.fromEntries(locales.map((code) => [code, localePath[code]])),
        "x-default": localePath.en,
      },
    },
    openGraph: {
      type: "profile",
      url: localePath[locale],
      title,
      description,
      siteName: name,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((code) => code !== locale).map((code) => ogLocale[code]),
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0f1ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0d0f" },
  ],
};

export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t(profile.name, locale),
    jobTitle: profile.title,
    url: siteUrl,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressCountry: "UA" },
    knowsLanguage: ["uk", "en", "ru"],
    sameAs: Object.values(profile.links).map((link) => link.href),
  };

  return (
    <html lang={locale} className={`${unbounded.variable} ${plex.variable} ${martian.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="btn sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-70"
        >
          {dictionaries[locale].skipToContent}
        </a>
        <SiteHeader locale={locale} />
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
