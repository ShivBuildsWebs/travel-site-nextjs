// src/components/HowItWorks.jsx
"use client"; // Required for Framer Motion animations

import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaHiking,
} from "react-icons/fa";

// --- Centralized Data Source (The Single Source of Truth) ---
const steps = [
  {
    icon: <FaMapMarkedAlt size={42} className="text-amber-400 drop-shadow-glow" aria-hidden="true" />,
    title: "Choose Your Trek",
    description: "Explore our curated Himalayan treks like Nag Tibba, Gangotri, Kedarnath, and more with Himalyan Trails.",
  },
  {
    icon: <FaCalendarAlt size={42} className="text-amber-400 drop-shadow-glow" aria-hidden="true" />,
    title: "Pick Dates",
    description: "Select your preferred departure date and confirm availability with the Himalyan Trails team.",
  },
  {
    icon: <FaCheckCircle size={42} className="text-amber-400 drop-shadow-glow" aria-hidden="true" />,
    title: "Reserve Your Spot",
    description: "Secure your Himalyan Trails booking quickly and guarantee your trek with ease.",
  },
  {
    icon: <FaHiking size={42} className="text-amber-400 drop-shadow-glow" aria-hidden="true" />,
    title: "Enjoy the Journey",
    description: "Embark on your Himalayan adventure with Himalyan Trails for an unforgettable experience.",
  },
];

// --- World-Class "HowTo" Structured Data (JSON-LD) ---
// This detailed schema makes you eligible for rich results in Google.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Book a Himalayan Trek with Himalyan Trails",
  "description": "A 4-step guide on how to book your Himalayan trekking adventure with Himalyan Trails, from choosing treks like Nag Tibba to reserving your spot easily.",
  "image": "https://himalyantrails.com/images/how-to-book-trek.jpg", // A representative image for the whole process
  "totalTime": "PT5M", // Estimated time to complete the booking
  "step": steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.title,
    "text": step.description,
    "url": `https://himalyantrails.com/how-it-works#step-${index + 1}`, // Link to this step on the page
  })),
  "provider": {
    "@type": "Organization",
    "name": "Himalyan Trails",
  }
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative z-20 w-full py-20 text-white"
    >
      {/* ✅ Advanced SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          id="how-it-works-heading"
          className="text-3xl md:text-4xl font-bold font-playfair mb-4 text-center bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-300 text-transparent bg-clip-text leading-relaxed pb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        >
          How to Book Your Himalayan Trek in 4 Easy Steps
        </motion.h2>

        <p className="text-center text-slate-300 mb-12 max-w-2xl mx-auto">
          Booking your Himalayan adventure with <strong>Himalyan Trails</strong> is simple and hassle-free. Follow these 4 steps to secure your spot for treks like Nag Tibba, Gangotri, Kedarnath, and more.
        </p>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              id={`step-${index + 1}`} // Anchor for JSON-LD step URLs
              className="rounded-xl p-6 flex flex-col items-center text-center bg-black/40"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-slate-100">
                {step.title}
              </h3>
              <p className="mt-3 text-slate-300 text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}