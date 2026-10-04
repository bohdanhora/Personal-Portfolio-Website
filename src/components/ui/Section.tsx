import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, index, title, children, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn("py-16 md:py-24", className)}>
      <div className="shell">
        <div className="grid gap-8 border-t border-rule-strong pt-6 md:mx-6 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-3">
            <div className="flex items-baseline gap-4 md:sticky md:top-24 md:block">
              <p aria-hidden className="font-mono text-xs text-accent">
                §{index}
              </p>
              <h2
                id={`${id}-heading`}
                className="font-display text-xl font-medium uppercase tracking-tight md:mt-3 md:text-2xl"
              >
                {title}
              </h2>
            </div>
          </div>
          <div className="min-w-0 md:col-span-9">{children}</div>
        </div>
      </div>
    </section>
  );
}
