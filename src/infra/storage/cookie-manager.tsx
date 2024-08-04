import Cookie from 'js-cookie'

type CookieProps = {
  expires?: number | Date
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: 'Strict' | 'Lax' | 'None'
}

export const setCookie = (name: string, value: string, options?: CookieProps) => {
  Cookie.set(name, value, { ...options, secure: true, sameSite: 'strict' })
}

export const getCookie = (name: string): string | undefined => {
  return Cookie.get(name)
}

export const removeCookie = (name: string) => {
  Cookie.remove(name)
}
