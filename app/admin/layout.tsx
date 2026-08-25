import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin | Ethio Journey',
  description: 'Admin access to manage bookings and inquiries',
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
