import type { Transition, Variants } from "motion/react";

export const softEase = [0.22, 1, 0.36, 1] as const;

export const revealTransition: Transition = {
  duration: 0.7,
  ease: softEase,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/** Parent variant used to stagger a list of children that use `fadeUp`. */
export function stagger(amount = 0.07, delay = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: amount, delayChildren: delay },
    },
  };
}

/** Elements enter once, slightly before they reach the fold. */
export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;
