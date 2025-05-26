import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
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
  title: "Elena Vasquez - Travel & Cultural Photography",
  description: "Capturing the soul of places through the people who call them home. Professional travel and cultural photography by Elena Vasquez.",
  keywords: ["photography", "travel", "cultural", "documentary", "Elena Vasquez"],
  authors: [{ name: "Elena Vasquez" }],
  openGraph: {
    title: "Elena Vasquez - Travel & Cultural Photography",
    description: "Capturing the soul of places through the people who call them home",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}