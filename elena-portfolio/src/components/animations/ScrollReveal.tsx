'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Variants } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  variants,
  delay = 0,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.3 });
  const controls = useAnimation();

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: 'easeOut',
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants || defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}