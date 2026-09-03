import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechList";

export function SelectedWork() {
  return (
    <Section id="work" index="03" title="Selected work">
      <Reveal>
        <p className="max-w-xl text-[0.9375rem] leading-relaxed text-ink-muted">
          Most of this is client work under NDA, so the descriptions stay at the level of the
          problem and the engineering rather than the product behind it.
        </p>
      </Reveal>

      <ol className="mt-10">
        {projects.map((project, index) => (
          <li key={project.title}>
            <Reveal as="article" className="border-t border-rule py-9 md:py-12">
              <div className="grid gap-x-8 gap-y-4 md:grid-cols-12">
                <div className="flex items-baseline gap-4 md:col-span-3 md:block">
                  <span aria-hidden className="font-serif text-3xl leading-none text-ink-faint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="md:mt-4">
                    <p className="text-[0.8125rem] text-ink-faint">{project.kind}</p>
                    <p className="text-[0.8125rem] text-ink-faint">{project.period}</p>
                  </div>
                </div>

                <div className="md:col-span-9">
                  <h3 className="font-serif text-[1.75rem] leading-tight tracking-tight md:text-[2.125rem]">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">{project.summary}</p>

                  <TechList items={project.tech} className="mt-6" />

                  {project.links ? (
                    <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
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
