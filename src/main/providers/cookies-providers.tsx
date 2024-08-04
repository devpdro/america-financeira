import { createContext, useContext, ReactNode } from 'react'
import * as cookieManager from '@/infra/storage/cookie-manager'

interface CookieProviderProps {
  children: ReactNode
}

export const CookieContext = createContext<any>(null)

export const useCookies = () => useContext(CookieContext)

export const CookieProvider = ({ children }: CookieProviderProps) => (
  <CookieContext.Provider value={cookieManager}>{children}</CookieContext.Provider>
)
