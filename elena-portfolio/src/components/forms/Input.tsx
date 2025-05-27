import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, required, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={inputId}
            className="block text-sm font-medium text-charcoal-800"
          >
            {label}
            {required && <span className="text-terracotta-600 ml-1">*</span>}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-lg border transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent',
            'placeholder:text-charcoal-400',
            error 
              ? 'border-red-300 bg-red-50 text-red-900 focus:ring-red-500' 
              : 'border-charcoal-200 bg-warm-white text-charcoal-800 hover:border-charcoal-300',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-charcoal-50',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-600 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-charcoal-600">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;