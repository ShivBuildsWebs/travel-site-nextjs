// File: src/app/terms/page.js
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Terms and Conditions for Trekking in Uttarakhand | Himalyan Trails',
  description:
    'Official Terms and Conditions for Himalyan Trails. Covers participant responsibilities, health requirements, booking policies, risks, and liability for treks in Uttarakhand.',
  alternates: {
    canonical: 'https://himalyantrails.com/terms',
  },
  openGraph: {
    title: 'Himalyan Trails | Terms and Conditions for Trekking in Uttarakhand',
    description: 'Detailed Terms and Conditions for Himalyan Trails Treks in Uttarakhand.',
    url: 'https://himalyantrails.com/terms',
    type: 'website',
    images: [{ url: 'https://himalyantrails.com/images/og-terms.jpg', alt: 'Terms and Conditions - Himalyan Trails' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himalyan Trails | Trekking Terms and Conditions',
    description: 'Official trekking Terms & Conditions for Himalyan Trails Uttarakhand.',
    images: ['https://himalyantrails.com/images/twitter-terms.jpg'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Himalyan Trails Trekking Terms and Conditions",
  "description": "Official Terms and Conditions for Himalyan Trails treks in Uttarakhand.",
  "url": "https://himalyantrails.com/terms",
  "dateModified": new Date().toISOString(),
  "publisher": {
    "@type": "Organization",
    "name": "Himalyan Trails",
    "url": "https://himalyantrails.com",
    "logo": { "@type": "ImageObject", "url": "https://himalyantrails.com/logo.png", "alt": "Himalyan Trails Logo" }
  }
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Use flex column layout with min-h-screen for sticky footer */}
      <div className="flex flex-col min-h-screen relative">
        <video
          className="fixed inset-0 w-full h-full object-cover z-0"
          src="/videos/Sunrise.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-label="Sunrise video background showing Himalayan trails"
        />
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-10"></div>

        {/* Main content with z-20 above video */}
        <main className="relative z-20 w-full flex-grow px-6 md:px-12 lg:px-20 py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-300 text-transparent bg-clip-text">
            {`Himalyan Trails Uttarakhand | Official Terms and Conditions`}
          </h1>
          <p className="text-center text-sm text-slate-300 mb-12">
            {`Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | Himalyan Trails Treks - Uttarkashi, Uttarakhand`}
          </p>
          <article className="prose prose-invert prose-slate max-w-full leading-relaxed text-slate-200 space-y-8">
            <h2 className="text-2xl font-semibold text-amber-400">{`1. Acknowledgement of Trekking Risks in Uttarakhand`}</h2>
            <p>{`Trekking in the Himalayas is an adventurous and physically demanding activity. By booking a trek with Himalyan Trails, you (the "Client") acknowledge that trekking, mountaineering, and camping in Uttarakhand involve risks including but not limited to landslides, avalanches, altitude sickness, wild animal encounters, unpredictable weather, accidents, and logistical challenges.`}</p>
            <h2 className="text-2xl font-semibold text-amber-400">{`2. Liability Waiver for Himalyan Trails Treks`}</h2>
            <p>{`To the maximum extent allowed under Indian law, you agree that Himalyan Trails, its staff, guides, and affiliates shall not be held responsible for injuries, losses, damages, illnesses, delays, cancellations, or accidents during your trek in Uttarakhand. This includes, but is not limited to, incidents caused by natural disasters, equipment failure, or unforeseen events beyond our control.`}</p>
            <h2 className="text-2xl font-semibold text-amber-400">{`3. Health, Fitness, and Insurance Requirements`}</h2>
            <p>{`Clients must ensure they are physically fit for high-altitude trekking. You must disclose any medical conditions or allergies before booking. Himalyan Trails strongly advises purchasing comprehensive travel insurance covering medical emergencies, evacuation, cancellations, theft, and personal liability.`}</p>
            <h2 className="text-2xl font-semibold text-amber-400">{`4. Booking, Pricing, Cancellations, and Refund Policy`}</h2>
            <p>{`All bookings are confirmed only after receipt of full payment. Prices may vary depending on trek routes and services. Cancellations may incur fees up to 100%. No refunds are provided for voluntary withdrawal, late arrivals, or breaking trek rules. Himalyan Trails reserves the right to cancel treks due to weather, government orders, or safety concerns.`}</p>
            <h2 className="text-2xl font-semibold text-amber-400">{`5. Indemnification and Client Responsibilities`}</h2>
            <p>{`You agree to indemnify Himalyan Trails against any damages, legal claims, or expenses arising from your actions, including non-compliance with safety guidelines, damage to property, or injury to others during the trek.`}</p>
            <h2 className="text-2xl font-semibold text-amber-400">{`6. Governing Law and Jurisdiction`}</h2>
            <p>{`All terms are governed by the laws of Uttarakhand, India. Any legal disputes shall be resolved exclusively in the courts of Uttarkashi, Uttarakhand.`}</p>
            <h2 className="text-2xl font-semibold text-amber-400">{`7. Final Acceptance of Terms`}</h2>
            <p>{`By booking a trek with Himalyan Trails, you confirm you have read and agreed to these Terms and Conditions. Failure to read them does not exempt you from compliance.`}</p>
            <h2 className="text-2xl font-semibold text-amber-400">Contact Himalyan Trails</h2>
            <address className="not-italic text-slate-300">
              <strong>Himalyan Trails</strong><br />
              Village Ontar, Uttarkashi, Uttarakhand, India<br />
              Phone: <a href="tel:+919879647742" className="underline hover:text-amber-400">+91 98796 47742</a><br />
              Email: <a href="mailto:ssemwal116@gmail.com" className="underline hover:text-amber-400">ssemwal116@gmail.com</a>
            </address>
          </article>
        </main>

        {/* Footer spans full width, stays at bottom if content is short */}
        <footer className="w-full z-30">
          <Footer />
        </footer>
      </div>
    </>
  );
}
