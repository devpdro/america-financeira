import Head from 'next/head'

import { PartnerRequest } from '@/presentation/components/form'

export default function PartnerForm() {
  return (
    <div>
      <Head>
        <title>Formulário seja parceiro</title>
        <meta
          name="description"
          content="Junte-se ao programa de parceria da America Financeira e descubra os benefícios exclusivos de ser nosso parceiro. Oferecemos suporte especializado e oportunidades de crescimento."
        />
        <meta
          name="keywords"
          content="parceria, America Financeira, programa de parceria, suporte especializado, crescimento, soluções financeiras"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Formulário seja parceiro" />
        <meta
          property="og:description"
          content="Junte-se ao programa de parceria da America Financeira e descubra os benefícios exclusivos de ser nosso parceiro. Oferecemos suporte especializado e oportunidades de crescimento."
        />
        <meta property="og:url" content="https://www.americafinanceira.com.br/formulario-seja-parcerio" />
        <meta property="og:type" content="website" />
      </Head>
      <PartnerRequest />
    </div>
  )
}
