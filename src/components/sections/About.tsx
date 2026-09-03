import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function About() {
  const [lede, ...rest] = profile.about;

  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-12">
        <div className="md:col-span-8">
          <Reveal>
            <p className="font-serif text-2xl leading-snug md:text-[2rem] md:leading-[1.25]">
              {lede}
            </p>
          </Reveal>

          {rest.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.06 * (index + 1)}>
              <p className="mt-7 text-[1.0625rem] leading-relaxed text-ink-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="md:col-span-4 md:col-start-9">
          <dl className="divide-y divide-rule border-t border-rule">
            {profile.facts.map((fact) => (
              <div key={fact.label} className="py-4">
                <dt className="label">{fact.label}</dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-snug text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
