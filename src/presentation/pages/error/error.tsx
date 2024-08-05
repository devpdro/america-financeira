import Head from 'next/head'

import { Footer, Navbar } from '@/presentation/components/layout'
import { ErrorDisplay } from '@/presentation/components/ui'

export default function Error() {
  return (
    <main>
      <Head>
        <title>Página não encontrada</title>
        <meta
          name="description"
          content="Ocorreu um erro. Acesse nossa página inicial para encontrar o que você procura ou entre em contato com nosso suporte."
        />
        <meta name="keywords" content="erro, página não encontrada, América Financeira, suporte, ajuda" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Página não encontrada" />
        <meta
          property="og:description"
          content="Ocorreu um erro. Acesse nossa página inicial para encontrar o que você procura ou entre em contato com nosso suporte."
        />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <ErrorDisplay />
      <Footer />
    </main>
  )
}
