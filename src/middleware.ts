import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET_KEY || 'your-secret-key')

export async function middleware(req: NextRequest) {
  console.log('Middleware triggered')

  const tokenCookie = req.cookies.get('auth-token')

  if (!tokenCookie) {
    console.log('No token cookie found')
    return NextResponse.redirect(new URL('/login', req.url))
  }

  const token = tokenCookie.value
  console.log('Token:', token)

  try {
    const { payload } = await jwtVerify(token, SECRET_KEY)
    console.log('Token decoded:', payload)
    req.nextUrl.searchParams.set('user', JSON.stringify(payload))
    return NextResponse.next()
  } catch (err) {
    console.log('Token verification failed', err)
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: '/painel/:path*',
}
