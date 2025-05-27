'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Gallery } from '@/lib/gallery-data';
import { Typography } from '@/components/ui';

interface GalleryCardProps {
  gallery: Gallery;
  index: number;
}

export function GalleryCard({ gallery, index }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link href={`/portfolio/${gallery.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={gallery.coverImage}
            alt={gallery.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Typography variant="h3" className="text-white mb-1">
              {gallery.title}
            </Typography>
            <Typography variant="body" className="text-white/90 text-sm">
              {gallery.images.length} images
            </Typography>
          </div>
        </div>        <div className="p-6">
          <Typography variant="h3" className="mb-2 group-hover:text-terracotta-600 transition-colors">
            {gallery.title}
          </Typography>
          <Typography variant="body" className="text-charcoal-600 mb-3">
            {gallery.description}
          </Typography>
          <div className="flex items-center justify-between">
            <Typography variant="small" className="text-terracotta-600 font-medium">
              {gallery.location}
            </Typography>
            <Typography variant="small" className="text-charcoal-500">
              {gallery.images.length} photos
            </Typography>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}