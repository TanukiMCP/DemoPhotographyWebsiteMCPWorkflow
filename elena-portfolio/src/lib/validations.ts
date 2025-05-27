import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

// Project inquiry form validation schema
export const projectInquirySchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  organization: z.string()
    .min(2, 'Organization must be at least 2 characters')
    .max(100, 'Organization must be less than 100 characters')
    .optional(),
  projectType: z.enum([
    'travel-photography',
    'cultural-documentation',
    'editorial-commercial',
    'licensing',
    'other'
  ], {
    required_error: 'Please select a project type',
  }),
  budget: z.enum([
    'under-5k',
    '5k-15k',
    '15k-30k',
    '30k-plus',
    'discuss'
  ], {
    required_error: 'Please select a budget range',
  }),
  timeline: z.string()
    .min(5, 'Timeline must be at least 5 characters')
    .max(200, 'Timeline must be less than 200 characters'),
  location: z.string()
    .min(2, 'Location must be at least 2 characters')
    .max(100, 'Location must be less than 100 characters'),
  description: z.string()
    .min(20, 'Project description must be at least 20 characters')
    .max(2000, 'Project description must be less than 2000 characters'),
  additionalInfo: z.string()
    .max(1000, 'Additional information must be less than 1000 characters')
    .optional(),
});

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ProjectInquiryData = z.infer<typeof projectInquirySchema>;