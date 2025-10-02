// File: src/app/layout.js
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import { SpeedInsights } from "@vercel/speed-insights/next"; // ✅ 1. IMPORT SPEED INSIGHTS
import "./globals.css";
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Himalyan Trails",
  "url": "https://himalyantrails.com",
  "logo": "https://himalyantrails.com/logo.png",
  "telephone": "+919913982835",
  "email": "ssemwal116@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Village Ontar",
    "addressLocality": "Uttarkashi",
    "addressRegion": "Uttarakhand",
    "addressCountry": "IN"
  },
  "openingHours": "Mo-Su 09:00-19:00",
  "priceRange": "$$",
  "sameAs": [
    "https://facebook.com/your-page",
    "https://instagram.com/your-page",
    "https://twitter.com/your-page"
  ],
  "image": "https://himalyantrails.com/images/og-homepage.jpg",
  "description": "Premium Himalayan trekking experiences in Uttarakhand, specializing in routes like Nag Tibba and Gangotri."
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaderBeenShown = sessionStorage.getItem('loaderShown');
    if (hasLoaderBeenShown) {
      setLoading(false);
    }
  }, []);

  const handleLoaderFinish = () => {
    setLoading(false);
    sessionStorage.setItem('loaderShown', 'true');
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <AnimatePresence>
          {loading && <Loader onFinish={handleLoaderFinish} />}
        </AnimatePresence>
        
        {!loading && (
          <>
            <video
              className="fixed top-0 left-0 w-full h-full object-cover z-0"
              src="/videos/Sunrise.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="fixed top-0 left-0 w-full h-full bg-black/ ৫০ z-10" />
            <div className="relative z-20">
              {children}
            </div>
          </>
        )}
        <SpeedInsights /> {/* ✅ 2. ADD THE COMPONENT HERE */}
      </body>
    </html>
  );
}