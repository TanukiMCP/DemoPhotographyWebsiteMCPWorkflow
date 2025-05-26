import React from 'react';
import { cn } from '@/lib/utils';

export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'lead' | 'small' | 'caption';
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ 
  variant = 'body', 
  as, 
  className, 
  children,
  ...props 
}) => {
  const variants = {
    h1: {
      element: 'h1',
      className: 'font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-charcoal-800 leading-tight tracking-tight',
    },
    h2: {
      element: 'h2', 
      className: 'font-heading text-4xl md:text-5xl lg:text-6xl font-medium text-charcoal-800 leading-tight tracking-tight',
    },
    h3: {
      element: 'h3',
      className: 'font-heading text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-800 leading-snug',
    },
    h4: {
      element: 'h4',
      className: 'font-heading text-2xl md:text-3xl lg:text-4xl font-medium text-charcoal-800 leading-snug',
    },
    h5: {
      element: 'h5',
      className: 'font-heading text-xl md:text-2xl lg:text-3xl font-medium text-charcoal-800 leading-snug',
    },
    h6: {
      element: 'h6',
      className: 'font-heading text-lg md:text-xl lg:text-2xl font-medium text-charcoal-800 leading-normal',
    },
    body: {
      element: 'p',
      className: 'font-body text-base text-charcoal-700 leading-relaxed',
    },
    lead: {
      element: 'p',
      className: 'font-body text-lg md:text-xl text-charcoal-700 leading-relaxed font-light',
    },
    small: {
      element: 'span',
      className: 'font-body text-sm text-charcoal-600 leading-normal',
    },
    caption: {
      element: 'span',
      className: 'font-body text-xs text-charcoal-500 leading-normal uppercase tracking-wide',
    },
  };

  const Component = as || variants[variant].element;

  return (
    <Component
      className={cn(variants[variant].className, className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;