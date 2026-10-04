import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SpecRow = { key: string; value: ReactNode };

type SpecTableProps = {
  rows: SpecRow[];
  stacked?: boolean;
  className?: string;
};

export function SpecTable({ rows, stacked = false, className }: SpecTableProps) {
  return (
    <dl className={cn("border-t border-rule-strong", className)}>
      {rows.map((row) => (
        <div
          key={row.key}
          className={cn("flex border-b border-rule py-3", stacked ? "flex-col gap-1" : "gap-4")}
        >
          <dt className={cn("label pt-0.5", !stacked && "w-30 shrink-0 sm:w-36")}>{row.key}</dt>
          <dd className="min-w-0 text-body leading-snug text-ink wrap-anywhere">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
