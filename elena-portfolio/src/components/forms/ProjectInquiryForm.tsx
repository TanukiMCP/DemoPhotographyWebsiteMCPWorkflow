'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { projectInquirySchema, type ProjectInquiryData } from '@/lib/validations';
import { Button } from '@/components/ui';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';

const projectTypeOptions = [
  { value: 'travel-photography', label: 'Travel Photography' },
  { value: 'cultural-documentation', label: 'Cultural Documentation' },
  { value: 'editorial-commercial', label: 'Editorial & Commercial' },
  { value: 'licensing', label: 'Image Licensing' },
  { value: 'other', label: 'Other' },
];

const budgetOptions = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-15k', label: '$5,000 - $15,000' },
  { value: '15k-30k', label: '$15,000 - $30,000' },
  { value: '30k-plus', label: '$30,000+' },
  { value: 'discuss', label: 'Let\'s discuss' },
];

interface ProjectInquiryFormProps {
  onSubmit?: (data: ProjectInquiryData) => void;
}

export default function ProjectInquiryForm({ onSubmit }: ProjectInquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProjectInquiryData>({
    resolver: zodResolver(projectInquirySchema),
  });

  const handleFormSubmit = async (data: ProjectInquiryData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
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
        label="Organization"
        placeholder="Company, magazine, or organization (optional)"
        error={errors.organization?.message}
        {...register('organization')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Project Type"
          placeholder="Select project type"
          required
          options={projectTypeOptions}
          error={errors.projectType?.message}
          {...register('projectType')}
        />
        <Select
          label="Budget Range"
          placeholder="Select budget range"
          required
          options={budgetOptions}
          error={errors.budget?.message}
          {...register('budget')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Timeline"
          placeholder="When do you need this completed?"
          required
          error={errors.timeline?.message}
          {...register('timeline')}
        />
        <Input
          label="Location"
          placeholder="Where will the shoot take place?"
          required
          error={errors.location?.message}
          {...register('location')}
        />
      </div>

      <Textarea
        label="Project Description"
        placeholder="Tell me about your project, goals, and vision..."
        rows={6}
        required
        error={errors.description?.message}
        {...register('description')}
      />

      <Textarea
        label="Additional Information"
        placeholder="Any other details, special requirements, or questions?"
        rows={4}
        error={errors.additionalInfo?.message}
        {...register('additionalInfo')}
      />

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">Project inquiry sent successfully!</p>
          <p className="text-green-600 text-sm mt-1">
            Thank you for your detailed inquiry. I'll review your project and get back to you within 24 hours with next steps.
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
        {isSubmitting ? 'Sending Inquiry...' : 'Send Project Inquiry'}
      </Button>
    </form>
  );
}