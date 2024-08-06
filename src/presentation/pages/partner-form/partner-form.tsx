import Head from 'next/head'

import { PartnerRequest } from '@/presentation/components/form'

export default function FgtsLoan() {
  return (
    <div>
      <Head>
        <title>Empréstimo FGTS: Antecipe o saque aniversário do FGTS</title>
        <meta
          name="description"
          content="O empréstimo FGTS permite utilizar o saldo do Fundo de Garantia como garantia, oferecendo condições especiais e flexibilidade para o pagamento. Simule agora!"
        />
        <meta
          name="keywords"
          content="empréstimo FGTS, crédito FGTS, América Financeira, simulação de empréstimo, antecipação FGTS, condições especiais"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Empréstimo FGTS: Flexível e com Condições Especiais" />
        <meta
          property="og:description"
          content="O empréstimo FGTS permite utilizar o saldo do Fundo de Garantia como garantia, oferecendo condições especiais e flexibilidade para o pagamento. Simule agora!"
        />
        <meta property="og:type" content="website" />
      </Head>
      <PartnerRequest />
    </div>
  )
}
