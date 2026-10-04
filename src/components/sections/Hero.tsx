import { DownloadCv } from "@/components/ui/DownloadCv";
import { KyivClock } from "@/components/ui/KyivClock";
import { SpecTable } from "@/components/ui/SpecTable";
import { TypedHeadline } from "@/components/ui/TypedHeadline";
import { dictionaries } from "@/data/dictionary";
import { profile } from "@/data/profile";
import { t } from "@/lib/i18n";
import type { Locale } from "@/types";

export function Hero({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const name = t(profile.name, locale);
  const [first = "", last = ""] = name.split(" ");

  const links = [
    { label: profile.links.linkedin.label, href: profile.links.linkedin.href, external: true },
    { label: profile.links.github.label, href: profile.links.github.href, external: true },
    { label: profile.links.telegram.label, href: profile.links.telegram.href, external: true },
    { label: dict.email, href: `mailto:${profile.email}`, external: false },
  ];

  const rows = [
    { key: dict.position, value: t(profile.position, locale) },
    { key: dict.stack, value: "TypeScript · React · Next.js · NestJS · PostgreSQL" },
    { key: dict.location, value: t(profile.location, locale) },
    {
      key: dict.status,
      value: (
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className="h-2 w-2 bg-accent" />
          {t(profile.availability, locale)}
        </span>
      ),
    },
    {
      key: dict.languages,
      value: profile.languages
        .map((language) => `${t(language.name, locale)} ${t(language.level, locale).split(",")[0]}`)
        .join(" · "),
    },
  ];

  return (
    <section id="top" className="pt-24 pb-16 md:pt-28 md:pb-24">
      <div className="shell">
        <div className="md:px-6">
          <div className="animate-fade-up flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-y border-rule-strong py-2.5">
            <p className="label text-ink">{profile.title}</p>
            <p className="label">
              {dict.localTime}{" "}
              <span className="text-ink">
                <KyivClock />
              </span>
            </p>
          </div>

          <h1
            className="animate-fade-up mt-10 font-display text-hero font-semibold uppercase md:mt-14"
            style={{ animationDelay: "0.08s" }}
          >
            <span className="sr-only">{name}</span>
            <TypedHeadline phrases={[[first, last], ...dict.headline]} />
          </h1>

          <div
            className="animate-fade-up mt-12 grid gap-10 md:mt-16 md:grid-cols-12"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="md:col-span-6">
              <p className="text-xl font-medium leading-snug md:text-2xl">
                {t(profile.intro[0] ?? "", locale)}{" "}
                <span className="text-ink-muted">{t(profile.intro[1] ?? "", locale)}</span>
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <DownloadCv locale={locale} />
                <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                        className="link"
                      >
                        {link.label}
                        {link.external ? <span aria-hidden> ↗</span> : null}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <SpecTable rows={rows} className="md:col-span-6 md:col-start-7 md:self-end" />
          </div>
        </div>
      </div>
    </section>
  );
}
