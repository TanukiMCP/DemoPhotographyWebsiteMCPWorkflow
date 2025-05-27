'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { GalleryImage } from '@/lib/gallery-data';
import { Typography } from '@/components/ui';

interface ImageLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev
}: ImageLightboxProps) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white hover:text-terracotta-400 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-terracotta-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-terracotta-400 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}          {/* Main image */}
          <div 
            className="relative max-w-7xl max-h-[90vh] mx-auto px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={currentImage.width}
                height={currentImage.height}
                className="max-w-full max-h-[80vh] object-contain"
                priority
              />
            </motion.div>
            
            {/* Image info */}
            <div className="absolute bottom-0 left-16 right-16 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <Typography variant="h3" className="text-white mb-2">
                {currentImage.title}
              </Typography>
              <Typography variant="body" className="text-white/90 mb-2">
                {currentImage.description}
              </Typography>
              <div className="flex justify-between items-center text-sm">
                <Typography variant="small" className="text-white/80">
                  {currentImage.location}
                </Typography>
                {currentImage.camera && (
                  <Typography variant="small" className="text-white/80">
                    {currentImage.camera} • {currentImage.settings}
                  </Typography>
                )}
              </div>
              <div className="mt-2 text-center">
                <Typography variant="small" className="text-white/60">
                  {currentIndex + 1} of {images.length}
                </Typography>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}