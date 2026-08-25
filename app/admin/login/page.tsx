'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!password.trim()) {
      setError('Password is required.')
      return
    }

    startTransition(async () => {
      try {
        const res = await fetch('/admin/api/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password }),
          credentials: 'include',
        })

        const data = await res.json()

        if (res.ok && data.success) {
          // Wait a tick for the browser to store the session cookie
          // before navigating to the protected dashboard route
          await new Promise(resolve => setTimeout(resolve, 100));
          router.push('/admin/dashboard');
        } else {
          setError(data.error ?? 'Login failed.')
        }
      } catch {
        setError('Network error. Please try again.')
      }
    })
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo — clickable to return to home */}
        <Link href="/" className="flex items-center justify-center gap-3 mb-10 cursor-pointer group">
          <div className="w-10 h-10 rounded-sm border border-[#D4AF37]/30 overflow-hidden group-hover:border-[#F15A24]/50 transition-all">
            <img src="/images/logo.jpg" alt="logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl font-serif font-bold tracking-tighter group-hover:text-[#F15A24] transition-colors">
            ETHIO <span className="italic font-light text-[#F15A24]">JOURNEY</span>
          </span>
        </Link>

        {/* Card */}
        <div className="bg-[#050505] border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-serif font-bold text-white mb-2">Admin Access</h1>
            <p className="text-white/40 text-sm">Management console for bookings & inquiries</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#D4AF37] font-bold mb-2">
                Access Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                disabled={isPending}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#F15A24] transition-all disabled:cursor-not-allowed"
              />
              {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
            </div>

            <button
              type="submit"
              disabled={isPending || !password.trim()}
              className="w-full bg-[#F15A24] hover:bg-[#D43D10] disabled:bg-zinc-700 text-white font-bold py-3 rounded-xl transition-all disabled:cursor-not-allowed active:scale-[0.98]"
            >
              {isPending ? 'Verifying...' : 'Access Dashboard'}
            </button>
          </form>

          <p className="text-zinc-600 text-[10px] text-center mt-6 uppercase tracking-widest">
            Protected by password authentication
          </p>
        </div>
      </motion.div>
    </div>
  )
}
