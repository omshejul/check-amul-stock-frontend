import type { Variants } from "framer-motion";

export const blurFadeIn: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 6,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
};

export const blurFadeInUp: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
};

export const blurFadeInDown: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: -20,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
};

export const blurScale: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
  },
};

export const blurScaleCenter: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    scale: 0.9,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const navItemVariant: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
    y: -8,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
  },
};

export const cardVariant: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
  },
};

export const listItemVariant: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
    x: -10,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
  },
  exit: {
    opacity: 0,
    filter: "blur(8px)",
    x: 10,
    transition: {
      duration: 0.2,
    },
  },
};

export const backdropVariant: Variants = {
  hidden: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    backdropFilter: "blur(8px)",
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
};
