"use client"; // because we use framer-motion animations

import { motion } from "framer-motion";
import Head from "next/head"; // use Next's head API

// JSON-LD for Organization and Website structured data
const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://himalyantrails.com/#organization",
        "name": "Himalyan Trails",
        "url": "https://himalyantrails.com/",
        "logo": "https://himalyantrails.com/logo.png",
        "sameAs": [
          "https://www.facebook.com/yourpage",
          "https://www.instagram.com/yourpage",
          "https://twitter.com/yourpage"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://himalyantrails.com/#website",
        "url": "https://himalyantrails.com/",
        "name": "Himalyan Trails Official Website",
        "publisher": { "@id": "https://himalyantrails.com/#organization" },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default function Hero() {
  return (
    <>
      {/* ✅ SEO Meta Tags using Next.js <Head> */}
      <Head>
        <title>
          Himalyan Trails | Best Trekking in Uttarakhand & Himalayan Treks
        </title>
        <meta
          name="description"
          content="Join Himalyan Trails for the best trekking experiences in Uttarakhand and the Himalayas. Explore Nag Tibba, Kedarnath, Valley of Flowers, and more. Authentic Himalayan treks with expert local guides."
        />
        <meta
          name="keywords"
          content="Himalyan Trails, Uttarakhand treks, Nag Tibba trek, Kedarnath trek, Valley of Flowers trek, Gangotri trek, Himalayan trekking tours, trekking in India, adventure trekking Uttarakhand"
        />
        <link rel="canonical" href="https://himalyantrails.com/" />

        {/* Open Graph for Social Media */}
        <meta
          property="og:title"
          content="Himalyan Trails | Trekking in Uttarakhand & Himalayas"
        />
        <meta
          property="og:description"
          content="Experience unforgettable Himalayan trekking with Himalyan Trails. Authentic Uttarakhand treks led by expert guides since 2021."
        />
        <meta property="og:url" content="https://himalyantrails.com/" />
        <meta
          property="og:image"
          content="https://himalyantrails.com/images/hero-preview.jpg"
        />
        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Himalyan Trails | Explore Uttarakhand Treks"
        />
        <meta
          name="twitter:description"
          content="Join Himalyan Trails for Nag Tibba, Kedarnath, Valley of Flowers, and Gangotri treks in Uttarakhand. Trusted trekking partner since 2021."
        />
        <meta
          name="twitter:image"
          content="https://himalyantrails.com/images/hero-preview.jpg"
        />
      </Head>

      {/* ✅ JSON-LD structured data */}
      <StructuredData />

      {/* HERO UI */}
      <header
        id="hero"
        className="relative w-full h-screen overflow-hidden"
        role="banner"
        aria-label="Himalyan Trails trekking adventures in Uttarakhand"
      >
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        {/* Logo Badge */}
        <motion.div
          role="img"
          aria-label="Himalyan Trails Logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-3 py-2 rounded-full flex items-center gap-2 shadow-xl"
        >
          <img
            src="/HimalyanTrailsLogo.png"
            alt="Himalyan Trails official logo"
            className="w-20 h-20"
            loading="lazy"
          />
          <span className="text-sm md:text-base whitespace-nowrap">
            Himalyan Trails
          </span>
        </motion.div>

        {/* Main Content */}
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
          role="region"
          aria-labelledby="hero-heading"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-4 bg-white/90 text-black font-semibold px-4 py-1 rounded-full shadow-lg"
          >
            <span>
              Trusted Himalayan Treks Since <time dateTime="2021">2021</time>
            </span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="font-playfair text-4xl md:text-6xl font-extrabold bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-300 text-transparent bg-clip-text drop-shadow-2xl leading-relaxed pb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Himalyan Trails — Discover the Beauty of Uttarakhand Treks
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl max-w-2xl text-neutral-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Explore Nag Tibba, Kedarnath, Valley of Flowers, and Gangotri treks
            with Himalyan Trails. Expert local guides, authentic Himalayan
            experiences, and unforgettable journeys await you.
          </motion.p>

          <motion.nav
            className="mt-8 flex flex-col sm:flex-row gap-4"
            aria-label="Primary call to action"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <a
              href="#treks"
              title="Explore our Uttarakhand trekking packages"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition"
            >
              Explore Our Treks
            </a>
            <a
              href="#booking"
              title="Book your Himalyan Trails trek today"
              className="inline-block border border-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition"
              rel="noopener noreferrer"
            >
              Start Planning
            </a>
          </motion.nav>
        </div>
      </header>
    </>
  );
}
