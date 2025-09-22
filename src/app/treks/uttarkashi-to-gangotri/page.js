// File: src/app/treks/uttarkashi-to-gangotri/page.js

import TrekDetailsGangotri from "@/components/TrekDetailsGangotri";
import Footer from "@/components/Footer";
import { GiBinoculars, GiPathDistance, GiCampfire, GiWaterfall, GiMountainCave } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";

// --- Page-Specific Data ---
const trekData = {
    title: "Gangotri Gaumukh Trek",
    subtitle: "A transformative journey from the sacred town of Gangotri to the source of the Ganga River.",
    videoSrc: "/videos/Gangotri.mp4"
};

const highlights = [
    { icon: <GiBinoculars size={28} />, title: "Incredible Himalayan Vistas", description: "Gaze at Shivling Peak, Meru, and Bhagirathi Massif towering above the sacred valley." },
    { icon: <GiPathDistance size={28} />, title: "Sacred Pilgrimage Route", description: "Walk the ancient trail to Gaumukh, the revered origin of the Ganga River." },
    { icon: <GiCampfire size={28} />, title: "Riverside Camping", description: "Camp beside the Bhagirathi River with the soothing sounds of glacial streams." },
    { icon: <MdRestaurantMenu size={28} />, title: "Authentic Garhwali Meals", description: "Relish freshly cooked vegetarian dishes and energizing snacks." },
    { icon: <GiWaterfall size={28} />, title: "Spectacular Waterfalls", description: "Marvel at hidden waterfalls cascading down rocky cliffs along the trail." },
    { icon: <GiMountainCave size={28} />, title: "Ancient Temples & Caves", description: "Explore the sacred Gangotri Temple and nearby meditation caves." }
];

const pickupLocations = [
    { title: "Uttarkashi", description: "Our main base for acclimatization and preparation. All trekkers will be picked up here before proceeding to Gangotri." }
];

const addOns = [
    { title: "Tapovan", description: "A high-altitude meadow with spectacular views of Shivling Peak." },
    { title: "Bhojwasa", description: "The classic riverside campsite en route to Gaumukh." },
    { title: "Harsil Valley", description: "Extend your trip to explore apple orchards, waterfalls, and picturesque villages." }
];

const witnessItems = [
    "Majestic glaciers at Gaumukh, the source of the Ganga",
    "Shivling, Meru, and Bhagirathi Peaks up close",
    "Alpine meadows and ancient cedar forests",
    "Rare Himalayan wildlife like blue sheep and lammergeiers",
    "Sacred sites and meditation caves",
    "Pristine riverside campsites under starry skies"
];

const includedItems = [
    "Transport from your chosen pickup point",
    "All meals and refreshments",
    "Experienced guides and support staff",
    "Camping equipment and safety gear",
    "First aid and emergency assistance",
    "Permit arrangements and documentation help"
];

// --- SEO Metadata & Structured Data ---
export const metadata = {
  title: 'Gangotri Gaumukh Trek | Himalayan Trails',
  description: 'Join the Gangotri Gaumukh Trek with Himalayan Trails. Experience Shivling Peak, glaciers at Gaumukh, sacred temples, waterfalls, and pristine riverside camping.',
  alternates: { canonical: 'https://himalyantrails.com/treks/uttarkashi-to-gangotri' },
  openGraph: {
    title: 'Gangotri Gaumukh Trek | Himalayan Trails',
    description: 'A transformative journey from the sacred town of Gangotri to the source of the Ganga River.',
    images: [{ url: 'https://himalyantrails.com/images/gangotri-og.jpg' }],
  },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TouristTrip",
            "name": "Gangotri Gaumukh Trek",
            "description": "A transformative journey from the sacred town of Gangotri to the source of the Ganga River with Himalayan Trails.",
            "image": "https://himalyantrails.com/images/gangotri-trek.jpg",
            "provider": { "@type": "Organization", "name": "Himalyan Trails" },
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://himalyantrails.com" },
                { "@type": "ListItem", "position": 2, "name": "Treks", "item": "https://himalyantrails.com/#treks" },
                { "@type": "ListItem", "position": 3, "name": "Gangotri Gaumukh Trek" }
            ]
        }
    ]
};

export default function GangotriTrekPage() {
    return (
        <div className="flex flex-col min-h-screen relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <video
                className="fixed inset-0 w-full h-full object-cover z-0"
                src={trekData.videoSrc}
                autoPlay muted loop playsInline
                aria-label="A scenic video of the Gangotri trek trail"
            />
            <div className="fixed inset-0 bg-black/70 z-0" />
            
            <main className="flex-grow">
                <TrekDetailsGangotri 
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