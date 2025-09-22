// File: src/app/privacy-policy/page.js

import Footer from "@/components/Footer";

export const metadata = {
  title: 'Privacy Policy | Himalyan Trails',
  description: 'Read the comprehensive Privacy Policy of Himalayan Trails. Understand how your data is collected, stored, and protected while booking Himalayan treks in Uttarakhand.',
  alternates: {
    canonical: 'https://himalyantrails.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Himalyan Trails',
    description: 'Our commitment to your privacy. Learn how Himalayan Trails handles your data for trekking services in Uttarakhand.',
    url: 'https://himalyantrails.com/privacy-policy',
    type: 'website',
    images: [{ url: 'https://himalyantrails.com/images/og-privacy.jpg', alt: 'A lock icon symbolizing data privacy for Himalayan Trails.' }],
  },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Himalyan Trails Privacy Policy",
    "description": "Official Privacy Policy for Himalyan Trails trekking services.",
    "url": "https://himalyantrails.com/privacy-policy",
    "dateModified": new Date().toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "Himalyan Trails",
      "url": "https://himalyantrails.com",
    }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

        <main className="relative z-20 w-full flex-grow px-6 md:px-12 lg:px-20 py-20 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-300 text-transparent bg-clip-text leading-relaxed pb-2">
            {`Privacy Policy`}
          </h1>
          <p className="text-center text-sm text-slate-400 mb-12">
            {`Effective Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
          </p>
          <article className="prose prose-invert prose-slate max-w-full leading-relaxed text-slate-200 space-y-8">
            <h2>{`Introduction`}</h2>
            <p>{`This Privacy Policy (“Policy”) explains how `}<strong>Himalayan Trails</strong>{` (“Company,” “we,” “our,” or “us”) collects, uses, stores, and protects personal information of individuals who engage with our trekking services in Uttarakhand, India. By accessing our website or booking services, you expressly consent to the practices described herein.`}</p>
            
            <h2>{`1. Information We Collect`}</h2>
            <ul>
              <li>{`Personal identifiers such as full name, address, email, and phone number.`}</li>
              <li>{`Booking and payment details necessary to process reservations.`}</li>
              <li>{`Government-issued identification where legally required.`}</li>
              <li>{`Emergency contact information for safety during treks.`}</li>
              <li>{`Medical, dietary, and fitness details voluntarily shared for risk management.`}</li>
              <li>{`Device, browser, and IP data for analytics and fraud prevention.`}</li>
            </ul>

            <h2>{`2. Purpose of Data Use`}</h2>
            <p>{`We process your information solely for legitimate purposes, including but not limited to:`}</p>
            <ul>
              <li>{`Facilitating trek bookings and confirmations.`}</li>
              <li>{`Ensuring participant safety and compliance with trekking permits.`}</li>
              <li>{`Providing accommodation, transportation, and guided services.`}</li>
              <li>{`Processing secure payments through trusted gateways.`}</li>
              <li>{`Enhancing website performance and customer experience.`}</li>
              <li>{`Marketing Himalayan Trails updates (only if you consent).`}</li>
            </ul>

            <h2>{`3. Data Security Measures`}</h2>
            <p>{`Himalayan Trails employs industry-standard safeguards including SSL encryption, firewalls, role-based data access, and routine security audits. While we take all reasonable measures, no online system is entirely risk-free, and you acknowledge inherent risks of internet-based services.`}</p>
            
            <h2>{`4. Sharing & Disclosure`}</h2>
            <p>{`We do not sell or rent your data. Information may be disclosed only under the following limited circumstances:`}</p>
            <ul>
              <li>{`To trek leaders, porters, and support staff for operational requirements.`}</li>
              <li>{`To transport providers, lodging facilities, or local authorities as needed.`}</li>
              <li>{`To payment processors strictly for completing transactions.`}</li>
              <li>{`To comply with Indian laws, court orders, or legal obligations.`}</li>
            </ul>

            <h2>{`5. Retention of Data`}</h2>
            <p>{`Booking and payment data is securely retained for a minimum of 7 years in accordance with Indian tax and regulatory requirements. Marketing preferences are retained until you opt out. Medical information is deleted after your trek unless retention is necessary for compliance.`}</p>
            
            <h2>{`6. International Data Transfers`}</h2>
            <p>{`For international trekkers, your information may be transferred outside India under data protection safeguards compliant with GDPR, CCPA, and other relevant privacy laws.`}</p>
            
            <h2>{`7. Rights of Trekkers`}</h2>
            <p>{`Subject to applicable law, you may request to:`}</p>
            <ul>
              <li>{`Access a copy of the data we hold about you.`}</li>
              <li>{`Request corrections or updates to inaccurate information.`}</li>
              <li>{`Request deletion of your data, unless retention is legally required.`}</li>
              <li>{`Withdraw consent for marketing communications at any time.`}</li>
              <li>{`Restrict processing of your information where applicable.`}</li>
            </ul>

            <h2>{`8. Cookies and Analytics`}</h2>
            <p>{`Our website uses cookies and third-party analytics to improve navigation, measure traffic, and personalize user experience. You may disable cookies in your browser, though certain site features may not function as intended.`}</p>
            
            <h2>{`9. Children’s Privacy`}</h2>
            <p>{`Himalayan Trails does not knowingly collect personal data from individuals under 16. Bookings for minors must be completed by a parent or legal guardian.`}</p>
            
            <h2>{`10. Liability and Risk Disclaimer`}</h2>
            <p>{`Participation in trekking involves inherent risks. Himalayan Trails shall not be held liable for injuries, natural disasters, equipment failures, or actions of third-party service providers, except where mandated by Indian law.`}</p>
            
            <h2>{`11. Policy Updates`}</h2>
            <p>{`This Policy may be revised periodically without prior notice. Updated versions will carry a revised effective date. Continued use of our services constitutes acceptance of the updated terms.`}</p>

            <h2>{`Contact Information`}</h2>
            <address className="not-italic text-slate-300">
              <strong>Himalyan Trails</strong><br />
              Village Ontar, Uttarkashi, Uttarakhand, India<br />
              Phone: <a href="tel:+919879647742" className="underline hover:text-amber-400">+91 98796 47742</a><br />
              Email: <a href="mailto:ssemwal116@gmail.com" className="underline hover:text-amber-400">ssemwal116@gmail.com</a>
            </address>
          </article>
        </main>

        <footer className="w-full z-30">
          <Footer />
        </footer>
      </div>
    </>
  );
}