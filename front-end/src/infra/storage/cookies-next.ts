import { serialize } from 'cookie'

interface CookiesNextProps {
  httpOnly?: boolean
  secure?: boolean
  sameSite?: 'strict' | 'lax' | 'none'
  maxAge?: number
  path?: string
}

export class CookiesNext {
  static setCookie(name: string, value: string, options: CookiesNextProps = {}): string {
    return serialize(name, value, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      ...options,
    })
  }
}

// Função auxiliar para definir o cookie de autenticação
export const setAuthCookie = (token: string) => {
  return CookiesNext.setCookie('auth-token', token, {
    maxAge: 60 * 60 * 24, // 1 dia
  })
}
