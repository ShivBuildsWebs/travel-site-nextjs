// src/components/PhotoGallery.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

export default function PhotoGallery({ images }) {
  const [selectedId, setSelectedId] = useState(null);
  const selectedImage = images.find(img => img.src === selectedId);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedId) return;
      const currentIndex = images.findIndex(img => img.src === selectedId);
      if (event.key === 'Escape') {
        setSelectedId(null);
      } else if (event.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedId(images[nextIndex].src);
      } else if (event.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedId(images[prevIndex].src);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, images]);
  
  // Lock background scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = selectedId ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedId]);
  
  const handleArrowClick = (direction) => {
      const currentIndex = images.findIndex(img => img.src === selectedId);
      if (direction === 'next') {
          const nextIndex = (currentIndex + 1) % images.length;
          setSelectedId(images[nextIndex].src);
      } else {
          const prevIndex = (currentIndex - 1 + images.length) % images.length;
          setSelectedId(images[prevIndex].src);
      }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {images.map(image => (
          <motion.div
            key={image.src}
            variants={itemVariants}
            className="relative group cursor-pointer"
            onClick={() => setSelectedId(image.src)}
            whileHover={{ scale: 1.03 }} // Subtle lift
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Animated Frame */}
            <motion.div 
              className="absolute inset-0 p-2 border-4 border-transparent rounded-lg z-10 
                         bg-gradient-to-br from-green-700/60 to-slate-800/60 
                         group-hover:from-emerald-500/80 group-hover:to-gray-700/80 
                         transition-all duration-300 ease-in-out 
                         shadow-lg group-hover:shadow-2xl group-hover:shadow-emerald-500/20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="absolute inset-0 rounded-md border border-green-400/20 group-hover:border-emerald-300/40 transition-colors duration-300"></div>
            </motion.div>

            {/* The Image Itself */}
            <div className="relative aspect-square overflow-hidden rounded-lg z-20">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
             {/* Subtle text on hover for accessibility/info */}
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-2 rounded-lg z-30">
                <p className="text-white text-sm font-semibold drop-shadow-md">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <div className="relative w-full h-full max-w-4xl max-h-4xl flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
               <motion.div
                className="relative w-full h-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
              <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors duration-200" aria-label="Close"><FaTimes size={30} /></button>
              <button onClick={(e) => { e.stopPropagation(); handleArrowClick('prev'); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200" aria-label="Previous image"><FaArrowLeft size={30} /></button>
              <button onClick={(e) => { e.stopPropagation(); handleArrowClick('next'); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200" aria-label="Next image"><FaArrowRight size={30} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}