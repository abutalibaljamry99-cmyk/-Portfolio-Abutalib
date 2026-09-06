import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion variants
 * ──────────────────────────────
 * Central registry for all animation presets used across the portfolio.
 * Import these wherever you need consistent motion behaviour.
 */

// ── Page-level transition ────────────────────────────────────────────────────
export const pageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // ease-arch
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

// ── Section scroll-trigger fade in ───────────────────────────────────────────
export const sectionVariants = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay,
      staggerChildren: 0.08,
    },
  },
});

// ── Child item stagger (use inside a parent with staggerChildren) ─────────────
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Fade only ─────────────────────────────────────────────────────────────────
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ── Slide in from left ────────────────────────────────────────────────────────
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Slide in from right ───────────────────────────────────────────────────────
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Scale up (for images / cards) ────────────────────────────────────────────
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Hover state helpers (use with whileHover) ─────────────────────────────────
export const hoverLift = {
  y: -4,
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
};

export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
};