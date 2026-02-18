import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import StructuredData from "../src/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Lodha Villa Royale Palava | 3 & 4 BHK Luxury Villas in Dombivli West, Thane",
  description: "Book your dream home at Lodha Villa Royale Palava Dombivli West. Spacious 3 & 4 BHK luxury villas and land starting at ₹2 Crores*. 20.32 acres with world-class amenities. Spot booking offers available.",
  keywords: "Lodha Villa Royale Palava, Lodha Group, luxury villas Dombivli, 3 BHK villas Thane, 4 BHK villas Dombivli West, real estate Dombivli, premium housing Thane, residential projects Dombivli",
  authors: [{ name: "Lodha Group" }],
  creator: "Lodha Group",
  publisher: "Lodha Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lodha-villa-royale-palava.com'),
  alternates: {
    canonical: '/',
  },
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
    type: 'website',
    locale: 'en_US',
    url: 'https://lodha-villa-royale-palava.com',
    title: 'Lodha Villa Royale Palava | Luxury Villas in Dombivli West',
    description: 'Book your dream home at Lodha Villa Royale Palava. Spacious 3 & 4 BHK luxury villas starting at ₹2 Crores*. Premium amenities and excellent connectivity.',
    siteName: 'Lodha Villa Royale Palava',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lodha Villa Royale Palava - Luxury Villas in Dombivli',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lodha Villa Royale Palava | Luxury Villas in Dombivli',
    description: 'Book your dream home at Lodha Villa Royale Palava. 3 & 4 BHK luxury villas starting at ₹2 Crores*.',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
