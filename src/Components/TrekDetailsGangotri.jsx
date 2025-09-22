// File: src/components/TrekDetailsGangotri.jsx
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GiBinoculars, GiPathDistance, GiCampfire, GiWaterfall, GiMountainCave } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import { FaMapMarkerAlt, FaPlusCircle, FaMountain } from "react-icons/fa";

export default function TrekDetailsGangotri({ trekData, highlights, pickupLocations, addOns, witnessItems, includedItems }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 py-28 text-white">
      <motion.header initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-6xl w-full mx-auto mb-12 text-center leading-tight">
        <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-300 text-transparent bg-clip-text">
          {trekData.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
          {trekData.subtitle}
        </p>
        <span className="block w-16 h-1 bg-amber-400 mt-6 mx-auto rounded" />
      </motion.header>

      <section className="max-w-6xl w-full mx-auto grid gap-8 md:grid-cols-3 mb-16">
        {highlights.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.2 }} className="rounded-2xl p-8 flex flex-col items-center text-center shadow-lg bg-gradient-to-b from-black/50 via-black/30 to-black/50 hover:scale-[1.03] transition">
            <div className="mb-4 w-14 h-14 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shadow-inner">{item.icon}</div>
            <h3 className="text-xl font-semibold text-slate-100">{item.title}</h3>
            <p className="mt-2 text-slate-300 text-base">{item.description}</p>
          </motion.div>
        ))}
      </section>

      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-6xl w-full mx-auto mb-16 px-4 text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-amber-400 mb-4 flex items-center gap-2"><FaMapMarkerAlt /> Pickup Location</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-slate-300 leading-relaxed">
          {pickupLocations.map((item, index) => (<li key={index}><strong>{item.title}:</strong> {item.description}</li>))}
        </ul>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="max-w-6xl w-full mx-auto mb-16 px-4 text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-amber-400 mb-4 flex items-center gap-2"><FaPlusCircle /> Optional Add-On Experiences</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-slate-300 leading-relaxed">
         {addOns.map((item, index) => (<li key={index}><strong>{item.title}:</strong> {item.description}</li>))}
        </ul>
        <p className="mt-4 text-slate-400 text-base">Add-ons can be arranged during reservation. Some require additional days and permits.</p>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }} className="max-w-6xl w-full mx-auto mb-16 px-4 text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-amber-400 mb-4 flex items-center gap-2"><FaMountain /> What You'll Witness</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-slate-300 leading-relaxed">
            {witnessItems.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </motion.section>

      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }} className="max-w-6xl w-full mx-auto mb-16 px-4 text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-amber-400 mb-4">What’s Included</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-slate-300 leading-relaxed">
          {includedItems.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </motion.section>

      <motion.footer initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="text-center">
        <Link href="/#booking" className="inline-block bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-black font-semibold text-lg py-4 px-8 rounded shadow transition">
          Reserve Your Trek Now
        </Link>
        <p className="text-slate-400 text-sm mt-3">Limited slots available. Early booking is recommended.</p>
      </motion.footer>
    </article>
  );
}