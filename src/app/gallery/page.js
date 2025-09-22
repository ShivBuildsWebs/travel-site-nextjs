// src/app/gallery/page.js

import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Photo Gallery | Himalayan Trails',
  description: 'Explore stunning photos from our Himalayan treks. See real images from Nag Tibba, Gangotri, and other beautiful locations in Uttarakhand, captured by our trekkers and guides.',
  alternates: {
    canonical: 'https://himalyantrails.com/gallery',
  },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Himalayan Trails Trekking Photo Gallery",
    "description": "A collection of high-resolution photos from various Himalayan treks organized by Himalayan Trails.",
    "url": "https://himalyantrails.com/gallery",
};

const galleryImages = [
    { src: "/gallery/11.jpg", alt: "Trekkers enjoying a Himalayan Trails group trek in Uttarakhand." },
    { src: "/gallery/12.jpg", alt: "A tourist riding a horse during a scenic Himalayan Trails trek." },
    { src: "/gallery/13.jpg", alt: "A panoramic view of the Himalayas from a Himalayan Trails trekking route." },
    { src: "/gallery/14.jpg", alt: "A trekkers enjoying a Himalayan Trails trek in Uttarakhand." },
    { src: "/gallery/15.jpg", alt: "A group of trekkers posing for a photo during a Himalayan Trails trek." },
    { src: "/gallery/16.jpg", alt: "A scenic view of the Himalayas during a Himalayan Trails trek." },
    { src: "/gallery/17.jpg", alt: "A group of trekkers enjoying a break during a Himalayan Trails trek." },
    { src: "/gallery/18.jpg", alt: "A panoramic view of the Himalayas from a Himalayan Trails trekking route." },
    { src: "/gallery/19.jpg", alt: "A trekkers enjoying a Himalayan Trails trek in Uttarakhand." },
    { src: "/gallery/20.jpg", alt: "A group of trekkers posing for a photo during a Himalayan Trails trek." },
    { src: "/gallery/21.jpg", alt: "A scenic view of the Himalayas during a Himalayan Trails trek." },
    { src: "/gallery/22.jpg", alt: "A group of trekkers enjoying a break during a Himalayan Trails trek." },
    { src: "/gallery/23.jpg", alt: "A panoramic view of the Himalayas from a Himalayan Trails trekking route." },
    { src: "/gallery/24.jpg", alt: "A trekkers enjoying a Himalayan Trails trek in Uttarakhand." },
    { src: "/gallery/25.jpg", alt: "A group of trekkers posing for a photo during a Himalayan Trails trek." },
    { src: "/gallery/26.jpg", alt: "A scenic view of the Himalayas during a Himalayan Trails trek." },
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* ✅ This is the new, animated background */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-green-950 to-gray-900 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}></div>
        <div className="absolute inset-0 bg-[url('/images/forest-texture.png')] opacity-10 animate-fade-in"></div>
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-gradient-to-t from-transparent via-green-900/10 to-transparent"></div>
        <div className="absolute w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl bottom-1/4 left-1/4 animate-float-glow-1"></div>
        <div className="absolute w-80 h-80 bg-lime-400/15 rounded-full blur-3xl top-1/4 right-1/4 animate-float-glow-2"></div>
      </div>
      
      <main className="relative z-20 w-full flex-grow px-6 md:px-12 lg:px-20 py-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-300 text-transparent bg-clip-text leading-relaxed pb-2">
          Trek Photo Gallery
        </h1>
        <p className="text-center text-slate-400 mb-12">
          Real moments captured on our Himalayan adventures.
        </p>
        <PhotoGallery images={galleryImages} />
      </main>
      
      <footer className="w-full z-30">
        <Footer />
      </footer>
    </div>
  );
}