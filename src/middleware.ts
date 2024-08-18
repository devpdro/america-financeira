import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key'

export function middleware(req: NextRequest) {
  console.log('Middleware triggered') // Verifica se o middleware está sendo chamado

  const tokenCookie = req.cookies.get('auth-token')

  if (!tokenCookie) {
    console.log('No token cookie found') // Loga quando o cookie não é encontrado
    return NextResponse.redirect(new URL('/login', req.url))
  }

  const token = tokenCookie.value
  console.log('Token:', token) // Loga o token encontrado

  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    console.log('Token decoded:', decoded) // Loga o token decodificado
    req.nextUrl.searchParams.set('user', JSON.stringify(decoded))
    return NextResponse.next()
  } catch (err) {
    console.log('Token verification failed', err) // Loga falha na verificação do token
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: '/painel/:path*',
}
