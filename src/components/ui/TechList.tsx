import { cn } from "@/lib/utils";

export function TechList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap font-mono text-2xs leading-6 text-ink-muted", className)}>
      {items.map((item, index) => (
        <li key={item}>
          {item}
          {index < items.length - 1 ? (
            <span aria-hidden className="px-1.5 text-ink-faint">
              /
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
