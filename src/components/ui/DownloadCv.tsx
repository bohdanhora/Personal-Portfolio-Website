import { dictionaries } from "@/data/dictionary";
import { cvFileName } from "@/data/profile";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

export function DownloadCv({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <a href={`/${cvFileName[locale]}`} download className={cn("btn group", className)}>
      {dictionaries[locale].downloadCv}
      <span className="opacity-60">PDF</span>
      <span aria-hidden className="transition-transform duration-200 group-hover:translate-y-0.5">
        ↓
      </span>
    </a>
  );
}
