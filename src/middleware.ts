import { NextResponse, NextRequest } from 'next/server'
import { verify } from 'jsonwebtoken'

import { SERVER_JWT_SECRET_KEY } from './constants'

export const AUTH_PAGE = '/login'

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
    const payload = await verify(token, SERVER_JWT_SECRET_KEY)
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
