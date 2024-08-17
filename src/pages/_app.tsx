import { type NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { type ReactElement, type ReactNode } from 'react'

import { DefaultLayout } from '@/presentation/components/layout'

import '@/presentation/styles/global.scss'

type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)
  return (
    <>
      <Head>
        <title>América Financeira</title>
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
