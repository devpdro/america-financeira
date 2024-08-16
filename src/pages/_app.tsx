import type { AppProps } from 'next/app'

import { DefaultLayout } from '@/presentation/components/layout'

import '@/presentation/styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
