/** Shared motion tokens — ui-ux-pro-max tier 8 + anti-slop (transform/opacity only). */

export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeIn = [0.4, 0, 1, 1] as const;
export const spring = { type: "spring" as const, stiffness: 280, damping: 28 };

export const duration = {
  fast: 0.2,
  hover: 0.28,
  reveal: 0.5,
  complex: 0.4,
} as const;

export const stagger = 0.04;

export const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const clipUp = {
  initial: { opacity: 0, clipPath: "inset(12% 0 0 0)" },
  animate: { opacity: 1, clipPath: "inset(0% 0 0 0)" },
};

export type RevealVariant = "fadeUp" | "fadeIn" | "clipUp";

export const revealVariants = {
  fadeUp,
  fadeIn,
  clipUp,
} as const;
