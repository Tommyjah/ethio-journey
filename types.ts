
export enum Language {
  EN = 'EN',
  AM = 'AM'
}

export interface TourItem {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  price: number;
  image: string;
  duration: string;
}

export interface FleetItem {
  id: string;
  model: string;
  brand: string;
  category: string;
  specs: string[];
  pricePerDay: number;
  image: string;
}

export interface ServiceItem {
  id: string;
  icon: 'car' | 'map' | 'bed';
  title: Record<Language, string>;
  description: Record<Language, string>;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export type BookingType = 'tour' | 'car' | 'hotel';

export interface HotelImage {
  url: string;
  alt: string;
  type: 'exterior' | 'bedroom' | 'gym' | 'pool' | 'restaurant' | 'lobby';
}

export interface HotelItem {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  pricePerNight: number;
  location: Record<Language, string>;
  rating: number;
  amenities: string[];
  images: HotelImage[];
  starRating: number;
  roomsAvailable: number;
  checkInTime: string;
  checkOutTime: string;
  featured: boolean;
}

export interface BookingState {
  isOpen: boolean;
  type: BookingType | null;
  itemId: string | null;
  itemName: string | null;
}
