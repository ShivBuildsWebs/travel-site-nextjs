// src/components/WhatWeOffer.jsx
"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { FaHome, FaUtensils, FaHiking, FaHorse, FaMountain, FaUserFriends } from "react-icons/fa";

const features = [
  {
    icon: <FaHome size={42} className="text-amber-400 drop-shadow-glow" />,
    title: "Comfortable Mountain Stays",
    description: "Experience Himalyan hospitality with cozy lodges, well-equipped tents, and all essentials for ultimate rest after your Himalayan adventure.",
    // ✅ This tells our code to add the button
    hasGalleryLink: true, 
  },
  {
    icon: <FaUtensils size={42} className="text-amber-400 drop-shadow-glow" />,
    title: "Hearty Himalayan Meals",
    description: "Fresh, locally sourced meals for breakfast, lunch, and dinner to fuel your trek through the majestic Himalayas.",
  },
  {
    icon: <FaHiking size={42} className="text-amber-400 drop-shadow-glow" />,
    title: "Expert Guided Treks",
    description: "Trusted local guides to lead you safely across challenging terrains and hidden Himalayan trails.",
  },
  {
    icon: <FaHorse size={42} className="text-amber-400 drop-shadow-glow" />,
    title: "Optional Horseback Rides",
    description: "Choose scenic horseback rides along mountain paths for comfort and unique Himalayan views.",
  },
  {
    icon: <FaMountain size={42} className="text-amber-400 drop-shadow-glow" />,
    title: "Panoramic Himalayan Views",
    description: "Reach stunning high-altitude points with expansive views of snow-covered peaks and lush valleys.",
  },
  {
    icon: <FaUserFriends size={42} className="text-amber-400 drop-shadow-glow" />,
    title: "Exclusive Small Group Tours",
    description: "Small group treks ensuring safety, personal attention, and meaningful Himalayan experiences.",
  }
];

export default function WhatWeOffer() {
  return (
    <section id="highlights" aria-label="Himalyan Trails Trekking Services" className="relative z-20 w-full py-24 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 className="text-3xl md:text-4xl font-bold font-playfair mb-12 text-left bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-300 bg-clip-text text-transparent" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          What We Offer: Premium Himalyan Trekking Experiences
          <span className="block w-20 h-1 bg-amber-400 mt-3 rounded" />
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div key={index} className="rounded-xl p-8 flex flex-col items-center text-center shadow-xl relative group transition bg-black/40" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 }}>
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-100">{feature.title}</h3>
              <p className="mt-3 text-slate-300 text-base flex-grow">{feature.description}</p>
              
              {/* ✅ This button now links to your new /accommodations page */}
              {feature.hasGalleryLink && (
                <Link href="/accommodations" className="mt-4 inline-block bg-amber-500/80 hover:bg-amber-500 text-white font-semibold py-2 px-4 rounded shadow transition text-sm">
                    View Room & Tent Photos
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}