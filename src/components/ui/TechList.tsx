import { cn } from "@/lib/utils";

/**
 * Technologies read as a typographic list rather than a wall of pills.
 * The separator sits after the item so a wrapped line never starts with one.
 */
export function TechList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap font-mono text-xs text-ink-faint", className)}>
      {items.map((item, index) => (
        <li key={item}>
          {item}
          {index < items.length - 1 ? (
            <span aria-hidden className="px-2 text-rule-strong">
              /
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
