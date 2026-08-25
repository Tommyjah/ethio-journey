import { NextRequest, NextResponse } from 'next/server'
import { validateAdminSession } from '@/lib/auth'
import {
  listBookings,
  getBooking,
  updateBookingStatus,
  addNotes,
  deleteBooking,
  createBooking,
} from '@/app/actions/bookings.server'

// ─── GET /api/bookings — list all or get single booking ──────────────────

export async function GET(request: NextRequest) {
  if (!(await validateAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') ?? ''

  // Single booking detail
  if (id) {
    const result = await getBooking(id)
    if ('error' in result) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }
    return NextResponse.json({ booking: result.record })
  }

  // List all bookings
  const status = searchParams.get('status') ?? null
  const limit = parseInt(searchParams.get('limit') ?? '100', 10)
  const offset = parseInt(searchParams.get('offset') ?? '0', 10)

  const result = await listBookings({ status, limit, offset })

  if ('error' in result) {
    return NextResponse.json({ error: result.error }, { status: 500 })
  }

  return NextResponse.json({ bookings: result.records, total: result.total })
}

// ─── PATCH /api/bookings/:id — update status ────────────────────────────

export async function PATCH(request: NextRequest) {
  if (!(await validateAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') ?? ''
  if (!id) {
    return NextResponse.json({ error: 'Missing booking id' }, { status: 400 })
  }

  const body = await request.json().catch(() => ({}))
  const status = body.status as string

  if (!status) {
    return NextResponse.json({ error: 'Missing status' }, { status: 400 })
  }

  const result = await updateBookingStatus(id, status, body.note as string | undefined)

  if ('error' in result) {
    return NextResponse.json({ error: result.error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

// ─── PUT /api/bookings/:id/note — add notes ────────────────────────────

export async function PUT(request: NextRequest) {
  if (!(await validateAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') ?? ''
  if (!id) {
    return NextResponse.json({ error: 'Invalid endpoint' }, { status: 400 })
  }

  const body = await request.json().catch(() => ({}))
  const note = body.note as string

  if (!note) {
    return NextResponse.json({ error: 'Missing note' }, { status: 400 })
  }

  const result = await addNotes(id, note)

  if ('error' in result) {
    return NextResponse.json({ error: result.error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

// ─── DELETE /api/bookings/:id — delete a booking ────────────────────────

export async function DELETE(request: NextRequest) {
  if (!(await validateAdminSession())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') ?? ''
  if (!id) {
    return NextResponse.json({ error: 'Missing booking id' }, { status: 400 })
  }

  const result = await deleteBooking(id)

  if ('error' in result) {
    return NextResponse.json({ error: result.error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}