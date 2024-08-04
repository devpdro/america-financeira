import { createContext, useContext, ReactNode } from 'react'
import { setCookie, getCookie, removeCookie } from '@/infra/storage'

interface CookieFunctions {
  setCookie: (name: string, value: string, options?: any) => void
  getCookie: (name: string) => string | undefined
  removeCookie: (name: string) => void
}

interface CookieProviderProps {
  children: ReactNode
}

export const CookieContext = createContext<CookieFunctions>({
  setCookie: () => {},
  getCookie: () => undefined,
  removeCookie: () => {},
})

export const useCookies = () => useContext(CookieContext)

export const CookieProvider = ({ children }: CookieProviderProps) => (
  <CookieContext.Provider value={{ setCookie, getCookie, removeCookie }}>{children}</CookieContext.Provider>
)