import React from 'react';
import { Typography } from '@/components/ui';

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'elena@elenavasquez.com',
    href: 'mailto:elena@elenavasquez.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'San Francisco, CA',
    href: null,
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/elenavasquezphoto',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.875 2.026-1.297 3.323-1.297s2.448.422 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm0 0"/>
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

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <Typography variant="h3" className="mb-6">
          Get in Touch
        </Typography>
        <Typography variant="body" className="text-charcoal-600 mb-8">
          Ready to capture your story? I'd love to hear about your project and discuss how we can work together.
        </Typography>
      </div>

      <div className="space-y-6">
        {contactMethods.map((method) => (
          <div key={method.label} className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-terracotta-100 rounded-lg flex items-center justify-center text-terracotta-600">
              {method.icon}
            </div>
            <div>
              <Typography variant="small" className="text-charcoal-500 uppercase tracking-wide">
                {method.label}
              </Typography>
              {method.href ? (
                <a
                  href={method.href}
                  className="text-charcoal-800 hover:text-terracotta-600 transition-colors duration-200"
                >
                  <Typography variant="body" className="font-medium">
                    {method.value}
                  </Typography>
                </a>
              ) : (
                <Typography variant="body" className="font-medium text-charcoal-800">
                  {method.value}
                </Typography>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-charcoal-200">
        <Typography variant="h4" className="mb-4">
          Follow My Journey
        </Typography>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-charcoal-100 hover:bg-terracotta-600 text-charcoal-600 hover:text-warm-white rounded-lg flex items-center justify-center transition-all duration-200"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}