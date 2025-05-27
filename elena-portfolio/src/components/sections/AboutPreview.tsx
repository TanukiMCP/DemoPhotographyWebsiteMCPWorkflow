'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button, Typography, Container } from '@/components/ui';
import { fadeInLeft, fadeInRight } from '@/lib/animations';

export default function AboutPreview() {
  return (
    <section className="section-padding bg-cream-400/20">
      <Container size="lg" padding="lg">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Elena Vasquez - Travel & Cultural Photographer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-terracotta-600 rounded-full opacity-20 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Typography variant="h2" className="mb-6">
              ABOUT ELENA
            </Typography>
            <div className="w-24 h-1 bg-terracotta-600 mb-8" />
            
            <Typography variant="body" className="text-charcoal-700 mb-8 text-lg leading-relaxed">
              "With over 8 years documenting cultures across 40+ countries, I specialize in 
              authentic storytelling through imagery that reveals the heart of communities."
            </Typography>            <Typography variant="body" className="text-charcoal-600 mb-8 leading-relaxed">
              My work has been featured in National Geographic, Travel + Leisure, and Condé Nast Traveler. 
              I believe that the most powerful photographs emerge from genuine connections with the people 
              and places I encounter.
            </Typography>

            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-forest-green-800 text-forest-green-800 hover:bg-forest-green-800 hover:text-white px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300"
            >
              LEARN MORE
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}