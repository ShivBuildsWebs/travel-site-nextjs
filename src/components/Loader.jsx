// src/components/Loader.jsx
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function Loader({ onFinish }) {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onFinish && onFinish(), // Call onFinish when the timeline is totally complete
    });

    // Animate elements IN
    tl.to(".loader-container", { opacity: 1, duration: 0.5 })
      .fromTo(
        ".sun",
        { y: 150, opacity: 0, scale: 0.5 },
        { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "expo.out" }
      )
      .fromTo(
        ".mountain",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "expo.out" },
        "-=1.2"
      )
      .fromTo(
        ".loader-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "expo.out" },
        "-=0.8"
      )
      .fromTo(
        ".loader-tagline",
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.5"
      )
      // Hold for a moment
      .to(".loader-container", { duration: 1.5 })
      // Animate elements OUT
      .to(
        ".loader-container",
        { opacity: 0, duration: 1, ease: "power2.inOut" }
      );
  }, [onFinish]);

  return (
    // The container starts with opacity-0 to prevent the initial glitch
    <motion.div className="loader-container opacity-0 fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0f1c] via-[#121826] to-[#0a0f1c] text-white z-[9999]">
      <div className="sun absolute top-1/3 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-[0_0_60px_rgba(255,170,50,0.6)]" />
      
      <div className="absolute bottom-0 flex justify-center items-end w-full h-[40vh]">
        <div className="mountain w-2/5 h-full bg-gradient-to-t from-gray-800 to-gray-600 clip-mountain" />
        <div className="mountain w-2/5 h-[90%] bg-gradient-to-t from-gray-700 to-gray-500 clip-mountain ml-[-60px]" />
        <div className="mountain w-1/3 h-[80%] bg-gradient-to-t from-gray-600 to-gray-400 clip-mountain ml-[-40px]" />
      </div>

      <div className="loader-text relative overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="relative inline-block">
            Himalyan Trails
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
          </span>
        </h1>
      </div>
      
      <p className="loader-tagline mt-4 text-slate-300 text-lg md:text-xl">
        “Where every step leads to a new horizon”
      </p>
    </motion.div>
  );
}