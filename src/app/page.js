// File: src/app/page.js

// The ULTIMATE METADATA OBJECT for best-in-class SEO
export const metadata = {
  title: 'Himalyan Trails | Premier Trekking in Uttarakhand & the Himalayas',
  description: 'Book unforgettable trekking adventures with Himalyan Trails. Explore iconic routes like Nag Tibba and Gangotri with expert guides, custom itineraries, and a commitment to safety and eco-friendly practices.',
  alternates: {
    canonical: 'https://himalyantrails.com',
  },
  openGraph: {
    title: 'Himalyan Trails | Premier Trekking in Uttarakhand & the Himalayas',
    description: 'Discover breathtaking landscapes and expert-led treks in the Indian Himalayas. Your adventure with Himalyan Trails starts here.',
    url: 'https://himalyantrails.com',
    type: 'website',
    images: [{ url: 'https://himalyantrails.com/images/og-homepage.jpg', alt: 'A panoramic view of the Himalayas on a sunny day.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himalyan Trails | Premier Trekking in Uttarakhand & the Himalayas',
    description: 'Discover breathtaking landscapes and expert-led treks in the Indian Himalayas. Your adventure with Himalyan Trails starts here.',
    images: ['https://himalyantrails.com/images/twitter-homepage.jpg'],
  },
};

// Import your page components (paths corrected to lowercase 'components')
import Hero from '@/components/Hero';
import WhatWeOffer from '@/components/WhatWeOffer';
import SignatureTreks from '@/components/SignatureTreks';
import Testimonial from '@/components/Testimonial';
import HowItWorks from '@/components/HowItWorks';
import WhyTrekWithUs from '@/components/WhyTrekWithUs';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

// This is your actual page content
export default function HomePage() {
  return (
    <main>
      <Hero />
      
      {/* ✅ THIS IS THE CRUCIAL WRAPPER THAT FIXES THE LAYOUT */}
      <div className="bg-black/50 backdrop-blur">
        <WhatWeOffer />
        <SignatureTreks />
        <Testimonial />
        <HowItWorks />
        <WhyTrekWithUs />
        <BookingForm />
        <Footer />
      </div>
    </main>
  );
}