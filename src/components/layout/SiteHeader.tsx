"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { dictionaries } from "@/data/dictionary";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolledPast } from "@/hooks/useScrolledPast";
import { localeLabel, localePath, locales, t } from "@/lib/i18n";
import { softEase } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

function LanguageSwitch({ locale }: { locale: Locale }) {
  return (
    <ul
      aria-label={dictionaries[locale].language}
      className="flex border border-rule-strong font-mono text-2xs"
    >
      {locales.map((code) => (
        <li key={code} className="border-l border-rule-strong first:border-l-0">
          <a
            href={localePath[code]}
            hrefLang={code}
            lang={code}
            aria-current={code === locale ? "true" : undefined}
            className={cn(
              "block px-2 py-1 transition-colors",
              code === locale ? "bg-ink text-paper" : "hover:bg-accent hover:text-on-accent",
            )}
          >
            {localeLabel[code]}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const dict = dictionaries[locale];
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const observed = useActiveSection(ids);
  const scrolled = useScrolledPast(24);
  const pastHero = useScrolledPast(320);
  const reduced = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  const active = pastHero ? observed : null;

  const close = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen, close]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled || menuOpen ? "border-rule-strong bg-paper" : "border-transparent bg-paper/0",
        )}
      >
        <div className="shell flex h-14 items-center justify-between gap-6 md:h-16">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label={`${t(profile.name, locale)}, ${dict.backToTop}`}
          >
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center bg-ink font-display text-2xs font-semibold text-paper"
            >
              BH
            </span>
            <span
              className={cn(
                "hidden font-mono text-xs uppercase transition-opacity duration-300 sm:block",
                pastHero ? "opacity-100" : "opacity-0",
              )}
            >
              {t(profile.name, locale)}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center">
              {navItems.map((item, index) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative block px-3 py-2 font-mono text-2xs uppercase transition-colors",
                        isActive ? "text-ink" : "text-ink-faint hover:text-ink",
                      )}
                    >
                      <span className="text-ink-faint">{String(index + 1).padStart(2, "0")} </span>
                      {t(item.label, locale)}
                      {isActive ? (
                        <motion.span
                          layoutId={reduced ? undefined : "nav-active"}
                          className="absolute inset-x-3 -bottom-2.5 h-0.75 bg-accent md:-bottom-3.5"
                          transition={{ duration: 0.3, ease: softEase }}
                        />
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitch locale={locale} />

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="-mr-1 flex items-center gap-2 p-1 font-mono text-2xs uppercase lg:hidden"
            >
              {menuOpen ? dict.close : dict.menu}
              <span aria-hidden className="flex h-2.5 w-4 flex-col justify-between">
                <span
                  className={cn(
                    "h-0.5 w-full origin-center bg-current transition-transform duration-200",
                    menuOpen && "translate-y-1 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "h-0.5 w-full origin-center bg-current transition-transform duration-200",
                    menuOpen && "-translate-y-1 -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2, ease: softEase }}
            className="fixed inset-x-0 bottom-0 top-14 z-40 bg-paper md:top-16 lg:hidden"
          >
            <nav aria-label="Primary mobile" className="shell py-6">
              <ul className="border-t border-rule-strong">
                {navItems.map((item, index) => (
                  <li key={item.id} className="border-b border-rule">
                    <a
                      href={`#${item.id}`}
                      onClick={close}
                      className="flex items-baseline gap-4 py-4 font-display text-2xl font-medium uppercase"
                    >
                      <span className="font-mono text-xs text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {t(item.label, locale)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
