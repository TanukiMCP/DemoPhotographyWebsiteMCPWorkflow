import { notFound } from 'next/navigation';
import { getAllGalleries, getGalleryById } from '@/lib/gallery-data';
import GalleryPageClient from './GalleryPageClient';

interface GalleryPageProps {
  params: Promise<{
    region: string;
  }>;
}

// Generate static params for all galleries
export async function generateStaticParams() {
  const galleries = getAllGalleries();
  return galleries.map((gallery) => ({
    region: gallery.id,
  }));
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { region } = await params;
  const gallery = getGalleryById(region);

  if (!gallery) {
    notFound();
  }

  return <GalleryPageClient gallery={gallery} />;
}