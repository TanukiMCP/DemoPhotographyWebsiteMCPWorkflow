'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography, Container } from '@/components/ui';

const faqs = [
  {
    question: 'How far in advance should I book a photography project?',
    answer: 'I recommend booking 2-3 months in advance for travel projects to ensure availability and proper planning. For urgent projects, please contact me directly to discuss possibilities.'
  },
  {
    question: 'Do you handle travel arrangements and permits?',
    answer: 'I can assist with travel planning and research local photography permits and cultural protocols. Travel expenses are typically covered by the client, and I provide detailed cost estimates upfront.'
  },
  {
    question: 'What usage rights are included with the photography?',
    answer: 'Usage rights vary by package and intended use. Travel and editorial packages typically include marketing and publication rights. Cultural documentation may include educational licensing. All rights are clearly outlined in the project agreement.'
  },
  {
    question: 'How do you ensure cultural sensitivity in your work?',
    answer: 'Cultural sensitivity is paramount to my approach. I research local customs, work with local guides when appropriate, always seek proper consent, and ensure communities benefit from the documentation of their culture.'
  },
  {
    question: 'What happens if weather or circumstances affect the shoot?',
    answer: 'I build flexibility into all travel projects and have contingency plans for weather and unforeseen circumstances. Additional days may be added to ensure project completion, with costs discussed upfront.'
  },
  {
    question: 'Can you work with specific brand guidelines or editorial requirements?',
    answer: 'Absolutely. I collaborate closely with art directors, editors, and brand teams to ensure the photography aligns with your vision while maintaining authentic storytelling.'
  }
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-cream-100">
      <Container size="lg" padding="lg">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-6">
            Frequently Asked Questions
          </Typography>
          <Typography variant="lead" className="text-charcoal-600 max-w-3xl mx-auto">
            Common questions about working together on photography projects.
          </Typography>
        </div>        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-warm-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="flex justify-between items-center">
                  <Typography variant="h4" className="text-forest-green-800 pr-4">
                    {faq.question}
                  </Typography>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-terracotta-600 text-xl font-bold flex-shrink-0"
                  >
                    ↓
                  </motion.span>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-warm-white px-6 pb-6 rounded-b-lg">
                      <Typography variant="body" className="text-charcoal-700 leading-relaxed">
                        {faq.answer}
                      </Typography>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}