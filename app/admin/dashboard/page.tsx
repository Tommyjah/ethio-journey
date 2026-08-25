'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RefreshCw, Search, ChevronDown, X, Mail, Phone,
  Calendar, Users, MapPin, CheckCircle2, AlertCircle,
  ArrowRight, Eye, MessageSquare
} from 'lucide-react'
import type { Booking, BookingStatus, BookingSource } from '@/lib/database'
import { STATUS_LABELS, SOURCE_LABELS } from '@/lib/database'
import { mockBookings } from '@/lib/mock-bookings'

// Color map for status badges
const STATUS_COLORS: Record<BookingStatus, { bg: string; text: string; border: string }> = {
  pending:     { bg: 'bg-slate-500/10',  text: 'text-slate-300',  border: 'border-slate-500/20' },
  viewed:      { bg: 'bg-blue-500/10',   text: 'text-blue-300',   border: 'border-blue-500/20' },
  contacted:   { bg: 'bg-violet-500/10', text: 'text-violet-300', border: 'border-violet-500/20' },
  quoted:      { bg: 'bg-amber-500/10',  text: 'text-amber-300',  border: 'border-amber-500/20' },
  confirmed:   { bg: 'bg-emerald-500/10',text: 'text-emerald-300',border: 'border-emerald-500/20' },
  in_progress: { bg: 'bg-orange-500/10', text: 'text-orange-300', border: 'border-orange-500/20' },
  completed:   { bg: 'bg-green-500/10',  text: 'text-green-300',  border: 'border-green-500/20' },
  cancelled:   { bg: 'bg-red-500/10',    text: 'text-red-300',    border: 'border-red-500/20' },
}

const STATUS_ORDER_VISIBLE: BookingStatus[] = [
  'pending', 'viewed', 'contacted', 'quoted', 'confirmed', 'in_progress', 'completed', 'cancelled'
]

// ─── Types ───────────────────────────────────────────────────────────────

interface BookingCardProps {
  booking: Booking
  onClick: () => void
  onStatusChange: (status: BookingStatus) => void
}

// ─── Booking Card ────────────────────────────────────────────────────────

function BookingCard({ booking, onClick, onStatusChange }: BookingCardProps) {
  const color = STATUS_COLORS[booking.status]

  return (
    <div
      onClick={onClick}
      className={`bg-[#0A0A0A] border ${color.border} rounded-xl p-4 cursor-pointer hover:border-[#F15A24]/40 transition-all group ${booking.status === 'cancelled' ? 'opacity-40' : ''}`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${color.bg} ${color.text} border ${color.border}`}>
          {STATUS_LABELS[booking.status]}
        </span>
        <span className="text-[10px] text-white/30">{SOURCE_LABELS[booking.source]}</span>
      </div>

      <h3 className="text-white font-semibold text-sm mb-1 truncate">{booking.name}</h3>

      <div className="space-y-1 mb-3 text-xs">
        <p className="text-white/50 flex items-center gap-1.5">
          <Mail size={12} className="text-white/30 flex-shrink-0" />
          <span className="truncate">{booking.email}</span>
        </p>
        {booking.phone && (
          <p className="text-white/40 flex items-center gap-1.5">
            <Phone size={12} className="text-white/30 flex-shrink-0" />
            {booking.phone}
          </p>
        )}
        {booking.tourName && (
          <p className="text-[#D4AF37] text-xs truncate">{booking.tourName}</p>
        )}
        {booking.travelDate && (
          <p className="text-white/40 flex items-center gap-1.5">
            <Calendar size={12} className="text-white/30 flex-shrink-0" />
            {booking.travelDate}
          </p>
        )}
        {booking.createdAt && (
          <p className="text-[10px] text-white/20 mt-2">
            {new Date(booking.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </p>
        )}
      </div>
      <div className="relative">
        <select
          value={booking.status}
          onChange={(e) => onStatusChange(e.target.value as BookingStatus)}
          className="appearance-none bg-[#050505] border border-white/10 rounded-lg px-2 py-1.5 text-[10px] text-white/70 cursor-pointer w-full group-hover:border-[#F15A24]/30 focus:outline-none focus:border-[#F15A24] transition-all"
        >
          {STATUS_ORDER_VISIBLE.map((s) => (
            <option key={s} value={s} className="bg-[#0A0A0A]">
              {STATUS_LABELS[s]}
            </option>
          ))}
        </select>
        <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
      </div>

      <p className="text-[10px] text-white/20 mt-2">
        {new Date(booking.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </p>
    </div>
  )
}

// ─── Kanban Column ───────────────────────────────────────────────────────

interface KanbanColumnProps {
  status: BookingStatus
  bookings: Booking[]
  onCardClick: (booking: Booking) => void
  onStatusChange: (bookingId: string, status: BookingStatus) => void
}

function KanbanColumn({ status, bookings, onCardClick, onStatusChange }: KanbanColumnProps) {
  const color = STATUS_COLORS[status]

  return (
    <div className="flex flex-col min-w-0 flex-shrink-0 w-80">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${color.bg} ${color.text} border ${color.border}`}>
            {STATUS_LABELS[status]}
          </span>
          <span className="text-xs text-white/30 font-mono">{bookings.length}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto max-h-[70vh] pb-4">
        {bookings.map((booking) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <BookingCard
              booking={booking}
              onClick={() => onCardClick(booking)}
              onStatusChange={(newStatus) => onStatusChange(booking.id, newStatus)}
            />
          </motion.div>
        ))}
        {bookings.length === 0 && (
          <div className="text-white/20 text-xs text-center py-8">No bookings</div>
        )}
      </div>
    </div>
  )
}

// ─── Detail Modal ────────────────────────────────────────────────────────

interface DetailModalProps {
  booking: Booking | null
  onClose: () => void
  onStatusChange: (status: BookingStatus) => void
  onAddNote: (note: string) => void
}

function DetailModal({ booking, onClose, onStatusChange, onAddNote }: DetailModalProps) {
  const [note, setNote] = useState('')
  const [saving, setSaving] = useState(false)

  if (!booking) return null

  const color = STATUS_COLORS[booking.status]

  const handleSaveNote = async () => {
    if (!note.trim()) return
    setSaving(true)
    await onAddNote(note.trim())
    setNote('')
    setSaving(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 10 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0A0A0A] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#0A0A0A] z-10 flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${color.bg} ${color.text} border ${color.border}`}>
              {STATUS_LABELS[booking.status]}
            </span>
            <span className="text-xs text-white/30 font-mono">{booking.id.slice(0, 8)}</span>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-5 space-y-6">
          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Contact</h4>
            <div className="space-y-2">
              <p className="text-white font-medium">{booking.name}</p>
              <a href={`mailto:${booking.email}`} className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2">
                <Mail size={14} className="text-[#D4AF37]" />
                {booking.email}
              </a>
              {booking.phone && (
                <p className="text-white/50 text-sm flex items-center gap-2">
                  <Phone size={14} className="text-[#D4AF37]" />
                  {booking.phone}
                </p>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Details</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {booking.tourName && (
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider">Tour / Item</p>
                  <p className="text-white capitalize">{booking.tourName}</p>
                </div>
              )}
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-wider">Type</p>
                <p className="text-white capitalize">{booking.type}</p>
              </div>
              {booking.travelDate && (
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider">Travel Date</p>
                  <p className="text-white flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#D4AF37]" />
                    {booking.travelDate}
                  </p>
                </div>
              )}
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-wider">Guests</p>
                <p className="text-white flex items-center gap-1.5">
                  <Users size={14} className="text-[#D4AF37]" />
                  {booking.guests ?? '—'}
                </p>
              </div>
            </div>
          </div>

          {/* Requirements */}
          {booking.requirements && (
            <div className="space-y-2">
              <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Requirements</h4>
              <p className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap bg-[#050505] border border-white/5 rounded-lg p-3">
                {booking.requirements}
              </p>
            </div>
          )}

          {/* Update Status */}
          <div className="space-y-2">
            <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Update Status</h4>
            <div className="flex gap-2">
              <select
                value={booking.status}
                onChange={(e) => onStatusChange(e.target.value as BookingStatus)}
                className="flex-1 appearance-none bg-[#050505] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#F15A24] cursor-pointer"
              >
                {STATUS_ORDER_VISIBLE.map((s) => (
                  <option key={s} value={s} className="bg-[#0A0A0A]">{STATUS_LABELS[s]}</option>
                ))}
              </select>
              <button
                onClick={() => onStatusChange(booking.status)}
                className="bg-[#F15A24] hover:bg-[#D43D10] text-white font-bold px-4 py-2.5 rounded-lg text-sm transition-all flex items-center gap-1.5"
              >
                <CheckCircle2 size={16} />
                Save
              </button>
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Internal Notes</h4>
            {booking.notes && (
              <div className="bg-[#050505] border border-white/5 rounded-lg p-3">
                <p className="text-white/70 text-sm leading-relaxed whitespace-pre-wrap">{booking.notes}</p>
                {booking.updatedAt && (
              <p className="text-[10px] text-white/20 mt-2">{new Date(booking.updatedAt).toLocaleString()}</p>
            )}
              </div>
            )}
            <div className="space-y-2">
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add internal note..."
                className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#F15A24] resize-none h-24"
              />
              <button
                onClick={handleSaveNote}
                disabled={!note.trim() || saving}
                className="bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 text-[#D4AF37] font-bold px-4 py-2 rounded-lg text-sm transition-all disabled:opacity-30"
              >
                {saving ? 'Saving...' : 'Save Note'}
              </button>
            </div>
          </div>

          {/* Timestamps */}
          <div className="pt-4 border-t border-white/5 text-[10px] text-white/20 space-y-1">
            <p>Created: {new Date(booking.createdAt).toLocaleString()}</p>
            <p>Updated: {new Date(booking.updatedAt).toLocaleString()}</p>
            {booking.viewedAt && <p>Viewed: {new Date(booking.viewedAt).toLocaleString()}</p>}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Dashboard ───────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const router = useRouter()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<BookingStatus | 'all'>('all')
  const [detailBooking, setDetailBooking] = useState<Booking | null>(null)
  const [detailLoading, setDetailLoading] = useState(false)

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === 'pending').length,
    active: bookings.filter(b => !['completed', 'cancelled'].includes(b.status)).length,
    completed: bookings.filter(b => b.status === 'completed').length,
  }

  const fetchBookings = useCallback(async () => {
    try {
      setLoading(true)
      setError('')
      const res = await fetch('/api/bookings', { credentials: 'same-origin' })
      if (!res.ok) {
        if (res.status === 401) { router.push('/admin/login'); return }
        // Server error — fall back to mock bookings
        console.error('[fetchBookings] API error, status:', res.status)
        const mock = mockBookings
        setBookings(Array.isArray(mock) ? mock : [])
        if (Array.isArray(mock) && mock.length === 0) {
          setError('Failed to load bookings')
        }
        return
      }
      const data = await res.json()
      setBookings(data.records ?? data.bookings ?? [])
      setError('')
    } catch (err) {
      // Network error or JSON parse error — try mock fallback
      console.error('[fetchBookings] Exception:', err)
      const mock = mockBookings
      setBookings(Array.isArray(mock) ? mock : [])
      if (!Array.isArray(mock) || mock.length === 0) {
        setError('Failed to load bookings')
      }
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => { fetchBookings() }, [fetchBookings])

  const filtered = bookings.filter(b => {
    const q = search.toLowerCase()
    const matchSearch = !q ||
      b.name.toLowerCase().includes(q) ||
      b.email.toLowerCase().includes(q) ||
      b.phone?.toLowerCase().includes(q) ||
      b.tourName?.toLowerCase().includes(q)
    const matchStatus = statusFilter === 'all' || b.status === statusFilter
    return matchSearch && matchStatus
  })

  const byStatus = STATUS_ORDER_VISIBLE.reduce<Record<BookingStatus, Booking[]>>((acc, s) => {
    acc[s] = filtered.filter(b => b.status === s)
    return acc
  }, {} as Record<BookingStatus, Booking[]>)

  const handleCardClick = async (booking: Booking) => {
    setDetailLoading(true)
    try {
      const res = await fetch(`/api/bookings?id=${booking.id}`, { credentials: 'same-origin' })
      if (res.ok) {
        const data = await res.json()
        setDetailBooking(data.booking)
      } else {
        setDetailBooking(booking)
      }
    } catch {
      setDetailBooking(booking)
    }
    setDetailLoading(false)
  }

  const handleStatusChange = async (bookingId: string, newStatus: BookingStatus) => {
    try {
      const res = await fetch(`/api/bookings?id=${bookingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
        credentials: 'same-origin',
      })
      if (!res.ok) {
        if (res.status === 401) { router.push('/admin/login'); return }
        alert('Failed to update status')
        return
      }
      // Optimistic update
      setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: newStatus, updatedAt: new Date().toISOString() } : b))
      if (detailBooking?.id === bookingId) {
        setDetailBooking(prev => prev ? { ...prev, status: newStatus, updatedAt: new Date().toISOString() } : null)
      }
    } catch {
      alert('Failed to update status')
    }
  }

  const handleAddNote = async (note: string) => {
    if (!detailBooking) return
    try {
      const res = await fetch(`/api/bookings?id=${detailBooking.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ note }),
        credentials: 'same-origin',
      })
      if (!res.ok) { alert('Failed to save note'); return }
      await fetchBookings()
      const refreshed = bookings.find(b => b.id === detailBooking.id)
      if (refreshed) setDetailBooking(refreshed)
    } catch {
      alert('Failed to save note')
    }
  }

  const handleLogout = async () => {
    await fetch('/admin/api/auth', { method: 'DELETE', credentials: 'same-origin' })
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#0A0A0A] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded overflow-hidden border border-[#D4AF37]/30">
              <img src="/images/logo.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-serif font-bold">
              ETHIO <span className="italic font-light text-[#F15A24]">JOURNEY</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold ml-2 hidden sm:inline">Admin Console</span>
          </div>
          <div className="flex items-center gap-4">
            {/* Stats */}
            <div className="hidden md:flex items-center gap-4 text-xs">
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-white">{stats.total}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wider">Total</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-[#D4AF37]">{stats.pending}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wider">Pending</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-emerald-400">{stats.active}</p>
                <p className="text-[10px] text-white-30 uppercase tracking-wider">Active</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-blue-400">{stats.completed}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wider">Completed</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-xs text-white/40 hover:text-white transition-colors flex items-center gap-1"
            >
              <X size={14} />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {error && (
          <div className="mb-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg px-4 py-3 flex items-center gap-3 text-sm">
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Search name, email, phone, tour..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#F15A24] transition-all"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as BookingStatus | 'all')}
            className="bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-[#F15A24] cursor-pointer"
          >
            <option value="all" className="bg-[#0A0A0A]">All Status</option>
            {STATUS_ORDER_VISIBLE.map(s => (
              <option key={s} value={s} className="bg-[#0A0A0A]">{STATUS_LABELS[s]}</option>
            ))}
          </select>
        </div>

        {/* Kanban */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <RefreshCw size={32} className="animate-spin text-white/30" />
          </div>
        ) : (
          <div className="flex gap-4 overflow-x-auto pb-4">
            {STATUS_ORDER_VISIBLE.map((status) => (
              <motion.div
                key={status}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <KanbanColumn
                  status={status}
                  bookings={byStatus[status]}
                  onCardClick={handleCardClick}
                  onStatusChange={handleStatusChange}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {!loading && bookings.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/10 flex items-center justify-center mb-4">
              <RefreshCw size={32} className="text-[#D4AF37]/40" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white/60 mb-2">No bookings yet</h3>
            <p className="text-white/30 text-sm max-w-xs">
              Bookings submitted through the website will appear here once they come in.
            </p>
          </div>
        )}
      </main>

      {/* Detail Modal */}
      <AnimatePresence>
        {detailBooking && (
          <DetailModal
            booking={detailBooking}
            onClose={() => setDetailBooking(null)}
            onStatusChange={(status) => handleStatusChange(detailBooking.id, status)}
            onAddNote={(note) => handleAddNote(note)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
