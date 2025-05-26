/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Elena's Brand Colors
        terracotta: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9c1',
          300: '#f6be97',
          400: '#f19a6b',
          500: '#ed7a4a',
          600: '#d2691e', // Primary brand color
          700: '#b85a1a',
          800: '#944a1a',
          900: '#783e19',
        },
        'forest-green': {
          50: '#f4f6f2',
          100: '#e6ebe1',
          200: '#cdd7c4',
          300: '#aabf9d',
          400: '#82a172',
          500: '#638551',
          600: '#4d6a3e',
          700: '#3e5532',
          800: '#2d5016', // Primary brand color
          900: '#253f14',
        },
        cream: {
          50: '#fefefe',
          100: '#fdfdfc',
          200: '#faf9f6',
          300: '#f7f6f1',
          400: '#f5f5dc', // Primary brand color
          500: '#f0f0c7',
          600: '#e8e8b2',
          700: '#dada8f',
          800: '#c7c76b',
          900: '#a8a855',
        },
        charcoal: {
          50: '#f6f7f8',
          100: '#eaecef',
          200: '#d1d6dc',
          300: '#adb6c1',
          400: '#8390a0',
          500: '#647284',
          600: '#4f5b6b',
          700: '#424c58',
          800: '#36454f', // Primary brand color
          900: '#2f3a42',
        },
        'warm-white': '#fefefe',
      },
      fontFamily: {
        // Elena's Typography
        heading: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
      },
      fontSize: {
        // Typography Scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        // Custom spacing scale
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      screens: {
        // Elena's responsive breakpoints
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      animation: {
        // Custom animations for photography portfolio
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(210, 105, 30, 0.8) 0%, rgba(45, 80, 22, 0.8) 100%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}