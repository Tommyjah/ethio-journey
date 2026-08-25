'use server'

import { createBooking } from '@/app/actions/bookings.server'
import { Resend } from 'resend'

// ─── Helpers ─────────────────────────────────────────────────────────────

const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const validatePhone = (phone: string) =>
  /^(?:\+251|0)[1-9]\d{8}$/.test(phone)

// ─── Send Inquiry (persist to Supabase + send email) ──────────────────────

const resendClient = new Resend(process.env.RESEND_API_KEY)

const simpleEmailTemplate = (data: Record<string, unknown>) => `
  <h1>New Booking Request</h1>
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
  ${data.travelDate ? `<p><strong>Date:</strong> ${data.travelDate}</p>` : ''}
  ${data.guests ? `<p><strong>Guests:</strong> ${data.guests}</p>` : ''}
  ${data.itemName ? `<p><strong>Tour/Hotel:</strong> ${data.itemName}</p>` : ''}
  ${data.requirements ? `<p><strong>Requirements:</strong> ${data.requirements}</p>` : ''}
`

// ─── Email-only helper (used when Supabase is unavailable) ────────────────

async function sendEmailOnly(
  name: string,
  email: string,
  phone: string | undefined,
  travelDate: string | undefined,
  guests: string | undefined,
  requirements: string | undefined,
  tour: string | undefined,
) {
  try {
    const result = await resendClient.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ethiojourney@gmail.com',
      subject: `New Booking: ${name}`,
      html: simpleEmailTemplate({
        name, email, phone, travelDate, guests, requirements, itemName: tour,
      }),
    })
    console.log('[sendEmailOnly] Email sent:', (result as any).id)
    return { success: true, data: result }
  } catch (error: any) {
    console.error('[sendEmailOnly] Email failed:', error)
    return { success: false, error: error.message ?? 'Failed to send email' }
  }
}

// ─── Main inquiry handler ─────────────────────────────────────────────────

export async function sendInquiry(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const date = formData.get('date')
  const guests = formData.get('guests')
  const requirements = formData.get('requirements')
  const tour = formData.get('tour')

  if (!name || !email) {
    return { success: false, error: 'Missing required fields' }
  }

  if (!validateEmail(email.toString())) {
    return { success: false, error: 'Invalid email format' }
  }

  if (phone && !validatePhone(phone.toString())) {
    return { success: false, error: 'Invalid phone number format' }
  }

  // ── 1. Persist to Supabase ──────────────────────────────────────────────
  const bookingResult = await createBooking({
    name: name.toString(),
    email: email.toString(),
    phone: phone?.toString(),
    travelDate: date?.toString(),
    guests: guests?.toString(),
    itemName: tour?.toString(),
    type: tour && tour.toString().includes('hotel') ? 'hotel' : 'tour',
    requirements: requirements?.toString(),
    source: 'website',
  })

  if (!bookingResult.success) {
    console.warn('[sendInquiry] Supabase persist failed:', bookingResult.error)
    // Still send email but surface the DB error to the user
    const emailResult = await sendEmailOnly(
      name?.toString() ?? '',
      email?.toString() ?? '',
      phone?.toString(),
      date?.toString(),
      guests?.toString(),
      requirements?.toString(),
      tour?.toString(),
    )
    if (!emailResult.success) {
      return { success: false, error: 'Booking could not be saved and email failed: ' + emailResult.error }
    }
    return { success: true, warning: 'Booking saved locally but not synced to database. ' + bookingResult.error }
  }

  console.log('[sendInquiry] Booking persisted to Supabase:', bookingResult.id)

  // ── 2. Send email via Resend ─────────────────────────────────────────────
  try {
    const result = await resendClient.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ethiojourney@gmail.com',
      subject: `New Booking: ${name}`,
      html: simpleEmailTemplate({
        name, email, phone, date, guests, requirements, itemName: tour,
      }),
    })

    console.log('[sendInquiry] Email sent:', (result as any).id)
    return { success: true, data: result }
  } catch (error: any) {
    console.error('[sendInquiry] Email failed:', error)
    return { success: false, error: error.message ?? 'Failed to send email' }
  }
}