// File: src/app/layout.js
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import "./globals.css";
// ✅ 1. Import the fonts from next/font
import { Playfair_Display, Inter } from 'next/font/google';

// ✅ 2. Configure the fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair', // This creates a CSS variable for the font
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',   // This creates a CSS variable for the font
  display: 'swap',
});

const jsonLd = { /* ... your global business data ... */ };

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
    // ✅ 3. Apply the font variables to the <html> tag
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
            <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10" />
            <div className="relative z-20">
              {children}
            </div>
          </>
        )}
      </body>
    </html>
  );
}