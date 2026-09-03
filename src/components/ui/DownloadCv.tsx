import { cvFileName } from "@/data/profile";
import { cn } from "@/lib/utils";

/** Links the PDF that `npm run cv` builds from the same content as this page. */
export function DownloadCv({ className }: { className?: string }) {
  return (
    <a
      href={`/${cvFileName}`}
      download
      className={cn(
        "group inline-flex items-center gap-3 border border-rule-strong px-5 py-2.5 text-sm text-ink",
        "transition-colors hover:border-accent hover:text-accent",
        className,
      )}
    >
      Download CV
      <span
        aria-hidden
        className="translate-y-px transition-transform duration-300 group-hover:translate-y-1"
      >
        &#8595;
      </span>
    </a>
  );
}
