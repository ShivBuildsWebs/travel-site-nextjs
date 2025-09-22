// src/app/accommodations/page.js

import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Accommodations Gallery | Himalayan Trails',
  description: 'View photos of our comfortable mountain stays, including cozy lodges and well-equipped tents for your Himalayan trek with Himalayan Trails.',
  alternates: {
    canonical: 'https://himalyantrails.com/accommodations',
  },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Himalayan Trails Accommodations Photo Gallery",
    "description": "A collection of photos showcasing the lodges, tents, and campsites provided by Himalayan Trails.",
    "url": "https://himalyantrails.com/accommodations",
};

// This is where you manage all your accommodation photos
const accommodationImages = [
    { src: "/gallery/27.jpg", alt: "A cozy, illuminated tent under a starry Himalayan night sky." },
    { src: "/gallery/28.jpg", alt: "A clean and organized campsite during the day with mountain views." },
    { src: "/gallery/29.jpg", alt: "The warm and comfortable interior of a mountain lodge stay." },
    { src: "/gallery/30.jpg", alt: "A group enjoying a meal together at a mountain lodge." },
    { src: "/gallery/31.jpg", alt: "A scenic view of tents set up in a Himalayan valley." },
    { src: "/gallery/32.jpg", alt: "A cozy lodge room with traditional Himalayan decor." },
    { src: "/gallery/33.jpg", alt: "A well-equipped tent interior with sleeping bags and gear." },
    { src: "/gallery/34.jpg", alt: "A panoramic view of a campsite surrounded by Himalayan peaks." },
    { src: "/gallery/35.jpg", alt: "A group of trekkers relaxing outside their tents at sunset." },
    { src: "/gallery/36.jpg", alt: "A warm and inviting common area in a mountain lodge." },
    { src: "/gallery/37.jpg", alt: "A nighttime view of a campsite illuminated by lanterns." },
    { src: "/gallery/38.jpg", alt: "A comfortable bed setup inside a Himalayan lodge room." },
    { src: "/gallery/39.jpg", alt: "A scenic campsite with tents pitched on a grassy meadow." },
    { src: "/gallery/40.jpg", alt: "A group enjoying a campfire outside their tents in the Himalayas." },
];

export default function AccommodationsPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="fixed inset-0 w-full h-full bg-slate-900 z-0"></div>
      
      <main className="relative z-20 w-full flex-grow px-6 md:px-12 lg:px-20 py-20 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-300 text-transparent bg-clip-text leading-relaxed pb-2">
          Accommodations Gallery
        </h1>
        <p className="text-center text-slate-400 mb-12">
          A look at our cozy lodges, tents, and campsites.
        </p>
        <PhotoGallery images={accommodationImages} />
      </main>
      
      <footer className="w-full z-30">
        <Footer />
      </footer>
    </div>
  );
}