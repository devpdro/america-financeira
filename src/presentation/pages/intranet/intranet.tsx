import Head from 'next/head'

import { Footer, Navbar } from '@/presentation/components/layout'
import { HeaderPolicy } from '@/presentation/components/ui'

export default function Intranet() {
  return (
    <main>
      <Head>
        <title>Intranet - América Financeira</title>
        <meta
          name="description"
          content="Acesse a Intranet da América Financeira para informações internas, políticas de empresa, recursos humanos e muito mais."
        />
        <meta
          name="keywords"
          content="intranet, América Financeira, informações internas, políticas de empresa, recursos humanos"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Intranet - América Financeira" />
        <meta
          property="og:description"
          content="Acesse a Intranet da América Financeira para informações internas, políticas de empresa, recursos humanos e muito mais."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.americafinanceira.com.br/intranet" />
      </Head>
      <Navbar />
      <HeaderPolicy title="Intranet" />
      <Footer />
    </main>
  )
}
