import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

export function generateSEOMetadata({
  title = "Elena Vasquez - Travel & Cultural Photography",
  description = "Capturing the soul of places through the people who call them home. Professional travel and cultural photography by Elena Vasquez.",
  image = "https://demoportfolioworkflow-tanukimcp.netlify.app/images/elena-hero.jpg",
  url = "https://demoportfolioworkflow-tanukimcp.netlify.app",
  type = "website"
}: SEOProps = {}): Metadata {
  return {
    title: {
      default: title,
      template: "%s | Elena Vasquez Photography"
    },
    description,
    keywords: [
      "photography", "travel photography", "cultural photography", 
      "documentary photography", "Elena Vasquez", "photographer",
      "travel", "culture", "authentic storytelling", "professional photographer"
    ],
    authors: [{ name: "Elena Vasquez", url }],
    creator: "Elena Vasquez",
    publisher: "Elena Vasquez Photography",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: "Elena Vasquez Photography",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@elenavasquezphoto",
    },
    verification: {
      google: "google-site-verification-code",
    },
    alternates: {
      canonical: url,
    },
  };
}