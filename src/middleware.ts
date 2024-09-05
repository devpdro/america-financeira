import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET_KEY || 'your-secret-key')

export async function middleware(req: NextRequest) {
  const tokenCookie = req.cookies.get('auth-token')

  if (!tokenCookie) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  const token = tokenCookie.value

  try {
    const { payload } = await jwtVerify(token, SECRET_KEY)
    req.nextUrl.searchParams.set('user', JSON.stringify(payload))
    return NextResponse.next()
  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/painel/:path*', '/hot-academy/:path*', '/roteiros-operacionais/:path*'],
}
