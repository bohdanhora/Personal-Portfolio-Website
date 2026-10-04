"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Phrase = [string, string];

const TYPE_MS = 85;
const ERASE_MS = 40;
const HOLD_MS = 2600;
const GAP_MS = 350;

export function TypedHeadline({ phrases, className }: { phrases: Phrase[]; className?: string }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(() => (phrases[0] ?? ["", ""]).join("").length);
  const [erasing, setErasing] = useState(false);

  const [top = "", bottom = ""] = phrases[index] ?? [];
  const total = top.length + bottom.length;

  useEffect(() => {
    if (reduced || phrases.length < 2) return;

    let delay: number;
    let step: () => void;

    if (!erasing && count < total) {
      delay = TYPE_MS;
      step = () => setCount(count + 1);
    } else if (!erasing) {
      delay = HOLD_MS;
      step = () => setErasing(true);
    } else if (count > 0) {
      delay = ERASE_MS;
      step = () => setCount(count - 1);
    } else {
      delay = GAP_MS;
      step = () => {
        setErasing(false);
        setIndex((index + 1) % phrases.length);
      };
    }

    const timer = window.setTimeout(step, delay);
    return () => window.clearTimeout(timer);
  }, [count, erasing, index, total, reduced, phrases.length]);

  const shownTop = top.slice(0, Math.min(count, top.length));
  const shownBottom = bottom.slice(0, Math.max(0, count - top.length));
  const cursorOnTop = count <= top.length && top.length > 0 && count < total;
  const idle = !erasing && count === total;

  const cursor = <span className={cn("caret", idle && "caret-blink")} />;

  return (
    <span aria-hidden className={className}>
      <span className="block whitespace-nowrap">
        {shownTop}
        {"​"}
        {cursorOnTop ? cursor : null}
      </span>
      <span className="block whitespace-nowrap">
        {shownBottom}
        {"​"}
        {cursorOnTop ? null : cursor}
      </span>
    </span>
  );
}
