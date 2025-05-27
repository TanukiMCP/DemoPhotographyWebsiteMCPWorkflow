'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Typography, Container } from '@/components/ui';
import { getFeaturedBlogPosts } from '@/lib/blog-data';

export default function RecentAdventures() {
  const featuredPosts = getFeaturedBlogPosts().slice(0, 3);

  return (
    <section className="section-padding bg-charcoal text-white">
      <Container size="lg" padding="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Typography variant="h2" className="text-white mb-4">
            RECENT ADVENTURES
          </Typography>
          <div className="w-24 h-1 bg-terracotta-600 mx-auto mb-6" />
          <Typography variant="lead" className="text-white/90 max-w-2xl mx-auto">
            Stories from the road, insights from the field, and the human connections that make each journey meaningful
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/blog/${post.id}`} className="block">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[16/10]">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-white/70">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Typography variant="h4" className="text-white group-hover:text-terracotta-400 transition-colors duration-300">
                    {post.title}
                  </Typography>
                  
                  <Typography variant="body" className="text-white/80 leading-relaxed">
                    {post.excerpt}
                  </Typography>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

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
            className="border-2 border-white text-white hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            <Link href="/blog">READ ALL STORIES</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}