import React from 'react';
import { cn } from '@/lib/utils';

export interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

const Container: React.FC<ContainerProps> = ({ 
  size = 'lg',
  padding = 'md',
  className,
  children,
  as: Component = 'div',
  ...props
}) => {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl', 
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  const paddings = {
    none: '',
    sm: 'px-4',
    md: 'px-4 sm:px-6',
    lg: 'px-4 sm:px-6 lg:px-8',
    xl: 'px-4 sm:px-6 lg:px-8 xl:px-12',
  };

  return (
    <Component
      className={cn(
        'mx-auto w-full',
        sizes[size],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;