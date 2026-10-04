import { Section } from "@/components/ui/Section";
import { approach } from "@/data/approach";
import { dictionaries } from "@/data/dictionary";
import { t } from "@/lib/i18n";
import type { Locale } from "@/types";

export function Approach({ locale }: { locale: Locale }) {
  return (
    <Section id="approach" index="05" title={dictionaries[locale].sections.approach}>
      <ol className="grid gap-x-10 sm:grid-cols-2">
        {approach.map((item, index) => (
          <li key={t(item.title, "en")} className="border-t border-rule-strong py-6">
            <div className="flex gap-4">
              <span aria-hidden className="w-5 shrink-0 font-mono text-xs leading-7 text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold leading-snug">{t(item.title, locale)}</h3>
                <p className="mt-2 text-body leading-relaxed text-ink-muted">
                  {t(item.body, locale)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
