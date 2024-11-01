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
        <title>América Financeira - Sua Aliada na Jornada Financeira</title>
        <meta
          name="description"
          content="A América Financeira oferece soluções personalizadas para suas necessidades financeiras, desde empréstimos consignados até a antecipação de FGTS."
        />
        <meta name="keywords" content="empréstimo, consignado, FGTS, antecipação, financeira, bancos, seguros" />
        <meta name="author" content="América Financeira" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="América Financeira - Sua Aliada na Jornada Financeira" />
        <meta
          property="og:description"
          content="A América Financeira oferece soluções personalizadas para suas necessidades financeiras, desde empréstimos consignados até a antecipação de FGTS."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://www.seusite.com.br" />
        <meta property="og:type" content="website" />
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
