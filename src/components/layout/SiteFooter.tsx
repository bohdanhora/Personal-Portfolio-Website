import { dictionaries } from "@/data/dictionary";
import { profile } from "@/data/profile";
import { t } from "@/lib/i18n";
import type { Locale } from "@/types";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="shell pb-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule-strong pt-4 md:mx-6">
        <p className="label">
          © {new Date().getFullYear()} {t(profile.name, locale)} · {profile.title}
        </p>
        <a href="#top" className="label link">
          {dictionaries[locale].backToTop} ↑
        </a>
      </div>
    </footer>
  );
}
