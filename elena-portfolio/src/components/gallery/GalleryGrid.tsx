'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { GalleryImage } from '@/lib/gallery-data';
import { Typography } from '@/components/ui';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="break-inside-avoid group cursor-pointer"
          onClick={() => onImageClick(index)}
        >
          <div className="relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Typography variant="h4" className="text-white mb-1">
                  {image.title}
                </Typography>
                <Typography variant="small" className="text-white/90">
                  {image.location}
                </Typography>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}