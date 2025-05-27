'use client';

import { motion } from 'framer-motion';
import { Typography, Container, Button } from '@/components/ui';

const packages = [
  {
    id: 'travel',
    name: 'Travel Photography',
    description: 'Comprehensive travel documentation for magazines, tourism boards, and travel brands.',
    features: [
      'Destination photography and storytelling',
      'Cultural immersion and local connections',
      'High-resolution images for print and digital',
      'Usage rights for marketing materials',
      'Post-production and color grading',
      'Detailed location and cultural context'
    ],
    pricing: 'From $2,500/day',
    duration: '3-14 days',
    deliverables: '50-200 edited images',
    ideal: 'Tourism boards, travel magazines, hospitality brands'
  },
  {
    id: 'cultural',
    name: 'Cultural Documentation',
    description: 'In-depth cultural projects for organizations, museums, and academic institutions.',
    features: [
      'Ethnographic photography approach',
      'Community engagement and consent',
      'Historical and cultural research',
      'Educational licensing options',
      'Exhibition-quality prints available',
      'Detailed cultural documentation'
    ],
    pricing: 'From $3,500/project',
    duration: '1-4 weeks',
    deliverables: '100-500 edited images',
    ideal: 'Museums, cultural centers, NGOs, academic institutions'
  },  {
    id: 'editorial',
    name: 'Editorial & Commercial',
    description: 'Professional editorial work for publications, brands, and commercial clients.',
    features: [
      'Magazine-quality photography',
      'Brand storytelling and lifestyle',
      'Commercial usage rights',
      'Fast turnaround available',
      'Art direction collaboration',
      'Multiple format deliverables'
    ],
    pricing: 'From $1,800/day',
    duration: '1-7 days',
    deliverables: '25-100 edited images',
    ideal: 'Magazines, brands, commercial clients, agencies'
  }
];

export default function ServicePackages() {
  return (
    <section className="py-20 bg-warm-white">
      <Container size="lg" padding="lg">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-6">
            Service Packages
          </Typography>
          <Typography variant="lead" className="text-charcoal-600 max-w-3xl mx-auto">
            Choose the package that best fits your project needs. All services include 
            professional consultation, cultural research, and post-production.
          </Typography>
        </div>        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream-100 rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <div className="mb-6">
                <Typography variant="h3" className="mb-3 text-forest-green-800">
                  {pkg.name}
                </Typography>
                <Typography variant="body" className="text-charcoal-600 mb-4">
                  {pkg.description}
                </Typography>
              </div>

              <div className="mb-6">
                <Typography variant="h4" className="mb-3 text-terracotta-600">
                  What's Included
                </Typography>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-terracotta-600 mr-2">•</span>
                      <Typography variant="small" className="text-charcoal-700">
                        {feature}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <Typography variant="small" className="font-semibold text-charcoal-800">
                    Investment:
                  </Typography>
                  <Typography variant="small" className="text-terracotta-600 font-semibold">
                    {pkg.pricing}
                  </Typography>
                </div>
                <div className="flex justify-between">
                  <Typography variant="small" className="font-semibold text-charcoal-800">
                    Duration:
                  </Typography>
                  <Typography variant="small" className="text-charcoal-600">
                    {pkg.duration}
                  </Typography>
                </div>
                <div className="flex justify-between">
                  <Typography variant="small" className="font-semibold text-charcoal-800">
                    Deliverables:
                  </Typography>
                  <Typography variant="small" className="text-charcoal-600">
                    {pkg.deliverables}
                  </Typography>
                </div>
              </div>

              <div className="mb-6">
                <Typography variant="small" className="font-semibold text-charcoal-800 mb-2">
                  Ideal for:
                </Typography>
                <Typography variant="small" className="text-charcoal-600">
                  {pkg.ideal}
                </Typography>
              </div>

              <Button variant="outline" className="w-full">
                Get Quote
              </Button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}