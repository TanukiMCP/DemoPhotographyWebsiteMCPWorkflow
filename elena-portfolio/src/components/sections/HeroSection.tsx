'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button, Typography } from '@/components/ui';
import { ScrollTrigger } from '@/components/animations/ScrollTrigger';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop"
          alt="Moroccan Market Scene - Elena Vasquez Photography"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <Typography 
              variant="h1" 
              className="text-white mb-6 text-4xl md:text-6xl lg:text-7xl font-light tracking-wide drop-shadow-lg"
            >
              ELENA VASQUEZ
            </Typography>
          </motion.div>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            <Typography 
              variant="lead" 
              className="text-cream-100 mb-8 text-lg md:text-xl tracking-wider uppercase drop-shadow-md"
            >
              Travel & Cultural Photography
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-24 h-1 bg-terracotta-500 mx-auto mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Typography 
              variant="body" 
              className="text-white mb-12 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto"
            >
              "Capturing the soul of places through the people who call them home"
            </Typography>
          </motion.div>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              variant="primary" 
              size="lg"
              className="bg-terracotta-600 hover:bg-terracotta-700 text-white px-8 py-4 text-lg font-medium tracking-wide"
            >
              VIEW MY WORK
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal-800 px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300"
            >
              CONTACT ME
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}