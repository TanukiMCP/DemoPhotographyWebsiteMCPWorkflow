import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Layout } from "@/components/layout";
import StructuredData from "@/components/seo/StructuredData";
import { PerformanceMonitor } from "@/components/performance";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Elena Vasquez - Travel & Cultural Photography",
    template: "%s | Elena Vasquez Photography"
  },
  description: "Capturing the soul of places through the people who call them home. Professional travel and cultural photography by Elena Vasquez.",
  keywords: ["photography", "travel", "cultural", "documentary", "Elena Vasquez", "photographer", "travel photography", "cultural photography", "documentary photography"],
  authors: [{ name: "Elena Vasquez", url: "https://demoportfolioworkflow-tanukimcp.netlify.app" }],
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
    type: "website",
    locale: "en_US",
    url: "https://demoportfolioworkflow-tanukimcp.netlify.app",
    siteName: "Elena Vasquez Photography",
    title: "Elena Vasquez - Travel & Cultural Photography",
    description: "Capturing the soul of places through the people who call them home",
    images: [
      {
        url: "https://demoportfolioworkflow-tanukimcp.netlify.app/images/elena-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Elena Vasquez - Travel & Cultural Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elena Vasquez - Travel & Cultural Photography",
    description: "Capturing the soul of places through the people who call them home",
    images: ["https://demoportfolioworkflow-tanukimcp.netlify.app/images/elena-hero.jpg"],
    creator: "@elenavasquezphoto",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${sourceSans3.variable} font-body antialiased`}
      >
        <StructuredData type="website" />
        <PerformanceMonitor />
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}