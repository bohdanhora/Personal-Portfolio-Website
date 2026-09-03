import { approach } from "@/data/approach";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function Approach() {
  return (
    <Section id="approach" index="05" title="Approach">
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {approach.map((item, index) => (
          <Reveal key={item.title} delay={0.05 * (index % 2)}>
            <article className="border-t border-rule pt-5">
              <h3 className="font-serif text-lg leading-snug tracking-tight">{item.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
