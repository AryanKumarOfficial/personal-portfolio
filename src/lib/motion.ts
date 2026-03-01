import { Transition } from "motion";

export const fadeUp = {
  initial: {
    opacity: 0,
    y: 24,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.94,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

export const defaultTransition: Transition = {
  duration: 0.45,
  ease: [0.21, 1.02, 0.73, 1],
};
