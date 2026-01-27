
import { Language, TourItem, FleetItem, ServiceItem } from './types';

export const LOCALIZATION: Record<Language, any> = {
  [Language.EN]: {
    navHome: "Home",
    navTours: "Expeditions",
    navFleet: "The Fleet",
    navAbout: "Our Legacy",
    heroTitle: "Ethiopia Refined",
    heroSubtitle: "Experience the cradle of civilization through the lens of absolute luxury.",
    heroPlaceholder: "Plan a private tour to Lalibela for 3 days...",
    heroCTA: "Start My Journey",
    toursTitle: "Signature Expeditions",
    fleetTitle: "Ethio Journey Fleet",
    bookNow: "Reserve Now",
    perDay: "/ day",
    amharic: "አማርኛ",
    english: "English",
    aiTitle: "AI Concierge",
    aiPlaceholder: "Ask about our fleet or destinations...",
    bookingTitle: "Secure Reservation",
    paymentTitle: "Gateway Transfer",
    confirmTitle: "Booking Confirmed",
    servicesTitle: "Curated Excellence",
    servicesSubtitle: "Unrivaled Luxury Services"
  },
  [Language.AM]: {
    navHome: "መነሻ",
    navTours: "ጉዞዎች",
    navFleet: "ተሽከርካሪዎች",
    navAbout: "ስለ እኛ",
    heroTitle: "የተመረጠች ኢትዮጵያ",
    heroSubtitle: "የስልጣኔ መገኛ የሆነችውን ኢትዮጵያን በልዩ የቅንጦት ሁኔታ ይለማመዱ።",
    heroPlaceholder: "ወደ ላሊበላ የ3 ቀን የቅንጦት ጉዞ አቅድልኝ...",
    heroCTA: "ጉዞዬን ጀምር",
    toursTitle: "ታዋቂ የጉብኝት ቦታዎች",
    fleetTitle: "የኢትዮ ጆርኒ ተሽከርካሪዎች",
    bookNow: "አሁን ይያዙ",
    perDay: "/ በቀን",
    amharic: "አማርኛ",
    english: "English",
    aiTitle: "ረዳት",
    aiPlaceholder: "ስለ ተሽከርካሪዎቻችን ወይም ቦታዎች ይጠይቁ...",
    bookingTitle: "ቦታ ማስያዝ",
    paymentTitle: "ክፍያ መፈጸሚያ",
    confirmTitle: "ቦታ ተይዟል",
    servicesTitle: "ልዩ አገልግሎቶች",
    servicesSubtitle: "የላቀ የቅንጦት አገልግሎት"
  }
};

export const TOURS: TourItem[] = [
  {
    id: 't1',
    name: { [Language.EN]: "Danakil Luxury Camp", [Language.AM]: "ዳናኪል የቅንጦት ካምፕ" },
    description: { [Language.EN]: "Private luxury tents in the Dallol depression. Experience fire and salt with exclusive helicopter access.", [Language.AM]: "በዳሎል ዝቅተኛ ቦታ በግል የቅንጦት ድንኳኖች የሚደረግ ጉዞ።" },
    price: 4500,
    image: "/images/tour-danakill.jpg",
    duration: "4 Days"
  },
  {
    id: 't2',
    name: { [Language.EN]: "Simien Highlands Escape", [Language.AM]: "የስሜን ተራራዎች ጉብኝት" },
    description: { [Language.EN]: "High-altitude luxury at Limalimo Lodge with private wildlife guides.", [Language.AM]: "በሊማሊሞ ሎጅ የሚደረግ የቅንጦት ቆይታ።" },
    price: 3200,
    image: "/images/tour-semeinwalia3.jpg",
    duration: "5 Days"
  },
  {
    id: 't3',
    name: { [Language.EN]: "Lalibela Heritage Tour", [Language.AM]: "የላሊበላ ቅርሶች ጉብኝት" },
    description: { [Language.EN]: "Private access to the rock-hewn churches with expert liturgical scholars.", [Language.AM]: "የላሊበላ አብያተ ክርስቲያናት ጉብኝት በልዩ ምሁራን።" },
    price: 2800,
    image: "/images/tour-lal.jpg",
    duration: "3 Days"
  }
];

export const FLEET: FleetItem[] = [
  {
    id: 'f1',
    model: "G63 AMG Brabus",
    brand: "Mercedes-Benz",
    category: "SUV",
    specs: ["Armored B6", "Private WiFi", "Personal Chauffeur"],
    pricePerDay: 850,
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1000"
  },
  {
    id: 'f2',
    model: "Land Cruiser 300 VXR",
    brand: "Toyota",
    category: "Off-Road",
    specs: ["4x4 Turbo", "Fridge", "Satellite Comms"],
    pricePerDay: 550,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000"
  },
  {
    id: 'f3',
    model: "LX 600 Executive",
    brand: "Lexus",
    category: "Sedan/SUV",
    specs: ["Massage Seats", "Privacy Partition", "Ultra-Quiet Cabin"],
    pricePerDay: 750,
    image: "https://images.unsplash.com/photo-1634608301721-a0833215278c?q=80&w=1000"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    icon: 'car',
    title: { [Language.EN]: "Bespoke Logistics", [Language.AM]: "ልዩ የትራንስፖርት አገልግሎት" },
    description: { [Language.EN]: "Elite car rentals with professional security detail and diplomatic protocols.", [Language.AM]: "የላቁ ተሽከርካሪዎች ኪራይ ከጥበቃ ጋር።" },
    imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000"
  },
  {
    id: 's2',
    icon: 'map',
    title: { [Language.EN]: "Curated Expeditions", [Language.AM]: "ልዩ ጉዞዎች" },
    description: { [Language.EN]: "Private helicopter tours and access to restricted heritage sites.", [Language.AM]: "የግል ሄሊኮፕተር ጉብኝቶች።" },
    imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1000"
  },
  {
    id: 's3',
    icon: 'bed',
    title: { [Language.EN]: "Regal Hospitality", [Language.AM]: "የላቀ መስተንግዶ" },
    description: { [Language.EN]: "VIP bookings for the finest suites and private lodges in Ethiopia.", [Language.AM]: "በሀገሪቱ ውስጥ ያሉ ምርጥ ማረፊያዎችን ማዘጋጀት።" },
    imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000"
  }
];
