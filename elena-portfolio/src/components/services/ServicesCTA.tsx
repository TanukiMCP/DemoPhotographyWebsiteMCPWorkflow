'use client';

import { motion } from 'framer-motion';
import { Typography, Container, Button } from '@/components/ui';

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-forest-green-800 to-forest-green-900 text-warm-white">
      <Container size="lg" padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Typography variant="h2" className="mb-6 text-warm-white">
            Ready to Start Your Project?
          </Typography>
          <Typography variant="lead" className="mb-8 max-w-3xl mx-auto text-cream-200">
            Let's discuss how we can bring your vision to life through authentic, 
            culturally-sensitive photography that tells compelling stories.
          </Typography>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="primary">
              Start a Conversation
            </Button>
            <Button size="lg" variant="outline" className="border-cream-200 text-cream-200 hover:bg-cream-200 hover:text-forest-green-800">
              View Portfolio
            </Button>
          </div>          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Typography variant="h3" className="text-terracotta-400 mb-2">
                48h
              </Typography>
              <Typography variant="small" className="text-cream-200">
                Response time for project inquiries
              </Typography>
            </div>
            <div className="text-center">
              <Typography variant="h3" className="text-terracotta-400 mb-2">
                40+
              </Typography>
              <Typography variant="small" className="text-cream-200">
                Countries documented with cultural sensitivity
              </Typography>
            </div>
            <div className="text-center">
              <Typography variant="h3" className="text-terracotta-400 mb-2">
                8+
              </Typography>
              <Typography variant="small" className="text-cream-200">
                Years of professional travel photography
              </Typography>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}