import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function About() {
  const [lede, ...rest] = profile.about;

  return (
    <Section id="about" index="01" title="About">
      <div className="max-w-2xl">
        <Reveal>
          <p className="font-serif text-2xl leading-snug text-balance md:text-[1.75rem]">{lede}</p>
        </Reveal>

        {rest.map((paragraph, index) => (
          <Reveal key={paragraph} delay={0.06 * (index + 1)}>
            <p className="mt-6 leading-relaxed text-ink-muted">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
