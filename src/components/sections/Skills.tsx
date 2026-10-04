import { Section } from "@/components/ui/Section";
import { dictionaries } from "@/data/dictionary";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { t } from "@/lib/i18n";
import type { Locale } from "@/types";

export function Skills({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  const rows = [
    ...skillGroups.map((group) => ({
      title: t(group.title, locale),
      items: group.items.map((item) => t(item, locale)),
    })),
    {
      title: dict.languages,
      items: profile.languages.map(
        (language) => `${t(language.name, locale)}: ${t(language.level, locale)}`,
      ),
    },
  ];

  return (
    <Section id="skills" index="04" title={dict.sections.skills}>
      <div className="border-t border-rule-strong">
        {rows.map((row) => (
          <div
            key={row.title}
            className="grid gap-x-8 gap-y-3 border-b border-rule py-5 md:grid-cols-9"
          >
            <h3 className="label pt-1 text-ink md:col-span-2">{row.title}</h3>
            <ul className="flex flex-wrap gap-1.5 md:col-span-7">
              {row.items.map((item) => (
                <li
                  key={item}
                  className="border border-rule px-2.5 py-1 text-body leading-snug transition-colors hover:border-rule-strong"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
