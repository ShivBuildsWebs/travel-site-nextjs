// src/components/Testimonial.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from 'next/link'; // ✅ Import Link for navigation

const allTestimonials = [
    { quote: "The Nag Tibba trek with Himalayan Trails was absolutely breathtaking. Beautiful campsites and excellent support.", name: "Pooja S." },
    { quote: "I've never felt more alive. Reaching Gangotri temple with Himalayan Trails was surreal.", name: "Ankit R." },
    { quote: "Well-organized and unforgettable with Himalayan Trails. Already planning my next trek!", name: "Ravi M." },
    { quote: "Professional Himalayan Trails team and stunning views all along the trail.", name: "Neha K." },
    { quote: "Loved the peaceful campsites and delicious food provided by Himalayan Trails.", name: "Siddharth T." },
    { quote: "A perfect escape into nature. Himalayan Trails made it highly memorable.", name: "Meera V." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Himalayan Trails Trekking Experiences",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": allTestimonials.length,
    "bestRating": "5"
  },
  "review": allTestimonials.map((testimonial) => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": testimonial.name },
    "reviewBody": testimonial.quote,
    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
    "datePublished": "2025-09-22",
  })),
};

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const testimonialsToShow = isMobile ? 1 : 3;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + testimonialsToShow) % allTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const currentTestimonials = isMobile
    ? [allTestimonials[index % allTestimonials.length]]
    : [
        allTestimonials[index % allTestimonials.length],
        allTestimonials[(index + 1) % allTestimonials.length],
        allTestimonials[(index + 2) % allTestimonials.length],
      ];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative w-full py-12 mb-12 text-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl font-bold font-playfair mb-4 text-center bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-300 text-transparent bg-clip-text leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          Himalayan Trails Reviews: What Our Trekkers Say
        </motion.h2>

        <p className="text-center text-slate-300 mb-8 max-w-2xl mx-auto text-sm md:text-base">
          Real experiences from trekkers on unforgettable Himalayan journeys.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-stretch min-h-[180px]">
          <AnimatePresence>
            {currentTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name + index}
                className="rounded-xl p-4 bg-black/40 flex flex-col text-sm"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45 }}
              >
                <blockquote className="text-slate-300 italic flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="mt-3 font-semibold text-amber-400 block not-italic">
                  — {testimonial.name}
                </cite>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ✅ FIXED: Button is now a Link that goes to the /gallery page */}
        <div className="text-center mt-8 relative z-20">
          <Link
            href="/gallery"
            className="block w-full sm:w-auto mx-auto bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-5 rounded shadow transition text-sm md:text-base"
          >
            View Himalayan Trails Trek Photo Gallery
          </Link>
        </div>

        {/* ✅ REMOVED: The old modal code is no longer needed */}
      </div>
    </section>
  );
}