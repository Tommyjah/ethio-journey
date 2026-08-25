import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard | Ethio Journey',
  description: 'Manage bookings, inquiries, and pipeline',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {children}
    </div>
  )
}
