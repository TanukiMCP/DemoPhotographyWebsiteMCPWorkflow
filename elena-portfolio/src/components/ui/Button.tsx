'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    children, 
    loading = false,
    disabled,
    ...props 
  }, ref) => {
    const baseStyles = [
      'inline-flex items-center justify-center',
      'font-medium transition-all duration-200',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'relative overflow-hidden',
    ].join(' ');

    const variants = {
      primary: [
        'bg-terracotta-600 text-warm-white',
        'hover:bg-terracotta-700 active:bg-terracotta-800',
        'focus:ring-terracotta-500',
        'shadow-soft hover:shadow-medium',
      ].join(' '),
      secondary: [
        'bg-forest-green-800 text-warm-white',
        'hover:bg-forest-green-900 active:bg-forest-green-700',
        'focus:ring-forest-green-600',
        'shadow-soft hover:shadow-medium',
      ].join(' '),
      outline: [
        'border-2 border-terracotta-600 text-terracotta-600',
        'hover:bg-terracotta-600 hover:text-warm-white',
        'active:bg-terracotta-700',
        'focus:ring-terracotta-500',
      ].join(' '),
      ghost: [
        'text-charcoal-800 hover:bg-cream-400',
        'active:bg-cream-500',
        'focus:ring-charcoal-400',
      ].join(' '),
      link: [
        'text-terracotta-600 underline-offset-4',
        'hover:underline hover:text-terracotta-700',
        'focus:ring-terracotta-500',
        'p-0 h-auto',
      ].join(' '),
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm rounded-md',
      md: 'px-4 py-2 text-base rounded-lg',
      lg: 'px-6 py-3 text-lg rounded-lg',
      xl: 'px-8 py-4 text-xl rounded-xl',
    };

    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="inline-block"
      >
        <button
          className={cn(
            baseStyles,
            variants[variant],
            variant !== 'link' && sizes[size],
            className
          )}
          ref={ref}
          disabled={disabled || loading}
          {...props}
        >
        {loading && (
          <motion.svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </motion.svg>
        )}
        {children}
        </button>
      </motion.div>
    );
  }
);

Button.displayName = 'Button';

export default Button;