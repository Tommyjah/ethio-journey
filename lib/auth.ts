import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function validateAdminSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get('admin_session')?.value
    return session === 'authenticated'
  } catch {
    return false
  }
}

export function requireAdmin(request: Request): NextResponse | null {
  // validateAdminSession is async — but this is used in non-async contexts
  // so we can't await it here. Callers should use the async version.
  throw new Error('requireAdmin is deprecated — use validateAdminSession() with await')
}