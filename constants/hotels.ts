import { Language, HotelItem } from '@/types';

export const HOTELS: HotelItem[] = [
  {
    id: 'hilton-addis',
    name: {
      [Language.EN]: 'Hilton Addis Ababa',
      [Language.AM]: 'ሂልተን አዲስ አበባ'
    },
    description: {
      [Language.EN]: 'Experience world-class luxury at Hilton Addis Ababa, located in the heart of the city. Our 5-star hotel offers stunning views, exceptional service, and modern amenities for both business and leisure travelers.',
      [Language.AM]: 'በከተማው መሬት ላይ የሚገኘውን ሂልተን አዲስ አበባ የሚከተለውን ዓለም አንደ ደረጃ ልዩ ልምምድ ይቀላቀሉ። የ5 ስታር ሆቴል እኛ የሚያቀርቡትን የአለም አንደ ደረጃ አገልግሎት እና አዳዲስ አገልግሎቶች ይሰጣል።'
    },
    pricePerNight: 350,
    location: {
      [Language.EN]: 'Bole Road, Addis Ababa',
      [Language.AM]: 'ቦሌ ጎንዝ, አዲስ አበባ'
    },
    rating: 4.8,
    amenities: ['Swimming Pool', 'Gym', 'Restaurant', 'Bar', 'Spa', 'Free WiFi', 'Room Service', 'Business Center'],
    images: [
      { url: '/images/hotels/hiltonhotel.jpg', alt: 'Hilton Addis Ababa Exterior', type: 'exterior' },
      { url: '/images/hotels/hiltonbedroom.jpg', alt: 'Hilton Addis Ababa Bedroom', type: 'bedroom' },
      { url: '/images/hotels/hilton-gym.jpg', alt: 'Hilton Addis Ababa Gym', type: 'gym' },
      { url: '/images/hotels/hiltonpool.jpg', alt: 'Hilton Addis Ababa Swimming Pool', type: 'pool' },
      { url: '/images/hotels/hilton-restaurant.jpg', alt: 'Hilton Addis Ababa Restaurant', type: 'restaurant' },
      { url: '/images/hotels/hilton-lobby.jpg', alt: 'Hilton Addis Ababa Lobby', type: 'lobby' }
    ],
    starRating: 5,
    roomsAvailable: 45,
    checkInTime: '14:00',
    checkOutTime: '12:00',
    featured: true
  },
  {
    id: 'sheraton-addis',
    name: {
      [Language.EN]: 'Sheraton Addis',
      [Language.AM]: 'ሼራቶን አዲስ'
    },
    description: {
      [Language.EN]: 'Discover Ethiopian luxury at Sheraton Addis, featuring spacious rooms, lush gardens, and the famous Spa and Health Club. Perfect for both business conferences and leisure getaways.',
      [Language.AM]: 'በሼራቶን አዲስ የኢትዮጵያ ልዩ ልምምድን ያግኙ። ትልቅ ክፍል ክፍል ልምምድ, አረንጓዴ አከባቢ እና ትዳርሰውን ስፓ እና ህክምና ስፓ ይገኛሉ። ለንግድ ጉባኤዎች እና ስለ ወደኛዎት ጉዞዎች በጣም ጥሩ ነው።'
    },
    pricePerNight: 420,
    location: {
      [Language.EN]: 'Menelik II Avenue, Addis Ababa',
      [Language.AM]: 'መኒሊክ II አቨኩ ርስት, አዲስ አበባ'
    },
    rating: 4.9,
    amenities: ['Swimming Pool', 'Gym', 'Spa', 'Restaurant', 'Bar', 'Free WiFi', 'Room Service', 'Business Center', 'Conference Hall'],
    images: [
      { url: '/images/hotels/sheraton-exterior.jpg', alt: 'Sheraton Addis Exterior', type: 'exterior' },
      { url: '/images/hotels/sheratonroom.jpg', alt: 'Sheraton Addis Bedroom', type: 'bedroom' },
      { url: '/images/hotels/sheraton-gym.jpg', alt: 'Sheraton Addis Gym', type: 'gym' },
      { url: '/images/hotels/sheraton-pool.jpg', alt: 'Sheraton Addis Swimming Pool', type: 'pool' },
      { url: '/images/hotels/sheraton-restaurant.jpg', alt: 'Sheraton Addis Restaurant', type: 'restaurant' },
      { url: '/images/hotels/sheraton-lobby.jpg', alt: 'Sheraton Addis Lobby', type: 'lobby' }
    ],
    starRating: 5,
    roomsAvailable: 32,
    checkInTime: '14:00',
    checkOutTime: '12:00',
    featured: true
  },
  {
    id: 'radisson-blue-addis',
    name: {
      [Language.EN]: 'Radisson Blu Hotel Addis Ababa',
      [Language.AM]: 'ራዲሶን ብሉ ሆቴል አዲስ አበባ'
    },
    description: {
      [Language.EN]: 'Radisson Blu Hotel Addis Ababa offers contemporary accommodation with panoramic city views. Enjoy our rooftop pool, fitness center, and excellent dining options.',
      [Language.AM]: 'ራዲሶን ብሉ ሆቴል አዲስ አበባ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ'
    },
    pricePerNight: 280,
    location: {
      [Language.EN]: 'Bole International Airport Area',
      [Language.AM]: 'ቦሌ ዓለም አቀፍ አውራጃ'
    },
    rating: 4.7,
    amenities: ['Swimming Pool', 'Gym', 'Restaurant', 'Bar', 'Spa', 'Free WiFi', 'Room Service', 'Business Center', 'Airport Transfer'],
    images: [
      { url: '/images/hotels/radissonbluhotel.jpg', alt: 'Radisson Blu Exterior', type: 'exterior' },
      { url: '/images/hotels/radissonbedroom.jpg', alt: 'Radisson Blu Bedroom', type: 'bedroom' },
      { url: '/images/hotels/radisson-gym.jpg', alt: 'Radisson Blu Gym', type: 'gym' },
      { url: '/images/hotels/radisson-pool.jpg', alt: 'Radisson Blu Swimming Pool', type: 'pool' },
      { url: '/images/hotels/radisson-restaurant.jpg', alt: 'Radisson Blu Restaurant', type: 'restaurant' },
      { url: '/images/hotels/radisson-lobby.jpg', alt: 'Radisson Blu Lobby', type: 'lobby' }
    ],
    starRating: 4,
    roomsAvailable: 50,
    checkInTime: '14:00',
    checkOutTime: '12:00',
    featured: true
  }
];