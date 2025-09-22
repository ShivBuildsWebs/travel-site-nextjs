// src/components/WhyTrekWithUs.jsx
"use client"; // Required for Framer Motion animations

import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaUsers,
  FaCar,
  FaHorseHead,
  FaCampground,
  FaLeaf
} from "react-icons/fa";

// --- Centralized Data Source (The Single Source of Truth) ---
const features = [
  {
    icon: FaCalendarCheck,
    title: "Post-COVID Safe Treks",
    description: "Founded in 2021, Himalyan Trails ensures safe small-group trekking experiences post-pandemic across Nag Tibba, Gangotri, Kedarnath, and more.",
  },
  {
    icon: FaUsers,
    title: "Custom Group Itineraries",
    description: "We tailor treks for couples, families, friends, and corporate teams to ensure comfort, bonding, and memorable Himalayan adventures.",
  },
  {
    icon: FaCar,
    title: "Door-to-Door Transport",
    description: "Enjoy hassle-free private pickup and drop-off with Himalyan Trails, right from your city to trek trailheads in Uttarakhand.",
  },
  {
    icon: FaHorseHead,
    title: "Horse Gear Support",
    description: "Our healthy, trained horses carry your gear, ensuring even beginners and all fitness levels can enjoy the trek stress-free.",
  },
  {
    icon: FaCampground,
    title: "All-Inclusive Camping",
    description: "Sleep in comfortable tents, savor hot meals, and enjoy unforgettable Himalayan night skies — all fully arranged by Himalyan Trails.",
  },
  {
    icon: FaLeaf,
    title: "Eco-Friendly Practices",
    description: "We strictly follow Leave No Trace principles to preserve the Himalayan ecosystem for future explorers.",
  },
];

// --- World-Class "Graph" & "FAQ" Structured Data (JSON-LD) ---
const jsonLd = {
  "@context": "https://schema.org",
  // @graph allows us to connect multiple data types together
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://himalyantrails.com/#organization",
      "name": "Himalyan Trails",
      "url": "https://himalyantrails.com/",
      "logo": "https://himalyantrails.com/logo.png",
      "areaServed": {
        "@type": "State",
        "name": "Uttarakhand" // ✅ Local SEO Boost
      },
      "sameAs": [
        "https://facebook.com/himalyantrails",
        "https://instagram.com/himalyantrails",
        "https://twitter.com/himalyantrails"
      ]
    },
    {
      "@type": "OfferCatalog",
      "name": "Himalyan Trails Service Guarantees",
      "itemListElement": features.map((feature, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": feature.title,
            "description": feature.description,
            "provider": { "@id": "https://himalyantrails.com/#organization" }
          }
        }
      }))
    },
    // ✅ SEO LOOPHOLE: The FAQ Page schema for Rich Results
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are treks with Himalyan Trails safe, especially after COVID?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely. Himalyan Trails was founded in 2021 with a focus on providing safe, small-group trekking experiences. We follow strict safety protocols to ensure the well-being of all our trekkers."
          }
        },
        {
          "@type": "Question",
          "name": "Are your Himalayan treks eco-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we are committed to sustainable tourism. We strictly follow Leave No Trace principles on all our treks to preserve the pristine Himalayan ecosystem for future generations."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer custom trekking itineraries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in creating custom trekking itineraries for couples, families, friends, and corporate teams. We tailor the adventure to ensure comfort, bonding, and a memorable experience for your group."
          }
        }
      ]
    }
  ]
};

export default function WhyTrekWithUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="relative z-20 w-full py-20 text-white"
    >
      {/* ✅ Injecting our hyper-advanced structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          id="why-us-heading"
          className="text-3xl md:text-4xl font-bold font-playfair mb-4 text-center bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-300 text-transparent bg-clip-text leading-relaxed pb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          Why Trek With Himalyan Trails: Safe, Custom & Eco-Friendly
        </motion.h2>

        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          Thousands trust <strong>Himalyan Trails</strong> for safe, personalized, and eco-friendly Himalayan treks. Since 2021, we’ve been making adventures like Nag Tibba, Gangotri, and Kedarnath unforgettable.
        </p>

        <div className="space-y-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 border-2 border-amber-400 shadow-lg">
                <feature.icon size={24} className="text-amber-400" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100">
                  {feature.title}
                </h3>
                <p className="mt-1 text-slate-300 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}