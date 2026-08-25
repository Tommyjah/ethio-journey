/** Mock data for local development / testing when Supabase is not configured. */

import type { Booking, BookingStatus, BookingSource } from '@/lib/database'

export const mockBookings: Booking[] = [
  {
    id: '018a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c',
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@example.com',
    phone: '+251****3456',
    travelDate: '2026-09-15',
    guests: 2,
    tourName: 'Lalibela Heritage Tour',
    type: 'tour',
    requirements: 'We are celebrating our anniversary. Looking for a private guide and sunset viewing of the churches.',
    status: 'pending',
    source: 'website',
    notes: null,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    viewedAt: null,
  },
  {
    id: '018a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4d',
    name: 'James Okonkwo',
    email: 'james.o@luxemail.com',
    phone: '+251****7890',
    travelDate: '2026-10-02',
    guests: 4,
    tourName: 'Danakil Luxury Camp',
    type: 'tour',
    requirements: 'Family trip with teenagers. Need helicopter access confirmed. Budget flexible.',
    status: 'viewed',
    source: 'website',
    notes: 'High-value inquiry. Follow up within 24h.',
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    viewedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '018a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4e',
    name: 'Aisha Hassan',
    email: 'aisha.travels@gmx.com',
    phone: '+251****4567',
    travelDate: '2026-11-10',
    guests: 1,
    tourName: null,
    type: 'other',
    requirements: 'Interested in custom itinerary. Contact me to discuss options.',
    status: 'contacted',
    source: 'whatsapp',
    notes: 'Spoke on WhatsApp. She wants a 7-day mix of history and nature. Price quote pending.',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
    viewedAt: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '018a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4f',
    name: 'David Chen',
    email: 'david.chen@outlook.com',
    phone: '+251****7654',
    travelDate: '2026-09-28',
    guests: 2,
    tourName: 'Simien Highlands Escape',
    type: 'tour',
    requirements: 'Photography-focused trip. Need a guide who knows the Gelada baboon locations.',
    status: 'quoted',
    source: 'ai_concierge',
    notes: 'Quote of $3,200 sent via email 2026-08-18. Awaiting confirmation.',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    viewedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '018a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b50',
    name: 'Emma Larsson',
    email: 'emma.larsson@proton.me',
    phone: '+467****4567',
    travelDate: '2026-12-05',
    guests: 2,
    tourName: 'Lalibela Heritage Tour',
    type: 'tour',
    requirements: 'Honeymoon trip. Private accommodation, romantic dinner arrangements, photographers preferred.',
    status: 'confirmed',
    source: 'website',
    notes: 'Deposit received 50%. Balance due 30 days before travel.',
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    viewedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '018a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b51',
    name: 'Robert Mensah',
    email: 'robert.mensah@email.com',
    phone: '+233****4567',
    travelDate: '2026-09-01',
    guests: 6,
    tourName: 'Gorgora: Lake Tana Port',
    type: 'tour',
    requirements: 'Group tour with 6 people. Need a vehicle that fits 6 passengers comfortably.',
    status: 'in_progress',
    source: 'phone',
    notes: 'Trip scheduled for September 1st. Vehicles and guides confirmed.',
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    viewedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '018a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b52',
    name: 'Layla Abdi',
    email: 'layla.abdi@gmail.com',
    phone: '+251****5666',
    travelDate: '2026-07-20',
    guests: 3,
    tourName: 'Harar: The Walled City',
    type: 'tour',
    requirements: 'Cultural tour of Harar. Interested in the hyena man phenomena and historical mosques.',
    status: 'completed',
    source: 'website',
    notes: 'Tour completed successfully on 2026-07-20. Left 5-star review on WhatsApp.',
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    viewedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '018a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b53',
    name: 'Thomas Keller',
    email: 'thomas.k@business.com',
    phone: '+121****1234',
    travelDate: null,
    guests: null,
    tourName: null,
    type: 'other',
    requirements: 'Interested in corporate retreat options for a delegation of 15. Need bulk quote.',
    status: 'cancelled',
    source: 'email',
    notes: 'Never responded after initial contact. Marked as cancelled after 14 days of no reply.',
    createdAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    viewedAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '018a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b54',
    name: 'Nadia Fikre',
    email: 'nadia.fikre@ethiojet.com',
    phone: '+251****4321',
    travelDate: '2026-10-15',
    guests: 1,
    tourName: 'Beyouna & Entoto',
    type: 'tour',
    requirements: 'Solo trip focusing on Addis Ababa. Want a day tour of Entoto and Beyouna. Budget conscious.',
    status: 'pending',
    source: 'website',
    notes: 'Sent WhatsApp follow-up 2026-08-15. No reply yet after 5 days.',
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    viewedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
]

/** Return mock bookings as the listBookings result shape */
export function listMockBookings(): Booking[] {
  return mockBookings
}

/** Find a single mock booking by ID */
export function findMockBooking(id: string): Booking | undefined {
  return mockBookings.find(b => b.id === id)
}

/** Add a new booking to the mock store (used when Supabase is unavailable) */
export function addMockBooking(booking: Booking): Booking {
  mockBookings.unshift(booking)
  return booking
}

/** Remove a mock booking by ID */
export function removeMockBooking(id: string): boolean {
  const idx = mockBookings.findIndex(b => b.id === id)
  if (idx >= 0) {
    mockBookings.splice(idx, 1)
    return true
  }
  return false
}

export type { Booking, BookingStatus, BookingSource } from '@/lib/database'
export { STATUS_LABELS, SOURCE_LABELS, STATUS_ORDER } from '@/lib/database'
