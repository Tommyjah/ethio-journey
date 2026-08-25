'use server'

import { supabase } from '@/lib/supabase'
import { listMockBookings, findMockBooking, addMockBooking, removeMockBooking } from '@/lib/mock-bookings'
import type { Booking, BookingDb, BookingSource } from '@/lib/database'
import { revalidatePath } from 'next/cache'

// ─── Helpers ─────────────────────────────────────────────────────────────

const nowISO = () => new Date().toISOString()

// ─── Create Booking ──────────────────────────────────────────────────────

export async function createBooking(input: {
  name: string
  email: string
  phone?: string
  travelDate?: string
  guests?: string | number
  itemName?: string
  type?: string
  requirements?: string
  source?: string
}) {
  // Try Supabase first
  if (supabase) {
    const insertData = {
      name: input.name,
      email: input.email,
      phone: input.phone ?? null,
      travel_date: input.travelDate ?? null,
      guests: input.guests != null ? (typeof input.guests === 'string' ? parseInt(input.guests, 10) || null : input.guests) : null,
      tour_name: input.itemName ?? null,
      type: (input.type ?? 'other') as 'tour' | 'hotel' | 'other',
      requirements: input.requirements ?? null,
    source: (input.source ?? 'website') as BookingSource,
      status: 'pending',
      notes: null,
    }

    const { data, error } = await supabase
      .from('bookings')
      .insert(insertData as any)
      .select('id')
      .single()

    if (error || !data) {
      console.warn('[createBooking] Supabase insert failed, falling back to mock')
    } else {
      revalidatePath('/admin')
      return { success: true, id: (data as any).id }
    }
  }

  // Fallback: persist to in-memory mock store
  const mockBooking: Booking = {
    id: 'mock-' + Date.now(),
    name: input.name,
    email: input.email,
    phone: input.phone ?? null,
    travelDate: input.travelDate ?? null,
    guests: typeof input.guests === 'string' ? parseInt(input.guests, 10) : input.guests ?? null,
    tourName: input.itemName ?? null,
    type: (input.type ?? 'other') as 'tour' | 'hotel' | 'other',
    requirements: input.requirements ?? null,
    source: (input.source ?? 'website') as BookingSource,
    status: 'pending',
    notes: null,
    createdAt: nowISO(),
    updatedAt: nowISO(),
    viewedAt: null,
  }
  addMockBooking(mockBooking)
  revalidatePath('/admin')
  return { success: false, error: 'Supabase insert failed', id: mockBooking.id, warning: 'Booking saved locally (Supabase not reachable)' }
}

// ─── List Bookings ────────────────────────────────────────────────────────

export async function listBookings(opts?: {
  status?: string
  limit?: number
  offset?: number
}) {
  // When Supabase is not configured, fall back to mock data immediately
  if (!supabase) {
    const mock = listMockBookings()
    return { records: mock, total: mock.length }
  }

  let query = supabase
    .from('bookings')
    .select('*', { count: 'exact', head: false })

  if (opts?.status) {
    query = query.eq('status', opts.status)
  }

  query = query
    .order('created_at', { ascending: false })
    .limit(opts?.limit ?? 50)

  const { data, error, count } = await query

  if (error) {
    console.error('[listBookings] Supabase error:', error)
    return { error: error.message ?? 'Failed to fetch bookings' }
  }

  const raw = data as any[] | null
  const records = (raw ?? []).map((row) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    travelDate: row.travel_date,
    guests: row.guests,
    tourName: row.tour_name,
    type: row.type,
    requirements: row.requirements,
    source: row.source,
    status: row.status,
    notes: row.notes,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }))

  return { records, total: count ?? records.length }
}

// ─── Get Single Booking ──────────────────────────────────────────────────

export async function getBooking(id: string) {
  // Fall back to mock data when Supabase is not configured
  if (!supabase) {
    const mock = findMockBooking(id)
    if (mock) {
      return { record: mock }
    }
    return { error: 'Booking not found' }
  }

  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !data) {
    return { error: error?.message ?? 'Booking not found' }
  }

  return {
    record: {
      id: (data as any).id,
      name: (data as any).name,
      email: (data as any).email,
      phone: (data as any).phone,
      travelDate: (data as any).travel_date,
      guests: (data as any).guests,
      tourName: (data as any).tour_name,
      type: (data as any).type,
      requirements: (data as any).requirements,
      source: (data as any).source,
      status: (data as any).status,
      notes: (data as any).notes,
      createdAt: (data as any).created_at,
      updatedAt: (data as any).updated_at,
    },
  }
}

// ─── Update Status ────────────────────────────────────────────────────────

export async function updateBookingStatus(id: string, status: string, note?: string) {
  if (!supabase) {
    const mock = findMockBooking(id)
    if (!mock) {
      return { success: false, error: 'Booking not found' }
    }
    mock.status = status as Booking['status']
    if (note) {
      mock.notes = mock.notes ? `${mock.notes}\n${note}` : note
    }
    mock.updatedAt = nowISO()
    return { success: true }
  }

  const { data: existing } = await supabase
    .from('bookings')
    .select('status, notes')
    .eq('id', id)
    .single()

  if (!existing) {
    return { success: false, error: 'Booking not found' }
  }

  const existingNotes = (existing as any).notes ?? ''

  const { error } = await supabase
    .from('bookings')
    .update({
      status,
      notes: note ? (existingNotes ? `${existingNotes}\n${note}` : note) : existingNotes,
      updated_at: nowISO(),
    })
    .eq('id', id)

  if (error) {
    console.error('[updateBookingStatus] Supabase error:', error)
    return { success: false, error: error.message ?? 'Failed to update status' }
  }

  revalidatePath('/admin')
  return { success: true }
}

// ─── Add Notes ────────────────────────────────────────────────────────────

export async function addNotes(id: string, notes: string) {
  if (!supabase) {
    const mock = findMockBooking(id)
    if (!mock) {
      return { success: false, error: 'Booking not found' }
    }
    mock.notes = notes
    mock.updatedAt = nowISO()
    return { success: true }
  }

  const { error } = await supabase
    .from('bookings')
    .update({ notes, updated_at: nowISO() })
    .eq('id', id)

  if (error) {
    return { success: false, error: error.message ?? 'Failed to update notes' }
  }

  revalidatePath('/admin')
  return { success: true }
}

// ─── Delete Booking ──────────────────────────────────────────────────────

export async function deleteBooking(id: string) {
  if (!supabase) {
    const mock = findMockBooking(id)
    if (!mock) {
      return { success: false, error: 'Booking not found' }
    }
    removeMockBooking(id)
    return { success: true }
  }

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('[deleteBooking] Supabase error:', error)
    return { success: false, error: error.message ?? 'Failed to delete booking' }
  }

  revalidatePath('/admin')
  return { success: true }
}
