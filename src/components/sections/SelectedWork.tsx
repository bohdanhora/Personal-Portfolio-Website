import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechList";
import { dictionaries } from "@/data/dictionary";
import { projects } from "@/data/projects";
import { t } from "@/lib/i18n";
import type { Locale, Project } from "@/types";

function ProjectCell({
  project,
  code,
  locale,
}: {
  project: Project;
  code: string;
  locale: Locale;
}) {
  return (
    <article className="flex flex-col border-b border-r border-rule-strong p-5 md:p-7 lg:last:odd:col-span-2">
      <div className="flex items-baseline justify-between gap-4">
        <span className="shrink-0 font-mono text-xs text-accent">{code}</span>
        <span className="label text-right">
          {t(project.kind, locale)} · {t(project.period, locale)}
        </span>
      </div>

      <h4 className="mt-6 font-display text-xl font-medium leading-tight tracking-tight md:text-2xl">
        {t(project.title, locale)}
      </h4>
      <p className="mt-4 text-body leading-relaxed text-ink-muted">{t(project.summary, locale)}</p>

      <TechList items={project.tech} className="mt-5" />

      {project.links ? (
        <ul className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.links.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className={index === 0 ? "btn py-2" : "btn btn-outline py-2"}
              >
                {t(link.label, locale)}
                <span aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function ProjectGroup({
  title,
  note,
  items,
  prefix,
  locale,
}: {
  title: string;
  note: string;
  items: Project[];
  prefix: string;
  locale: Locale;
}) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="label text-ink">{title}</h3>
        <p className="label">{String(items.length).padStart(2, "0")}</p>
      </div>
      <p className="mt-3 max-w-2xl text-body leading-relaxed text-ink-muted">{note}</p>

      <div className="mt-6 grid border-l border-t border-rule-strong lg:grid-cols-2">
        {items.map((project, index) => (
          <ProjectCell
            key={t(project.title, "en")}
            project={project}
            code={`${prefix}-${String(index + 1).padStart(2, "0")}`}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}

export function SelectedWork({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];

  return (
    <Section id="work" index="03" title={dict.sections.work}>
      <div className="space-y-16">
        <ProjectGroup
          title={dict.personalWork}
          note={dict.personalWorkNote}
          items={projects.filter((project) => project.personal)}
          prefix="P"
          locale={locale}
        />
        <ProjectGroup
          title={dict.clientWork}
          note={dict.clientWorkNote}
          items={projects.filter((project) => !project.personal)}
          prefix="C"
          locale={locale}
        />
      </div>
    </Section>
  );
}
