import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechList";
import { dictionaries } from "@/data/dictionary";
import { companies, courses, education } from "@/data/experience";
import { t } from "@/lib/i18n";
import type { Locale } from "@/types";

export function Experience({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <Section id="experience" index="02" title={dict.sections.experience}>
      <div className="space-y-14">
        {companies.map((company) => (
          <article key={t(company.name, "en")}>
            <header className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 border-b border-rule-strong pb-3">
              <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                {t(company.name, locale)}
              </h3>
              <p className="label">
                {t(company.period, locale)} · {t(company.location, locale)} ·{" "}
                {t(company.arrangement, locale)}
              </p>
            </header>

            <ol>
              {company.roles.map((role) => (
                <li
                  key={`${role.title}-${role.start}`}
                  className="grid gap-x-8 gap-y-3 border-b border-rule py-6 md:grid-cols-9"
                >
                  <p className="font-mono text-xs leading-6 text-ink-muted md:col-span-2">
                    {role.start.replace("-", ".")}
                    <span className="text-ink-faint"> - </span>
                    {role.end === "present" ? (
                      <span className="text-accent">{dict.now}</span>
                    ) : (
                      role.end.replace("-", ".")
                    )}
                  </p>

                  <div className="md:col-span-7">
                    <h4 className="text-lg font-semibold leading-snug">{role.title}</h4>
                    <p className="mt-2 text-body leading-relaxed text-ink-muted">
                      {t(role.summary, locale)}
                    </p>

                    <ul className="mt-4 space-y-1.5" aria-label={dict.duties}>
                      {role.duties.map((duty) => (
                        <li key={t(duty, "en")} className="flex gap-3 text-body leading-snug">
                          <span aria-hidden className="mt-2 size-1.5 shrink-0 bg-accent" />
                          {t(duty, locale)}
                        </li>
                      ))}
                    </ul>

                    <TechList items={role.tech} className="mt-4" />
                  </div>
                </li>
              ))}
            </ol>
          </article>
        ))}

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="label border-b border-rule-strong pb-3 text-ink">{dict.education}</h3>
            <p className="mt-4 font-mono text-xs text-ink-muted">{t(education.period, locale)}</p>
            <p className="mt-2 text-lg font-semibold leading-snug">
              {t(education.institution, locale)}
            </p>
            <p className="mt-1 text-body text-ink-muted">
              {t(education.field, locale)}, {t(education.qualification, locale).toLowerCase()}
            </p>
            <p className="mt-1 text-sm text-ink-faint">{t(education.note, locale)}</p>
          </div>

          <div>
            <h3 className="label border-b border-rule-strong pb-3 text-ink">{dict.courses}</h3>
            {courses.map((course) => (
              <div key={course.provider} className="mt-4">
                <p className="font-mono text-xs text-ink-muted">{t(course.period, locale)}</p>
                <p className="mt-2 text-lg font-semibold leading-snug">
                  {t(course.title, locale)}, {course.provider}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-faint">
                  {t(course.note, locale)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
