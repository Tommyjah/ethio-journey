'use client'

import { motion } from 'framer-motion'

interface StatCardProps {
  label: string
  value: string | number
  color: string
  icon?: React.ReactNode
}

export function StatCard({ label, value, color }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#050505] border border-white/10 rounded-xl p-5"
    >
      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">{label}</p>
      <p className={`text-3xl font-serif font-bold ${color}`}>{value}</p>
    </motion.div>
  )
}
