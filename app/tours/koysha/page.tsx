'use client';

import TourDetailLayout from '@/components/TourDetailLayout';

export default function KoyshaTour() {
  const content = {
    title: "Koysha: The Green Majesty",
    location: "Southwest Ethiopia",
    duration: "3 Days / 2 Nights",
    description: "Hidden within the Dawro mountains, Koysha represents the future of Ethiopian eco-tourism. Stay at the prestigious Halala Kella Resort overlooking the Gibe III reservoir.",
    highlights: [
      "Stay at the architecturally stunning Halala Kella Eco-Lodge",
      "Boat expeditions on the expansive Gibe reservoir",
      "Visit the historic Halala Walls (The Great Wall of Ethiopia)",
      "Elephant tracking in the nearby Chebera Churchura National Park"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Paradise", desc: "Charter flight to the Koysha strip followed by a luxury boat transfer to the lodge." },
      { day: 2, title: "The Dawro Heritage", desc: "Guided hike to the historic stone fortifications and sundowners on the sunset deck." },
      { day: 3, title: "Wildlife Encounter", desc: "Morning safari in Chebera Churchura before returning to Addis." }
    ],
    images: ["/images/koysha-1.jpg", "/images/koysha-2.jpg"]
  };

  return <TourDetailLayout content={content} />;
}