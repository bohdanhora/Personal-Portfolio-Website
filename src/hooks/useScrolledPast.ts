"use client";

import { useEffect, useState } from "react";

export function useScrolledPast(offset = 24): boolean {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const update = () => setPassed(window.scrollY > offset);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [offset]);

  return passed;
}
