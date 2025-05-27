'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button, Typography, Container } from '@/components/ui';
import { ScrollTrigger } from '@/components/animations';
import { staggerContainer, staggerItem } from '@/lib/animations';

const featuredProjects = [
  {
    id: 'morocco',
    title: 'Morocco',
    subtitle: 'Markets',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    description: 'Vibrant souks and ancient traditions'
  },
  {
    id: 'peru',
    title: 'Peru',
    subtitle: 'Festivals',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop',
    description: 'Colorful celebrations in the Andes'
  },
  {
    id: 'japan',
    title: 'Japan',
    subtitle: 'Temples',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800&auto=format&fit=crop',
    description: 'Sacred spaces and quiet contemplation'
  },
  {
    id: 'india',
    title: 'India',
    subtitle: 'Villages',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    description: 'Rural life and timeless customs'
  }
];

export default function FeaturedWork() {
  return (
    <section className="section-padding bg-warm-white">
      <Container size="lg" padding="lg">        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="h2" className="mb-4">
            FEATURED WORK
          </Typography>
          <div className="w-24 h-1 bg-terracotta-600 mx-auto mb-6" />
          <Typography variant="lead" className="text-charcoal-600 max-w-2xl mx-auto">
            Discover stories from around the world through authentic cultural moments
          </Typography>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="group cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-soft aspect-[4/5] mb-4">
                <Image
                  src={project.image}
                  alt={`${project.title} ${project.subtitle} - Elena Vasquez Photography`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Typography variant="h5" className="text-white mb-1">
                      {project.title}
                    </Typography>
                    <Typography variant="small" className="text-cream-200 uppercase tracking-wider">
                      {project.subtitle}
                    </Typography>
                  </div>
                </div>
              </div>
              <Typography variant="body" className="text-charcoal-600 text-center">
                {project.description}
              </Typography>
            </motion.div>
          ))}
        </motion.div>        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-terracotta-600 text-terracotta-600 hover:bg-terracotta-600 hover:text-white px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300"
          >
            EXPLORE ALL GALLERIES
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}