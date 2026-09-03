import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule py-8">
      <div className="shell flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-ink-faint">
          {profile.name}
          <span aria-hidden className="px-2 text-rule-strong">
            /
          </span>
          {profile.title}
        </p>
        <p className="text-xs text-ink-faint">
          <a href="#top" className="link-underline transition-colors hover:text-ink-muted">
            Back to top
          </a>
        </p>
      </div>
    </footer>
  );
}
