import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          // The last group is wider than the rest, so it takes the full row.
          const isWide = index === skillGroups.length - 1;

          return (
            <Reveal
              key={group.title}
              delay={0.05 * (index % 2)}
              className={cn(isWide && "sm:col-span-2")}
            >
              <div className="border-t border-rule pt-4">
                <h3 className="font-sans text-sm text-ink">{group.title}</h3>
                <ul
                  className={cn(
                    "mt-3 space-y-1.5",
                    isWide && "sm:columns-2 sm:gap-x-12 sm:space-y-0 sm:[&>li]:mb-1.5",
                  )}
                >
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-ink-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
