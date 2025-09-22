// File: src/app/treks/uttarkashi-to-nag-tibba/page.js

import TrekDetailsNagTibba from "@/components/TrekDetailsNagTibba";
import Footer from "@/components/Footer";
import { GiBinoculars, GiPathDistance, GiCampfire, GiHorseHead, GiTreeBranch } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";

// --- Page-Specific Data ---
const trekData = {
    title: "Uttarkashi to Nag Tibba Trek",
    subtitle: "A Himalayan adventure with customizable pickup points, optional experiences, starry campsites, and unforgettable vistas.",
    videoSrc: "/videos/NagTibba.mp4"
};

const highlights = [
    { icon: <GiBinoculars size={28} />, title: "Breathtaking Panoramic Views", description: "Catch 180° vistas of Bandarpoonch, Swargarohini, Kedarkantha, and the Yamunotri ranges." },
    { icon: <GiPathDistance size={28} />, title: "Gentle Forest Trails", description: "Walk through oak, rhododendron, and deodar forests filled with Himalayan birds." },
    { icon: <GiCampfire size={28} />, title: "Starry Campsites", description: "Camp at Khatiyan and Nag Tibba base under some of the clearest Himalayan skies." },
    { icon: <MdRestaurantMenu size={28} />, title: "Fresh Local Cuisine", description: "Relish Garhwali meals, hot chai, and healthy snacks prepared daily by local cooks." },
    { icon: <GiHorseHead size={28} />, title: "Optional Horse Rides", description: "Enjoy scenic horse rides — great for kids, elders, or saving energy on climbs." },
    { icon: <GiTreeBranch size={28} />, title: "Wildlife & Flora", description: "Spot langurs, barking deer, Himalayan monals, and colorful wildflowers." }
];

const pickupLocations = [
    { title: "Uttarkashi", description: "Reliable road access, parking, and facilities. Perfect for groups arriving from Dehradun or Rishikesh." },
    { title: "Thathur", description: "Closest village to Nag Tibba trailhead, offering warm Garhwali hospitality and dawn views." },
    { title: "Onthar", description: "A peaceful point near terraced fields, ideal for authentic Himalayan experiences." }
];

const addOns = [
    { title: "Kedarkantha Extension", description: "Add a 2-day trek for more snowy peaks and alpine adventures." },
    { title: "Local Village Tour", description: "Experience Garhwali culture, traditional homes, and apple orchards." },
    { title: "Camping by Streams", description: "Enjoy riverside nights with campfires and Himalayan folk tales." }
];

const witnessItems = [
    "Snow-covered peaks like Bandarpoonch and Swargarohini",
    "Forests of oak, rhododendron, and deodar",
    "Rare wildlife including Himalayan monals and barking deer",
    "Stunning sunrises and sunsets from Nag Tibba top",
    "Star-lit skies and serene campsites"
];

const includedItems = [
    "Transport from your chosen pickup location",
    "All meals and refreshments",
    "Experienced guides and local support staff",
    "Camping gear and safety equipment",
    "First aid and emergency assistance",
    "Permit arrangements and trek documentation"
];

// --- SEO Metadata & Structured Data ---
export const metadata = {
  title: 'Nag Tibba Trek from Uttarkashi | Himalayan Trails',
  description: 'Join Himalayan Trails for the Nag Tibba Trek from Uttarkashi. Enjoy panoramic Himalayan views, oak forests, local Garhwali meals, starry campsites, and optional add-on experiences.',
  alternates: { canonical: 'https://himalyantrails.com/treks/uttarkashi-to-nag-tibba' },
  openGraph: {
    title: 'Nag Tibba Trek from Uttarkashi | Himalayan Trails',
    description: 'Book the Nag Tibba Trek with Himalayan Trails — panoramic views, wildlife spotting, starry nights, and authentic local cuisine.',
    images: [{ url: 'https://himalyantrails.com/images/nag-tibba-og.jpg' }],
  },
};

const jsonLd = { /* ... your structured data ... */ };

export default function NagTibbaPage() {
    return (
        <div className="flex flex-col min-h-screen relative">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <video
                className="fixed inset-0 w-full h-full object-cover z-0"
                src={trekData.videoSrc}
                autoPlay muted loop playsInline
                aria-label="A scenic video of the Nag Tibba trek trail"
            />
            <div className="fixed inset-0 bg-black/70 z-0" />
            
            <main className="flex-grow">
                {/* ✅ FIXED: All 6 props are now being passed correctly */}
                <TrekDetailsNagTibba 
                    trekData={trekData}
                    highlights={highlights} 
                    pickupLocations={pickupLocations}
                    addOns={addOns}
                    witnessItems={witnessItems}
                    includedItems={includedItems}
                />
            </main>

            <footer className="w-full z-30">
                <Footer />
            </footer>
        </div>
    )
}