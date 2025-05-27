'use client';

import { motion } from 'framer-motion';
import { Typography, Container } from '@/components/ui';

const testimonials = [
  {
    quote: "Elena's work captures the essence of cultural authenticity in ways that few photographers can achieve. Her 'Faces of Morocco' series brought our readers into the heart of the Atlas Mountains.",
    author: "Sarah Chen",
    title: "Senior Editor",
    publication: "National Geographic Traveler"
  },
  {
    quote: "Working with Elena was transformative. She doesn't just photograph our community—she becomes part of it. Her respect for our traditions shines through every image.",
    author: "Carlos Mendoza",
    title: "Cultural Director",
    publication: "Sacred Valley Cultural Center, Peru"
  },
  {
    quote: "Elena's photography transcends mere documentation. She creates visual narratives that bridge cultures and foster understanding. Her work is essential in today's world.",
    author: "Dr. Amara Okafor",
    title: "Professor of Cultural Anthropology",
    publication: "Oxford University"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <Container size="lg" padding="lg">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">
            What Others Say
          </Typography>
          <Typography variant="lead" className="text-charcoal-600 max-w-2xl mx-auto">
            Testimonials from editors, cultural leaders, and academic institutions
          </Typography>
          <div className="w-24 h-1 bg-terracotta-500 mx-auto mt-6"></div>
        </div>        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cream-50 to-white p-8 rounded-xl shadow-soft border border-cream-200"
            >
              <div className="mb-6">
                <div className="text-4xl text-terracotta-400 mb-4">"</div>
                <Typography variant="body" className="text-charcoal-600 italic leading-relaxed">
                  {testimonial.quote}
                </Typography>
              </div>
              
              <div className="border-t border-cream-200 pt-6">
                <Typography variant="h6" className="mb-1">
                  {testimonial.author}
                </Typography>
                <Typography variant="small" className="text-terracotta-600 mb-1">
                  {testimonial.title}
                </Typography>
                <Typography variant="small" className="text-charcoal-500">
                  {testimonial.publication}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}