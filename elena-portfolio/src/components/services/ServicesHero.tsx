'use client';

import { motion } from 'framer-motion';
import { Typography, Container, Button } from '@/components/ui';

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-cream-200 to-warm-white py-20 lg:py-32">
      <Container size="lg" padding="lg">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" className="mb-6">
              Photography Services
            </Typography>
            <Typography variant="lead" className="text-charcoal-600 mb-8 max-w-3xl mx-auto">
              Professional travel and cultural photography services for magazines, 
              organizations, and brands seeking authentic storytelling through imagery.
            </Typography>
            <div className="w-24 h-1 bg-terracotta-600 mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Typography variant="body" className="text-lg leading-relaxed mb-8">
              With over 8 years of experience documenting cultures across 40+ countries, 
              I specialize in creating compelling visual narratives that capture the essence 
              of places through the people who call them home.
            </Typography>            
            <Typography variant="body" className="text-lg leading-relaxed mb-8">
              Each project is approached with cultural sensitivity, professional excellence, 
              and a deep commitment to authentic storytelling.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                View Packages
              </Button>
              <Button size="lg" variant="outline">
                Start a Project
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}