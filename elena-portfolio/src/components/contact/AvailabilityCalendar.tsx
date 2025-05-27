import React from 'react';
import { Typography } from '@/components/ui';

const upcomingAvailability = [
  {
    month: 'January 2024',
    status: 'limited',
    description: 'Limited availability - 2 slots remaining',
  },
  {
    month: 'February 2024',
    status: 'available',
    description: 'Good availability for new projects',
  },
  {
    month: 'March 2024',
    status: 'booked',
    description: 'Fully booked - Cultural festival in Peru',
  },
  {
    month: 'April 2024',
    status: 'available',
    description: 'Excellent availability',
  },
];

const statusColors = {
  available: 'bg-green-100 text-green-800 border-green-200',
  limited: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  booked: 'bg-red-100 text-red-800 border-red-200',
};

const statusIcons = {
  available: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  ),
  limited: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  ),
  booked: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  ),
};

export default function AvailabilityCalendar() {
  return (
    <div className="space-y-6">
      <div>
        <Typography variant="h3" className="mb-2">
          Availability
        </Typography>
        <Typography variant="body" className="text-charcoal-600">
          Current booking status for upcoming months
        </Typography>
      </div>

      <div className="space-y-4">
        {upcomingAvailability.map((period) => (
          <div
            key={period.month}
            className="flex items-center justify-between p-4 bg-warm-white border border-charcoal-200 rounded-lg"
          >
            <div className="flex-1">
              <Typography variant="body" className="font-medium text-charcoal-800">
                {period.month}
              </Typography>
              <Typography variant="small" className="text-charcoal-600 mt-1">
                {period.description}
              </Typography>
            </div>
            <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border text-sm font-medium ${statusColors[period.status as keyof typeof statusColors]}`}>
              {statusIcons[period.status as keyof typeof statusIcons]}
              <span className="capitalize">{period.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-cream-100 border border-cream-300 rounded-lg">
        <Typography variant="small" className="text-charcoal-700">
          <strong>Planning ahead?</strong> I typically book 2-3 months in advance for travel projects. 
          For urgent assignments or last-minute opportunities, please reach out directly.
        </Typography>
      </div>
    </div>
  );
}