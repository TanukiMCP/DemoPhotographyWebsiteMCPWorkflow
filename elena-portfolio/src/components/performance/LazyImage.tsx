'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes = '100vw',
  quality = 80,
  placeholder = 'empty',
  blurDataURL,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const shouldLoad = priority || isInView;

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {shouldLoad && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            fill={fill}
            sizes={sizes}
            quality={quality}
            priority={priority}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            onLoad={() => setIsLoaded(true)}
            className="object-cover w-full h-full"
            {...props}
          />
        </motion.div>
      )}
      
      {!isLoaded && shouldLoad && (
        <div className="absolute inset-0 bg-cream-200 animate-pulse" />
      )}
    </div>
  );
}