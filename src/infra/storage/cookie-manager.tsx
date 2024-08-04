import Cookie from 'js-cookie'

type CookieProps = {
  expires?: number | Date
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: 'Strict' | 'Lax' | 'None'
}

export const setCookie = (name: string, value: string, options?: CookieProps) => {
  const cookieOptions = {
    ...options,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as 'Strict' | 'Lax' | 'None',
  }

  Cookie.set(name, value, cookieOptions)
  console.log('Cookie set for:', name)
}

export const getCookie = (name: string): string | undefined => {
  return Cookie.get(name)
}

export const removeCookie = (name: string) => {
  Cookie.remove(name)
}

// Esta linha deve ser usada apenas se você está importando funções de outro arquivo
// e deseja re-exportá-las a partir deste.
// export * from './cookie-manager';
