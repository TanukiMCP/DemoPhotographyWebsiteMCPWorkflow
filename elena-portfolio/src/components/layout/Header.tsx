'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-warm-white/95 backdrop-blur-md shadow-soft'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo/Brand */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="text-left">
                <h1 className="font-heading text-xl lg:text-2xl font-semibold text-charcoal-800 group-hover:text-terracotta-600 transition-colors duration-200">
                  ELENA VASQUEZ
                </h1>
                <p className="text-xs lg:text-sm text-charcoal-600 font-body tracking-wide">
                  Travel & Cultural Photography
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'relative font-body text-base font-medium transition-colors duration-200',
                      isActive
                        ? 'text-terracotta-600'
                        : 'text-charcoal-700 hover:text-terracotta-600'
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-terracotta-600"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-6 h-6 flex flex-col justify-center items-center group"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span
                className={cn(
                  'block w-6 h-0.5 bg-charcoal-800 transition-all duration-300 group-hover:bg-terracotta-600',
                  isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                )}
              />
              <span
                className={cn(
                  'block w-6 h-0.5 bg-charcoal-800 transition-all duration-300 group-hover:bg-terracotta-600',
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                )}
              />
              <span
                className={cn(
                  'block w-6 h-0.5 bg-charcoal-800 transition-all duration-300 group-hover:bg-terracotta-600',
                  isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                )}
              />
            </button>
          </div>
        </div>
      </motion.header>      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-charcoal-900/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-warm-white shadow-strong z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-cream-400">
                  <div>
                    <h2 className="font-heading text-lg font-semibold text-charcoal-800">
                      ELENA VASQUEZ
                    </h2>
                    <p className="text-sm text-charcoal-600 font-body">
                      Travel & Cultural Photography
                    </p>
                  </div>
                  <button
                    onClick={toggleMenu}
                    className="w-8 h-8 flex items-center justify-center text-charcoal-600 hover:text-terracotta-600 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>                {/* Mobile Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <ul className="space-y-6">
                    {navigation.map((item, index) => {
                      const isActive = pathname === item.href;
                      return (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          <Link
                            href={item.href}
                            className={cn(
                              'block font-body text-lg font-medium transition-colors duration-200',
                              isActive
                                ? 'text-terracotta-600'
                                : 'text-charcoal-700 hover:text-terracotta-600'
                            )}
                          >
                            {item.name}
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-cream-400">
                  <p className="text-sm text-charcoal-600 font-body text-center">
                    "Capturing the soul of places through<br />
                    the people who call them home"
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;