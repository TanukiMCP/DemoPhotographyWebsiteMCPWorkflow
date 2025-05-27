'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Typography, Container } from '@/components/ui';
import { GalleryGrid, ImageLightbox } from '@/components/gallery';
import { Gallery } from '@/lib/gallery-data';

interface GalleryPageClientProps {
  gallery: Gallery;
}

export default function GalleryPageClient({ gallery }: GalleryPageClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number>(-1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxIndex(-1);
  };

  const handleNextImage = () => {
    setLightboxIndex((prev) => 
      prev < gallery.images.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrevImage = () => {
    setLightboxIndex((prev) => 
      prev > 0 ? prev - 1 : gallery.images.length - 1
    );
  };  return (
    <div className="min-h-screen bg-warm-white">
      {/* Breadcrumb */}
      <section className="pt-8 pb-4">
        <Container size="lg" padding="lg">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/portfolio" className="text-terracotta-600 hover:text-terracotta-700">
              Portfolio
            </Link>
            <span className="text-charcoal-400">/</span>
            <span className="text-charcoal-600">{gallery.title}</span>
          </nav>
        </Container>
      </section>

      {/* Gallery Header */}
      <section className="pb-8">
        <Container size="lg" padding="lg">
          <div className="text-center">
            <Typography variant="h1" className="mb-4">
              {gallery.title}
            </Typography>
            <Typography variant="lead" className="text-charcoal-600 mb-6 max-w-2xl mx-auto">
              {gallery.description}
            </Typography>
            <div className="flex items-center justify-center space-x-6 text-sm text-charcoal-500">
              <span>{gallery.location}</span>
              <span>•</span>
              <span>{gallery.images.length} photographs</span>
            </div>
            <div className="w-24 h-1 bg-terracotta-600 mx-auto mt-8"></div>
          </div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <Container size="lg" padding="lg">
          <GalleryGrid 
            images={gallery.images} 
            onImageClick={handleImageClick}
          />
        </Container>
      </section>

      {/* Lightbox */}
      <ImageLightbox
        images={gallery.images}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
}