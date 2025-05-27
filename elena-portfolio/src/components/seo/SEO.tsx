import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

const defaultMeta = {
  title: 'Elena Vasquez Photography | Travel & Cultural Documentary',
  description: 'Professional travel and cultural photography by Elena Vasquez. Capturing authentic stories from 40+ countries with a focus on human connections.',
  keywords: [
    'travel photography',
    'cultural photography',
    'documentary photographer',
    'Elena Vasquez',
    'professional photographer',
    'travel photographer for hire',
    'cultural documentation',
    'editorial photography',
    'magazine photographer'
  ],
  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
  url: 'https://elenavasquez.photography',
  type: 'website' as const
};

export function generateMetadata({
  title = defaultMeta.title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  image = defaultMeta.image,
  url = defaultMeta.url,
  type = defaultMeta.type
}: SEOProps = {}): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Elena Vasquez' }],
    creator: 'Elena Vasquez',
    publisher: 'Elena Vasquez Photography',
    openGraph: {
      title,
      description,
      url,
      siteName: 'Elena Vasquez Photography',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'Elena Vasquez Photography'
        }
      ],
      locale: 'en_US',
      type
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@elenavasquezphoto'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code'
    }
  };
}