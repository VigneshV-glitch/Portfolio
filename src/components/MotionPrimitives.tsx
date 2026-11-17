import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

// Refined editorial deceleration curve (ease-out expo/quint hybrid)
export const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export const EDITORIAL_VIEWPORT = {
  once: true,
  amount: 0.15,
} as const;

interface EditorialRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
  immediate?: boolean;
}

/**
 * Subtle editorial reveal for section headings, subcopy, and standalone blocks.
 */
export const EditorialReveal: React.FC<EditorialRevealProps> = ({
  children,
  delay = 0,
  yOffset = 18,
  duration = 0.6,
  immediate = false,
  className = '',
  ...props
}) => {
  if (immediate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration,
          delay,
          ease: EDITORIAL_EASE,
        }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={EDITORIAL_VIEWPORT}
      transition={{
        duration,
        delay,
        ease: EDITORIAL_EASE,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface EditorialStaggerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
}

/**
 * Coordinates subtle staggered reveals across card grids and feature lists.
 */
export const EditorialStaggerGroup: React.FC<EditorialStaggerProps> = ({
  children,
  staggerDelay = 0.08,
  delayChildren = 0.05,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={EDITORIAL_VIEWPORT}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface EditorialStaggerItemProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  yOffset?: number;
}

export const EditorialStaggerItem: React.FC<EditorialStaggerItemProps> = ({
  children,
  yOffset = 20,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: EDITORIAL_EASE,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
