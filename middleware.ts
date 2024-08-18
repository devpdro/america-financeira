import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth-token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  try {
    jwt.verify(token, SECRET_KEY)
    return NextResponse.next()
  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: '/painel/:path*',
}
