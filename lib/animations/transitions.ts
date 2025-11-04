import type { Transition } from "framer-motion";

export const smoothSpring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 24,
  mass: 0.8,
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 26,
  mass: 1,
};

export const iosSmooth: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

export const iosSmoothTween: Transition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1],
};

export const subtleBlur: Transition = {
  duration: 0.35,
  ease: [0.32, 0.72, 0, 1],
};

export const quickBlur: Transition = {
  duration: 0.25,
  ease: [0.4, 0, 0.2, 1],
};

export const slowBlur: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
};

export const bounceIn: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 22,
  mass: 0.7,
};
