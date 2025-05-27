'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { imageLoadVariants } from '@/lib/animations';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export function OptimizedImage({
  src,
  alt,
  fill,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  quality = 85,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={imageLoadVariants}
      className={fill ? 'relative w-full h-full' : ''}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={className}
        priority={priority}
        sizes={sizes}
        quality={quality}
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  );
}