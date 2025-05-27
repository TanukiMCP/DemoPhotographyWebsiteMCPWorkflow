import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/elenavasquezphoto',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.438-.928-.928s.438-.928.928-.928.928.438.928.928-.438.928-.928.928zm-3.323 1.418c-1.297 0-2.448.49-3.323 1.297-.928.875-1.418 2.026-1.418 3.323s.49 2.448 1.418 3.244c.875.807 2.026 1.297 3.323 1.297s2.448-.49 3.323-1.297c.928-.796 1.418-1.947 1.418-3.244s-.49-2.448-1.418-3.323c-.875-.807-2.026-1.297-3.323-1.297z"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/elenavasquezphoto',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/elenavasquezphoto',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];  return (
    <footer className="bg-charcoal-800 text-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-semibold text-warm-white mb-2">
                  ELENA VASQUEZ
                </h3>
                <p className="text-cream-400 font-body text-sm tracking-wide mb-4">
                  Travel & Cultural Photography
                </p>
                <p className="text-cream-300 font-body text-base leading-relaxed max-w-md">
                  "Capturing the soul of places through the people who call them home. 
                  Documenting authentic cultural moments across 40+ countries with 8+ years of experience."
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-cream-300 font-body text-sm">
                <p>📧 hello@elenavasquez.com</p>
                <p>📱 +1 (555) 123-4567</p>
                <p>📍 Based in Barcelona, Spain</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-warm-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-cream-300 hover:text-terracotta-400 transition-colors duration-200 font-body text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-warm-white mb-4">
                Connect
              </h4>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream-300 hover:text-terracotta-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>              {/* Newsletter Signup */}
              <div>
                <p className="text-cream-300 font-body text-sm mb-3">
                  Get updates on new galleries and travel stories
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-charcoal-700 text-warm-white placeholder-cream-400 border border-charcoal-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent text-sm"
                  />
                  <button className="px-4 py-2 bg-terracotta-600 text-warm-white rounded-r-md hover:bg-terracotta-700 transition-colors duration-200 text-sm font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-charcoal-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream-400 font-body text-sm">
              © {currentYear} Elena Vasquez Photography. All rights reserved.
            </p>
            <div className="flex space-x-6 text-cream-400 font-body text-sm">
              <Link href="/privacy" className="hover:text-terracotta-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-terracotta-400 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;