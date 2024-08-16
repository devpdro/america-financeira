import Head from 'next/head'

import { HeaderPolicy, InformationPolicy } from '@/presentation/components/ui'
import { privacyPolicy } from '@/data/ui'

export default function PrivacyPolicy() {
  return (
    <main>
      <Head>
        <title>Política de privacidade</title>
        <meta
          name="description"
          content="Leia a Política de Privacidade da América Financeira e saiba como protegemos e utilizamos suas informações pessoais."
        />
        <meta
          name="keywords"
          content="política de privacidade, América Financeira, informações pessoais, proteção de dados, privacidade"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Política de privacidade" />
        <meta
          property="og:description"
          content="Leia a Política de Privacidade da América Financeira e saiba como protegemos e utilizamos suas informações pessoais."
        />
        <meta property="og:url" content="https://www.americafinanceira.com.br/politica-de-privacidade" />
        <meta property="og:type" content="website" />
      </Head>

      <HeaderPolicy title="Política de Privacidade" />
      <InformationPolicy
        title={privacyPolicy.title}
        paragraph={privacyPolicy.paragraph}
        introductionTitle={privacyPolicy.introductionTitle}
        listItems={privacyPolicy.listItems}
        finishedTitle={privacyPolicy.finishedTitle}
        finishedParagraph={privacyPolicy.finishedParagraph}
      />
    </main>
  )
}
