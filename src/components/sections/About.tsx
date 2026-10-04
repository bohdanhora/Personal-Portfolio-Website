import { Section } from "@/components/ui/Section";
import { SpecTable } from "@/components/ui/SpecTable";
import { dictionaries } from "@/data/dictionary";
import { profile } from "@/data/profile";
import { t } from "@/lib/i18n";
import type { Locale } from "@/types";

export function About({ locale }: { locale: Locale }) {
  const [lede = "", ...rest] = profile.about.map((paragraph) => t(paragraph, locale));

  return (
    <Section id="about" index="01" title={dictionaries[locale].sections.about}>
      <div className="grid gap-x-10 gap-y-10 lg:grid-cols-9">
        <div className="lg:col-span-6">
          <p className="text-xl font-medium leading-snug md:text-2xl">{lede}</p>
          {rest.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-base leading-relaxed text-ink-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <SpecTable
          stacked
          className="self-start lg:col-span-3"
          rows={profile.facts.map((fact) => ({
            key: t(fact.label, locale),
            value: t(fact.value, locale),
          }))}
        />
      </div>
    </Section>
  );
}
