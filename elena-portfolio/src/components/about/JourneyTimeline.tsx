'use client';

import { motion } from 'framer-motion';
import { Typography, Container } from '@/components/ui';

const timelineEvents = [
  {
    year: '2016',
    title: 'The Beginning',
    description: 'Started photography journey with a backpack and camera through Southeast Asia',
    location: 'Thailand, Vietnam, Cambodia'
  },
  {
    year: '2018',
    title: 'First Publication',
    description: 'Featured in National Geographic Traveler for "Faces of Morocco" series',
    location: 'Morocco, Atlas Mountains'
  },
  {
    year: '2020',
    title: 'Cultural Immersion',
    description: 'Spent 6 months living with indigenous communities in Peru',
    location: 'Peru, Sacred Valley'
  },
  {
    year: '2022',
    title: 'Award Recognition',
    description: 'Won International Travel Photography Award for "Souls of India" collection',
    location: 'India, Rajasthan'
  },
  {
    year: '2024',
    title: 'Present Day',
    description: 'Continuing to document authentic cultural stories across the globe',
    location: 'Worldwide'
  }
];export default function JourneyTimeline() {
  return (
    <section className="py-20 bg-white">
      <Container size="lg" padding="lg">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">
            My Photography Journey
          </Typography>
          <Typography variant="lead" className="text-charcoal-600 max-w-2xl mx-auto">
            From curious traveler to professional photographer - 
            the milestones that shaped my perspective
          </Typography>
          <div className="w-24 h-1 bg-terracotta-500 mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-cream-300"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-terracotta-500 rounded-full border-4 border-white shadow-medium z-10"></div>                {/* Content card */}
                <div className={`w-full max-w-md p-6 bg-white rounded-xl shadow-soft border border-cream-200 ${
                  index % 2 === 0 ? 'mr-auto lg:mr-8' : 'ml-auto lg:ml-8'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <Typography variant="h4" className="text-terracotta-600">
                      {event.year}
                    </Typography>
                    <Typography variant="small" className="text-charcoal-400">
                      {event.location}
                    </Typography>
                  </div>
                  <Typography variant="h5" className="mb-2">
                    {event.title}
                  </Typography>
                  <Typography variant="body" className="text-charcoal-600">
                    {event.description}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}