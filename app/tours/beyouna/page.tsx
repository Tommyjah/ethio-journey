'use client';

import TourDetailLayout from '@/components/TourDetailLayout';

export default function BeyounaTour() {
  const content = {
    title: "Beyouna: The Urban Sanctuary",
    location: "Addis Ababa",
    duration: "Full Day",
    description: "A curation of the capital’s most prestigious modern landmarks, from the Eucalyptus forests of Entoto to the Imperial grandeur of Unity Park.",
    highlights: [
      "VIP tour of Unity Park and the Grand Palace",
      "Lunch at the Beynouna Village Eco-Lodge in Entoto",
      "Panoramic views of Addis Ababa from 3,200m altitude",
      "Adventure activities (Ziplining) or Spa relaxation in the forest"
    ],
    itinerary: [
      { day: 1, title: "Addis Reimagined", desc: "Morning exploration of the Palace. Afternoon forest retreat at Beyouna for lunch and relaxation." }
    ],
    images: ["/images/tour-beynouna2.jpg", "/images/tour-beynouna1.jpg"]
  };

  return <TourDetailLayout content={content} />;
}