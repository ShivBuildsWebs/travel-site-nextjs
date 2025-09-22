// src/components/SignatureTreks.jsx
"use client"; // Required for Framer Motion

import { motion } from "framer-motion";
import Link from "next/link"; // ✅ Use Next.js Link for optimized navigation
import Image from "next/image"; // ✅ Use Next.js Image for SEO-friendly images

// --- Centralized Data Source (The Single Source of Truth) ---
const treks = [
  {
    title: "Uttarkashi to Nag Tibba Trek",
    slug: "uttarkashi-to-nag-tibba",
    description: "A scenic trek to Nag Tibba with flexible pickup options available through Himalyan Trails.",
    image: "/nagtibb.webp", // Images must be in the /public folder
    alt: "A panoramic view of the Nag Tibba summit in Uttarakhand during sunrise.",
    featured: true,
  },
  {
    title: "Uttarkashi to Gangotri Trek",
    slug: "uttarkashi-to-gangotri",
    description: "A classic spiritual and adventurous trek to Gangotri with expert Himalyan Trails guides.",
    image: "/gangotri.jpg",
    alt: "The Gangotri Temple with the Himalayan peaks in the background.",
    featured: false,
  },
  {
    title: "Mystery Trail Adventure",
    slug: null, // No link for "Coming Soon"
    description: "Get ready for adventure! Kedarnath Trek, Har Ki Dun Trek, Valley of Flowers Trek, and Dayara Bugyal Trek — all launching soon with Himalyan Trails.",
    image: "/comingsoon.png",
    alt: "A mysterious, misty Himalayan trail hinting at upcoming adventures.",
    featured: false,
  },
];

// --- World-Class Structured Data (JSON-LD) ---
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Himalyan Trails Signature Treks in Uttarakhand",
    "description": "Discover Himalyan Trails' signature treks across Uttarakhand, including Nag Tibba, Gangotri, and upcoming adventures.",
    "itemListElement": treks.map((trek, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "TouristTrip",
      "name": trek.title,
      "description": trek.description,
      "image": `https://himalyantrails.com${trek.image}`,
      "url": trek.slug ? `https://himalyantrails.com/treks/${trek.slug}` : undefined,
      "provider": { "@type": "Organization", "name": "Himalyan Trails" },
    },
  })),
};

export default function SignatureTreks() {
  return (
    // ✅ Original <section> tag with classes and aria-label
    <section
      id="treks"
      aria-label="Signature Treks by Himalyan Trails in Uttarakhand"
      className="relative z-20 w-full py-24 text-white"
    >
      {/* ✅ Advanced SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* ✅ Original motion.p with exact classes and animations */}
        <motion.p
          className="text-center text-sm uppercase tracking-widest text-amber-400 mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          Handpicked Himalayan Signature Journeys by Himalyan Trails
        </motion.p>
        {/* ✅ Original motion.h2 with exact classes and animations */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-playfair mb-4 text-center bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-300 text-transparent bg-clip-text leading-relaxed pb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          Signature Himalayan Treks with Himalyan Trails
        </motion.h2>
        {/* ✅ Original description <p> with exact classes */}
        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          Himalyan Trails offers iconic trekking experiences across Uttarakhand — from the serene Nag Tibba summit to the sacred Gangotri glacier. Exciting new routes like Kedarnath, Har Ki Dun, and Valley of Flowers are coming soon.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {treks.map((trek, index) => (
            // ✅ Original card motion.div with exact classes and animations
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-[1.03]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* ✅ SEO FIX: Replaced background-image div with next/image */}
              {/* This is styled to look and behave IDENTICALLY to the original */}
              <Image
                src={trek.image}
                alt={trek.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="absolute inset-0 object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* ✅ Original overlay div */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:bg-black/70 transition duration-300" />
              
              {/* ✅ Original "Featured" span */}
              {trek.featured && (
                <span className="absolute top-4 left-4 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded z-10">
                  Featured
                </span>
              )}

              {/* ✅ Original content div with exact classes */}
              <div className="relative p-6 flex flex-col justify-end h-80">
                <h3 className="text-xl font-semibold">{trek.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{trek.description}</p>
                
                {trek.slug ? (
                  // ✅ Upgraded to next/link, keeping original classes
                  <Link
                    href={`/treks/${trek.slug}`}
                    className="mt-4 inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded shadow transition"
                    aria-label={`Explore the ${trek.title}`}
                  >
                    Explore Trek
                  </Link>
                ) : (
                  // ✅ Original "Coming Soon" span
                  <span className="mt-4 inline-block bg-gray-600 text-white font-semibold py-2 px-4 rounded opacity-70 cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}