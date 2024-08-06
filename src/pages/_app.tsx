import type { AppProps } from 'next/app'

import { CookieProvider } from '@/main/providers'

import '@/presentation/styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookieProvider>
      <Component {...pageProps} />
    </CookieProvider>
  )
}
