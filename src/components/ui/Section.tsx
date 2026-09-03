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
 * Every section shares the same skeleton: a narrow rail carrying the number
 * and the heading, and a wide column carrying the content. On desktop the rail
 * stays in place while the content scrolls past it.
 */
export function Section({ id, index, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("border-t border-rule py-20 md:py-28", className)}
    >
      <div className="shell grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-3">
          <Reveal className="md:sticky md:top-28">
            <div className="flex items-baseline gap-5 md:block">
              <span
                aria-hidden
                className="font-serif text-4xl leading-none text-accent md:text-[3.25rem]"
              >
                {index}
              </span>
              <span aria-hidden className="mt-6 hidden h-px w-10 bg-rule-strong md:block" />
              <h2
                id={`${id}-heading`}
                className="font-serif text-xl tracking-tight md:mt-5 md:text-2xl"
              >
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
