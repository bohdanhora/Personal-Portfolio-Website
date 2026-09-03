import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
};

/**
 * Every section shares the same skeleton: a narrow left rail holding the
 * number and the heading, and a wide right column holding the content.
 * On desktop the rail stays with you while the content scrolls past it.
 */
export function Section({ id, index, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("border-t border-rule py-20 md:py-28", className)}
    >
      <div className="shell grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-3">
          <Reveal className="md:sticky md:top-28">
            <div className="flex items-baseline gap-4 md:flex-col md:items-start md:gap-3">
              <span className="label" aria-hidden>
                {index}
              </span>
              <h2 id={`${id}-heading`} className="font-sans text-sm tracking-tight text-ink-muted">
                {title}
              </h2>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
