import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechList";

export function SelectedWork() {
  return (
    <Section id="work" index="03" title="Selected work">
      <Reveal>
        <p className="max-w-xl text-sm leading-relaxed text-ink-muted">
          Most of this is client work under NDA, so the descriptions stay at the level of the
          problem and the engineering rather than the product behind it.
        </p>
      </Reveal>

      <ol className="mt-10">
        {projects.map((project, index) => (
          <li key={project.title}>
            <Reveal as="article" className="border-t border-rule py-9 md:py-11">
              <div className="grid gap-x-8 gap-y-4 md:grid-cols-12">
                <div className="md:col-span-3">
                  <span className="label">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-2 text-xs text-ink-faint">{project.kind}</p>
                  <p className="text-xs text-ink-faint">{project.period}</p>
                </div>

                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl leading-tight tracking-tight md:text-[1.75rem]">
                    {project.title}
                  </h3>
                  <p className="mt-3.5 text-sm leading-relaxed text-ink-muted">{project.summary}</p>

                  <TechList items={project.tech} className="mt-5" />

                  {project.links ? (
                    <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                      {project.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="link-underline text-sm text-ink transition-colors hover:text-accent"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
