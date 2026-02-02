'use client';

import TourDetailLayout from '@/components/TourDetailLayout';

export default function GorgoraTour() {
  const content = {
    title: "Gorgora: The Riviera of Tana",
    location: "North Gondar",
    duration: "2 Days / 1 Night",
    description: "The northern port of Lake Tana, Gorgora offers a serene Mediterranean-like climate combined with centuries of Orthodox history.",
    highlights: [
      "Exclusive stay at the new Gorgora Eco-Resort",
      "Explore the 17th-century Debre Sina Maryam monastery",
      "Lakeside bird watching and luxury boat cruises",
      "Visit the ruins of the Portuguese Cathedral"
    ],
    itinerary: [
      { day: 1, title: "Waterfront Serenity", desc: "Drive from Gondar to Gorgora. Afternoon spent exploring the resort’s private beach." },
      { day: 2, title: "Ancient Echoes", desc: "Morning boat tour to hidden island monasteries and a visit to Susenyos' Palace." }
    ],
    images: ["/images/tour_gorgora1.jpg", "/images/gorgora-2.jpg"]
  };

  return <TourDetailLayout content={content} />;
}