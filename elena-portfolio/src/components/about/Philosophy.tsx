'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typography, Container } from '@/components/ui';

const philosophyPoints = [
  {
    title: 'Cultural Sensitivity',
    description: 'Every photograph begins with respect. I spend time understanding local customs and building genuine connections before capturing any moment.',
    icon: '🤝'
  },
  {
    title: 'Authentic Storytelling',
    description: 'I believe in documenting real moments, not staged scenes. The most powerful images emerge from patience and genuine human connection.',
    icon: '📖'
  },
  {
    title: 'Community First',
    description: 'My work aims to benefit the communities I photograph. I share stories that honor their dignity and contribute to cultural understanding.',
    icon: '🌍'
  }
];

export default function Philosophy() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 to-warm-white">
      <Container size="lg" padding="lg">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" className="mb-6">
              My Philosophy
            </Typography>
            <Typography variant="lead" className="text-charcoal-600 mb-8">
              Photography is more than capturing light—it's about capturing souls, 
              stories, and the invisible threads that connect us all.
            </Typography>            <div className="space-y-6">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-2xl">{point.icon}</div>
                  <div>
                    <Typography variant="h5" className="mb-2">
                      {point.title}
                    </Typography>
                    <Typography variant="body" className="text-charcoal-600">
                      {point.description}
                    </Typography>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-strong">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cultural photography in action"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-forest-green-500 rounded-full opacity-20"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-terracotta-500 rounded-full opacity-20"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}