import { CookiesNext } from '@/infra/storage'

export const setAuthCookie = (token: string) => {
  return CookiesNext.setCookie('auth-token', token, {
    maxAge: 60 * 60 * 24, 
  })
}
