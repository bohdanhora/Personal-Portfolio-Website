"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolledPast } from "@/hooks/useScrolledPast";
import { softEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const observed = useActiveSection(ids);
  const scrolled = useScrolledPast(24);
  const pastHero = useScrolledPast(320);
  const reduced = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);

  // Nothing is highlighted while the hero still fills the screen.
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
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled
            ? "border-b border-rule bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <div className="shell flex h-16 items-center justify-between md:h-20">
          <a
            href="#top"
            className={cn(
              "font-serif text-lg tracking-tight transition-opacity duration-500",
              pastHero ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            aria-label={`${profile.name}, back to top`}
          >
            {profile.name}
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative block px-3 py-2 text-sm transition-colors duration-300",
                        isActive ? "text-ink" : "text-ink-faint hover:text-ink-muted",
                      )}
                    >
                      {item.label}
                      {isActive ? (
                        <motion.span
                          layoutId={reduced ? undefined : "nav-active"}
                          className="absolute inset-x-3 -bottom-px h-px bg-accent"
                          transition={{ duration: 0.4, ease: softEase }}
                        />
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="-mr-2 flex items-center gap-2 p-2 text-sm text-ink-muted md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
            <span aria-hidden className="flex h-3 w-4 flex-col justify-between">
              <span
                className={cn(
                  "h-px w-full origin-center bg-current transition-transform duration-300",
                  menuOpen && "translate-y-[5.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-current transition-opacity duration-200",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-px w-full origin-center bg-current transition-transform duration-300",
                  menuOpen && "-translate-y-[5.5px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {/*
        The panel lives outside the header on purpose: the header uses a
        backdrop filter when scrolled, and that turns it into the containing
        block for fixed children, which would collapse this to a hairline.
      */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.25, ease: softEase }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 border-t border-rule bg-paper md:hidden"
          >
            <nav aria-label="Primary mobile" className="shell py-8">
              <ul className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={reduced ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: softEase, delay: 0.04 * index }}
                    className="border-b border-rule last:border-b-0"
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={close}
                      className="flex items-baseline gap-4 py-4 font-serif text-2xl"
                    >
                      <span className="label">{String(index + 1).padStart(2, "0")}</span>
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
