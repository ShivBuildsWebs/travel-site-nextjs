// src/components/Footer.jsx

import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "/#hero" },
    { label: "Highlights", href: "/#highlights" },
    { label: "Treks", href: "/#treks" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Reserve", href: "/#booking" }
  ];

  return (
    <footer
      className="w-full relative bg-black/30 backdrop-blur-xl border-t border-slate-700"
      role="contentinfo"
      aria-label="Himalyan Trails Footer"
    >
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-amber-400 drop-shadow">
            Himalyan Trails
          </h3>
          <p className="text-slate-300 text-sm mt-1">
            Premium Himalayan trekking experiences since 2021.
          </p>
        </div>

        {/* Navigation */}
        <nav
          className="flex flex-wrap justify-center gap-6 relative z-10"
          aria-label="Footer Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-slate-200 font-medium transition-transform duration-300 group"
            >
              <span className="inline-block transition-transform group-hover:scale-110 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_5px_rgba(255,191,0,0.6)]">
                {link.label}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <address className="flex flex-col items-center md:items-end gap-3 text-slate-300 text-sm not-italic">
          {/* ✅ First Phone Number */}
          <a href="tel:+919913982835" aria-label="Call Himalyan Trails" className="flex items-center gap-2 hover:scale-105 hover:text-amber-400 transition">
            <FaPhone className="text-amber-400" aria-hidden="true" />
            +91 99139 82835
          </a>
          {/* ✅ Second Phone Number */}
          <a href="tel:+918160907803" aria-label="Call Himalyan Trails" className="flex items-center gap-2 hover:scale-105 hover:text-amber-400 transition">
            <FaPhone className="text-amber-400" aria-hidden="true" />
            +91 81609 07803
          </a>
          {/* ✅ Updated WhatsApp Link */}
          <a
            href="https://wa.me/919879647742"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Himalyan Trails"
            className="flex items-center gap-2 hover:scale-105 hover:text-amber-400 transition"
          >
            <FaWhatsapp className="text-amber-400" aria-hidden="true" />
            WhatsApp Chat
          </a>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Uttarkashi,Uttarakhand" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:scale-105 hover:text-amber-400 transition"
          >
            <FaMapMarkerAlt className="text-amber-400" aria-hidden="true" />
            <span>Uttarkashi, Uttarakhand</span>
          </a>
        </address>
      </div>

      <div className="border-t border-slate-700 text-center text-xs text-slate-500 py-4">
        © {new Date().getFullYear()} Himalyan Trails. All rights reserved.
      </div>
    </footer>
  );
}