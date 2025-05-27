'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { Button } from '@/components/ui';
import Input from './Input';
import Textarea from './Textarea';

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        onSubmit(data);
      }
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          placeholder="Your full name"
          required
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          required
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <Input
        label="Subject"
        placeholder="What would you like to discuss?"
        required
        error={errors.subject?.message}
        {...register('subject')}
      />

      <Textarea
        label="Message"
        placeholder="Tell me about your project, ideas, or questions..."
        rows={6}
        required
        error={errors.message?.message}
        {...register('message')}
      />

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">Message sent successfully!</p>
          <p className="text-green-600 text-sm mt-1">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">Something went wrong</p>
          <p className="text-red-600 text-sm mt-1">
            Please try again or contact me directly at elena@example.com
          </p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        loading={isSubmitting}
        disabled={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? 'Sending Message...' : 'Send Message'}
      </Button>
    </form>
  );
}