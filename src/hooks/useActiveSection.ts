"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the reading area of the viewport.
 * Uses a band across the upper middle of the screen so the highlight changes
 * when a section actually becomes the thing you are reading.
 */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let next: string | null = null;
        let best = 0;

        for (const element of elements) {
          const ratio = visible.get(element.id) ?? 0;
          if (ratio > best) {
            best = ratio;
            next = element.id;
          }
        }

        if (next) setActive(next);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    for (const element of elements) observer.observe(element);
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
