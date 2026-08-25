// ─── Supabase table types (snake_case, as stored in DB) ──────────────────
export interface BookingDb {
  id: string
  name: string
  email: string
  phone: string | null
  travel_date: string | null
  guests: number | null
  tour_name: string | null
  type: 'tour' | 'hotel' | 'other'
  requirements: string | null
  status: BookingStatus
  source: BookingSource
  notes: string | null
  created_at: string
  updated_at: string
  viewed_at: string | null
}

export type BookingStatus =
  | 'pending'
  | 'viewed'
  | 'contacted'
  | 'quoted'
  | 'confirmed'
  | 'in_progress'
  | 'completed'
  | 'cancelled'

export type BookingSource =
  | 'website'
  | 'whatsapp'
  | 'email'
  | 'phone'
  | 'ai_concierge'

export const STATUS_LABELS: Record<BookingStatus, string> = {
  pending: 'Pending',
  viewed: 'Viewed',
  contacted: 'Contacted',
  quoted: 'Quoted',
  confirmed: 'Confirmed',
  in_progress: 'In Progress',
  completed: 'Completed',
  cancelled: 'Cancelled',
}

export const SOURCE_LABELS: Record<BookingSource, string> = {
  website: 'Website Form',
  whatsapp: 'WhatsApp',
  email: 'Email',
  phone: 'Phone Call',
  ai_concierge: 'AI Concierge',
}

export const STATUS_ORDER: BookingStatus[] = [
  'pending', 'viewed', 'contacted', 'quoted', 'confirmed', 'in_progress', 'completed', 'cancelled',
]

// ─── Input types ──────────────────────────────────────────────────────────

export interface CreateBookingInput {
  name: string
  email: string
  phone?: string
  travelDate?: string
  guests?: string | number
  itemName?: string
  type?: 'tour' | 'hotel' | 'other'
  requirements?: string
  source?: 'website' | 'whatsapp' | 'email' | 'phone' | 'ai_concierge'
}

export interface UpdateBookingStatusInput {
  id: string
  status: BookingStatus
  note?: string
  changedBy?: string
}

// ─── Runtime types for the admin UI (camelCase, what the client sees) ──

export interface Booking {
  id: string
  name: string
  email: string
  phone: string | null
  travelDate: string | null
  guests: number | null
  tourName: string | null
  type: 'tour' | 'hotel' | 'other'
  requirements: string | null
  status: BookingStatus
  source: BookingSource
  notes: string | null
  createdAt: string
  updatedAt: string
  viewedAt: string | null
}

/**
 * Convert a Supabase row (snake_case) to the UI type (camelCase).
 */
export function toBooking(row: BookingDb): Booking {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    travelDate: row.travel_date,
    guests: row.guests,
    tourName: row.tour_name,
    type: row.type,
    requirements: row.requirements,
    status: row.status,
    source: row.source,
    notes: row.notes,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    viewedAt: row.viewed_at,
  }
}

// ─── Supabase table shape for type augmentation ───────────────────────────
// Used when creating typed Supabase clients: createClient<Database>(...)

export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: BookingDb
        Insert: Omit<BookingDb, 'id' | 'created_at' | 'updated_at' | 'viewed_at'> & {
          id?: string
          created_at?: string
          updated_at?: string
          viewed_at?: string | null
        }
        Update: Partial<Omit<BookingDb, 'id' | 'created_at'>>
      }
    }
    Views: Record<string, unknown>
    Functions: Record<string, unknown>
  }
}
