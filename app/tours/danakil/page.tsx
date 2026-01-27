'use client';

import TourDetailLayout from '@/components/TourDetailLayout';

// In Next.js Client Components, we don't necessarily need the params 
// unless we are doing dynamic routing. For a static file, keep it simple:
export default function DanakilTour() {
  const content = {
    title: "Danakil: The Alien Frontier",
    location: "Afar Region",
    duration: "4 Days / 3 Nights",
    description: "Journey to the hottest place on Earth. A surreal landscape of bubbling sulfur springs, vast salt pans, and the glowing lava lake of Erta Ale.",
    highlights: [
      "Witness the neon-colored hydrothermal fields of Dallol",
      "Night trek to the rim of Erta Ale active volcano",
      "Visit the crystalline salt flats of Lake Assal",
      "Observe the ancient Afar salt caravans"
    ],
    itinerary: [
      { day: 1, title: "Gateway to the Abyss", desc: "Fly to Semera and drive to the salt-crusted shores of Lake Afdera." },
      { day: 2, title: "The Fire Mountain", desc: "Drive to Dodom and trek to the summit of Erta Ale to witness molten lava." },
      { day: 3, title: "Neon Landscapes", desc: "Explore the surreal yellow and green sulfur springs of Dallol." },
      { day: 4, title: "Return to Civilisation", desc: "Visit the salt canyons before flying back to Addis Ababa." }
    ],
    images: ["/images/danakil-1.jpg", "/images/danakil-2.jpg"]
  };

  // Remove language={params.lang} because the Layout handles language internally
  return <TourDetailLayout content={content} />;
}