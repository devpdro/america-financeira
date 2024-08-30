import { NextResponse, NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

import { Session } from '@/data/models'

import { SERVER_JWT_SECRET_KEY } from './constants'

export const AUTH_PAGE = '/login'

const SECRET_KEY = new TextEncoder().encode(SERVER_JWT_SECRET_KEY)

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl

  if (pathname.startsWith('/_next') || pathname.startsWith('/api/') || pathname === AUTH_PAGE) {
    return NextResponse.next()
  }

  const tokenCookie = req.cookies.get('auth-token')

  if (!tokenCookie) {
    const url = req.nextUrl.clone()
    url.pathname = AUTH_PAGE

    return NextResponse.redirect(url)
  }

  const token = tokenCookie.value

  try {
    const { payload }: { payload: Session } = await jwtVerify(token, SECRET_KEY)
    req.nextUrl.searchParams.set('user', JSON.stringify(payload))

    return NextResponse.next()
  } catch (err) {
    const url = req.nextUrl.clone()
    url.pathname = AUTH_PAGE

    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ['/painel/:path*', '/hot-academy/:path*', '/roteiros-operacionais/:path*'],
}
