'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typography, Container } from '@/components/ui';

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-cream-50 to-warm-white py-20 lg:py-32">
      <Container size="lg" padding="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-strong">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Elena Vasquez - Travel & Cultural Photographer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-terracotta-500 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-forest-green-500 rounded-full opacity-20 -z-10"></div>
            </div>
          </motion.div>          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <Typography variant="h1" className="mb-6">
              Meet Elena Vasquez
            </Typography>
            <Typography variant="lead" className="text-terracotta-600 mb-6">
              Travel & Cultural Photographer
            </Typography>
            <div className="w-16 h-1 bg-terracotta-500 mb-8"></div>
            
            <Typography variant="body" className="text-charcoal-600 mb-6 text-lg leading-relaxed">
              "I believe that every culture has a story worth telling, and every person 
              has a moment worth capturing. My camera is simply the bridge between 
              their world and yours."
            </Typography>            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-soft">
                <Typography variant="h3" className="text-terracotta-600 mb-1">8+</Typography>
                <Typography variant="small" className="text-charcoal-500">Years Experience</Typography>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-soft">
                <Typography variant="h3" className="text-terracotta-600 mb-1">40+</Typography>
                <Typography variant="small" className="text-charcoal-500">Countries Documented</Typography>
              </div>
            </div>
            
            <Typography variant="body" className="text-charcoal-600 leading-relaxed">
              With over eight years of experience documenting cultures across more than 
              40 countries, I specialize in authentic storytelling through imagery that 
              reveals the heart of communities and the soul of places.
            </Typography>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}