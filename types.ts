
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

export type BookingType = 'tour' | 'car';

export interface BookingState {
  isOpen: boolean;
  type: BookingType | null;
  itemId: string | null;
  itemName: string | null;
}
