import { Variants } from "framer-motion";

// Modern swift cubic bezier curve for high-end digital editorial feel
export const creativeEasing = [0.22, 1, 0.36, 1] as const;

// Quick, tactile spring for buttons and small interactive items
export const tactileSpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

// Subtle fade-in from bottom (restrained 18px offset to avoid layout jitter)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: creativeEasing },
  },
};

// Pure opacity fade-in
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: creativeEasing },
  },
};

// Subtle scale & fade for media / portraits
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: creativeEasing },
  },
};

// Parent container for staggered children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Quick stagger for navigation or small lists
export const quickStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

// Individual child item for stagger containers
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: creativeEasing },
  },
};
