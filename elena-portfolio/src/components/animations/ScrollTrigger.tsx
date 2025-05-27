'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface ScrollTriggerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  threshold?: number;
  once?: boolean;
}

export function ScrollTrigger({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  threshold = 0.1,
  once = true,
}: ScrollTriggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once });
  const controls = useAnimation();

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
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
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}