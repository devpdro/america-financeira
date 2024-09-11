import Head from 'next/head'

import { HeaderPolicy, InformationPolicy, IntranetDisplay } from '@/presentation/components/ui'
import { intranetPolicy } from '@/data/ui'

export default function Intranet() {
  return (
    <div>
      <Head>
        <title>Intranet - América Financeira</title>
        <meta
          name="description"
          content="Acesse a Intranet da America Financeira para obter recursos exclusivos, informações internas e suporte especializado para nossa equipe e parceiros."
        />
        <meta
          name="keywords"
          content="Intranet, America Financeira, recursos internos, suporte especializado, equipe, parceiros"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Intranet - America Financeira" />
        <meta
          property="og:description"
          content="A Intranet da America Financeira oferece acesso a recursos exclusivos, informações internas e suporte especializado."
        />
        <meta property="og:url" content="https://www.americafinanceira.com.br/intranet" />
        <meta property="og:type" content="website" />
      </Head>
      <HeaderPolicy title="Intranet" />
      <IntranetDisplay />
    </div>
  )
}
