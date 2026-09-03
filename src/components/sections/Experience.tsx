import { education } from "@/data/experience";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ExperienceTimeline />

      <Reveal className="mt-16 border-t border-rule pt-8">
        <h3 className="label">Education</h3>
        <p className="mt-3 font-serif text-2xl tracking-tight">{education.institution}</p>
        <p className="mt-2 text-[0.9375rem] text-ink-muted">
          {education.qualification}
          <span aria-hidden className="px-2 text-rule-strong">
            /
          </span>
          {education.field}
        </p>
        <p className="mt-1 text-sm text-ink-faint">
          {education.period}
          <span aria-hidden className="px-2 text-rule-strong">
            /
          </span>
          {education.note}
        </p>
      </Reveal>
    </Section>
  );
}
