import Head from 'next/head'

import { HeaderPolicy, InformationPolicy } from '@/presentation/components/ui'
import { Footer, Navbar } from '@/presentation/components/layout'
import { termsOfUse } from '@/data/ui'

export default function TermsOfUse() {
  return (
    <main>
      <Head>
        <title>Termos de uso</title>
        <meta
          name="description"
          content="Leia os Termos de Uso da América Financeira e entenda as condições e políticas para utilizar nossos serviços."
        />
        <meta name="keywords" content="termos de uso, América Financeira, políticas, condições, serviços" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Termos de uso" />
        <meta
          property="og:description"
          content="Leia os Termos de Uso da América Financeira e entenda as condições e políticas para utilizar nossos serviços."
        />{' '}
        <meta property="og:url" content="https://www.americafinanceira.com.br/termos-de-uso" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <HeaderPolicy title="Termos de Uso" />
      <InformationPolicy
        title={termsOfUse.title}
        paragraph={termsOfUse.paragraph}
        introductionTitle={termsOfUse.introductionTitle}
        listItems={termsOfUse.listItems}
        finishedTitle={termsOfUse.finishedTitle}
        finishedParagraph={termsOfUse.finishedParagraph}
      />
      <Footer />
    </main>
  )
}
