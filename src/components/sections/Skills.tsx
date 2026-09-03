import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          // The last group holds phrases rather than names, so it takes the row.
          const isWide = index === skillGroups.length - 1;

          return (
            <Reveal
              key={group.title}
              delay={0.05 * (index % 2)}
              className={cn(isWide && "sm:col-span-2")}
            >
              <h3 className="font-serif text-lg tracking-tight">{group.title}</h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-8 border-t border-rule">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-rule py-2.5 text-[0.9375rem] text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
