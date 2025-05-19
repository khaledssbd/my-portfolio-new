import { Variants } from 'framer-motion';

// interface TextVariantProps {
//   delay: number;
// }

interface VariantState {
  y?: number | string;
  x?: number | string;
  opacity?: number;
  scale?: number;
  transition?: TransitionProps;
}

interface TransitionProps {
  type?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  staggerChildren?: number;
  delayChildren?: number;
}

interface MotionVariants {
  hidden: VariantState;
  show: VariantState;
}

export const textVariant = (delay: number): MotionVariants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

// interface FadeInDirection {
//   direction: "left" | "right" | "up" | "down";
// }

interface FadeInVariantState {
  x?: number;
  y?: number;
  opacity?: number;
  transition?: TransitionProps;
}

interface FadeInVariants {
  hidden: FadeInVariantState;
  show: FadeInVariantState;
}

export const fadeIn = (
  direction: 'left' | 'right' | 'up' | 'down',
  type: string,
  delay: number,
  duration: number
): FadeInVariants => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

interface ZoomInVariantState {
  scale?: number;
  opacity?: number;
  transition?: TransitionProps;
}

interface ZoomInVariants {
  hidden: ZoomInVariantState;
  show: ZoomInVariantState;
}

export const zoomIn = (delay: number, duration: number): ZoomInVariants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

// interface SlideInDirection {
//   direction: "left" | "right" | "up" | "down";
// }

// interface SlideInVariantState {
//   x?: number | string;
//   y?: number | string;
//   transition?: TransitionProps;
// }

// interface SlideInVariants {
//   hidden: SlideInVariantState;
//   show: SlideInVariantState;
// }

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };
};

interface StaggerContainerVariants {
  hidden: Record<string, never>;
  show: {
    transition: StaggerTransitionProps;
  };
}

interface StaggerTransitionProps {
  staggerChildren: number;
  delayChildren?: number;
}

export const staggerContainer = (
  staggerChildren: number,
  delayChildren?: number
): StaggerContainerVariants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
