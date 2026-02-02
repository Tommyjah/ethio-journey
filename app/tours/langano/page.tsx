'use client';

import TourDetailLayout from '@/components/TourDetailLayout';

export default function LanganoTour() {
  const content = {
    title: "Langano: Golden Sands Escape",
    location: "Rift Valley",
    duration: "2 Days / 1 Night",
    description: "The ultimate weekend retreat. Ethiopia's only swimmable lake, famous for its copper-colored waters and luxury beach resorts.",
    highlights: [
      "Unwind at Sabana Beach Resort or Bishangari Eco-Lodge",
      "Water sports including kayaking and motorboating",
      "Wildlife spotting in Abijatta-Shalla National Park",
      "Evening bonfire and traditional coffee ceremonies on the beach"
    ],
    itinerary: [
      { day: 1, title: "Rift Valley Drive", desc: "Scenic drive from Addis with a stop at Lake Ziway. Afternoon beach relaxation." },
      { day: 2, title: "Hot Springs & Flamingos", desc: "Morning visit to the Shalla hot springs and flamingo colonies before returning." }
    ],
    images: ["/images/tour_langano2.jpg", "/images/tour_langano.jpg"]
  };

  return <TourDetailLayout content={content} />;
}