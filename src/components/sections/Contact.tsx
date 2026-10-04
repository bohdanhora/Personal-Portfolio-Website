import { DownloadCv } from "@/components/ui/DownloadCv";
import { Section } from "@/components/ui/Section";
import { SpecTable, type SpecRow } from "@/components/ui/SpecTable";
import { dictionaries } from "@/data/dictionary";
import { profile } from "@/data/profile";
import { t } from "@/lib/i18n";
import type { Locale } from "@/types";

function ExternalLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="link">
      {children}
    </a>
  );
}

function Email() {
  const [user, domain] = profile.email.split("@");
  return (
    <>
      {user}@<wbr />
      {domain}
    </>
  );
}

export function Contact({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const { phone, links } = profile;

  const rows: SpecRow[] = [
    {
      key: dict.email,
      value: (
        <a href={`mailto:${profile.email}`} className="link">
          <Email />
        </a>
      ),
    },
    ...(phone
      ? [
          {
            key: dict.phone,
            value: (
              <>
                <a href={phone.href} className="link">
                  {phone.display}
                </a>
                {phone.messengers.length ? (
                  <span className="text-ink-faint"> · {phone.messengers.join(", ")}</span>
                ) : null}
              </>
            ),
          },
        ]
      : []),
    {
      key: links.linkedin.label,
      value: <ExternalLink href={links.linkedin.href}>{links.linkedin.handle}</ExternalLink>,
    },
    {
      key: links.github.label,
      value: <ExternalLink href={links.github.href}>{links.github.handle}</ExternalLink>,
    },
    {
      key: links.telegram.label,
      value: <ExternalLink href={links.telegram.href}>{links.telegram.handle}</ExternalLink>,
    },
    { key: dict.location, value: t(profile.location, locale) },
  ];

  return (
    <Section id="contact" index="06" title={dict.sections.contact}>
      <p className="max-w-2xl text-xl font-medium leading-snug md:text-2xl">
        {t(profile.availability, locale)}.{" "}
        <span className="text-ink-muted">{dict.contactLead}</span>
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-10 block font-display text-email font-medium leading-tight tracking-tight decoration-accent decoration-2 underline-offset-4 hover:underline"
      >
        <Email />
      </a>

      <div className="mt-12 grid gap-10 lg:grid-cols-9">
        <SpecTable rows={rows} className="lg:col-span-6" />
        <div className="lg:col-span-3 lg:self-end">
          <DownloadCv locale={locale} />
        </div>
      </div>
    </Section>
  );
}
