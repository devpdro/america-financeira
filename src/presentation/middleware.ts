import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { users } from '@/data/ui'

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl

  if (pathname.startsWith('/login')) {
    const email = searchParams.get('email')
    const password = searchParams.get('password')

    const user = users.find((user) => user.email === email && user.password === password)

    if (!user) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*', // Especifique aqui as rotas protegidas
}
