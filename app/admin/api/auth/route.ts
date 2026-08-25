import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD as string

export async function POST(request: NextRequest) {
  if (!ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Admin access not configured on this server.' }, { status: 500 })
  }

  const body = await request.json().catch(() => ({}))
  const { password } = body as { password?: string }

  if (password === ADMIN_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set('admin_session', 'authenticated', {
      httpOnly: true,
      secure: false, // Always false in development
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    })
    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ error: 'Invalid password.' }, { status: 401 })
}

export async function DELETE() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
  return NextResponse.json({ success: true })
}

export async function GET() {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')?.value
  if (session === 'authenticated') {
    return NextResponse.json({ authenticated: true })
  }
  return NextResponse.json({ authenticated: false }, { status: 401 })
}
