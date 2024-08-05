import Head from 'next/head'

import { Header, LatestPosts, Benefits, LoadInfo, Faq } from '@/presentation/components/common'
import { benefitsConsignedLoan, faqAboutPayrollLoan } from '@/data/ui'
import { Navbar, Footer } from '@/presentation/components/layout'
import { PartnersBanks } from '@/presentation/components/common'
import { Images } from '@/presentation/assets'

export default function PayrollLoan() {
  const backgroundImageUrl = Images.emprestimoConsignadoDuasPessoas

  return (
    <main>
      <Head>
        <title>Empréstimo Consignado: Seguro, Rápido e com Taxas Baixas</title>
        <meta
          name="description"
          content="O empréstimo consignado é a solução ideal para quem busca crédito com segurança e taxas de juros baixas. Simule agora e veja como é fácil."
        />
        <meta
          name="keywords"
          content="empréstimo consignado, crédito consignado, América Financeira, simulação de empréstimo, taxas baixas, segurança financeira"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Empréstimo Consignado: Seguro e com Taxas Baixas" />
        <meta
          property="og:description"
          content="O empréstimo consignado é a solução ideal para quem busca crédito com segurança e taxas de juros baixas. Simule agora e veja como é fácil."
        />
        <meta property="og:image" content={backgroundImageUrl.src} />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <Header
        title="Empréstimo Consignado"
        subtitle={
          <>
            Dinheiro extra para <br /> alcançar seus planos <br /> e realizar os seus sonhos
          </>
        }
        showParagraph="*Sujeito à análise de crédito e condições do produto"
        backgroundImage={backgroundImageUrl.src}
      />
      <LoadInfo
        image={Images.pessoaComCelularSaude.src}
        imageWidth={100}
        imageHeight={98}
        alt="O que é o Empréstimo Consignado?"
        subtitle="Sobre o empréstimo consignado"
        title="O que é o empréstimo consignado?"
        paragraph="O empréstimo consignado é um tipo de crédito onde as parcelas são descontadas diretamente da folha de pagamento. Isso garante condições mais favoráveis, como taxas de juros mais baixas e prazos mais flexíveis. Ideal para quem busca um crédito com segurança e benefícios exclusivos."
        buttonPrimaryText="Simular empréstimo consignado"
        imagePosition="left"
      />
      <Benefits
        title={<>Benefícios do empréstimo consignado para você</>}
        subtitle="Descubra como o empréstimo consignado pode facilitar sua vida financeira com taxas baixas e condições vantajosas."
        items={benefitsConsignedLoan}
      />
      <PartnersBanks />
      <LatestPosts />
      <Faq items={faqAboutPayrollLoan} title="Ficou com alguma dúvida sobre Empréstimo Consignado?" />
      <Footer />
    </main>
  )
}
