import Head from 'next/head'

import { Header, Benefits, InfoPanel, Faq, LatestPosts } from '@/presentation/components/common'
import { LoanWarning, LoanCarousel, WhatsappButton } from '@/presentation/components/ui'
import { benefitsLoan, faqAboutLoan } from '@/data/ui'
import { Images } from '@/presentation/assets'
import CeoAbout from '@/presentation/components/ui/ceo-about/ceo-about'

export default function Home() {
  const backgroundImageUrl = Images.cabecalhoInicial

  return (
    <main>
      <Head>
        <title>Empréstimo Online - América Financeira</title>
        <meta
          name="description"
          content="Realize seus sonhos com os serviços de crédito da América Financeira. Oferecemos empréstimos rápidos, fáceis e descomplicados. Simule agora!"
        />
        <meta
          name="keywords"
          content="crédito, empréstimo, América Financeira, simulação de empréstimo, antecipação FGTS, cartão de crédito"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Empréstimo Online - América Financeira" />
        <meta
          property="og:description"
          content="Realize seus sonhos com os serviços de crédito da América Financeira. Oferecemos empréstimos rápidos, fáceis e descomplicados. Simule agora!"
        />
        <meta property="og:image" content={backgroundImageUrl.src} />
        <meta property="og:type" content="website" />
      </Head>
      <LoanWarning />
      <Header
        title="Solicite seu crédito agora mesmo!"
        subtitle={
          <>
            Realizando sonhos <br /> através do Crédito!
          </>
        }
        showParagraph="*Aqui seu empréstimo é rápido, fácil e descomplicado"
        backgroundImage={backgroundImageUrl.src}
      />
      <LoanCarousel
        subtitle="Ofertas personalizadas"
        title={
          <>
            Escolha o empréstimo <br /> que mais combina com você
          </>
        }
      />
      <Benefits
        title={
          <>
            O crédito de qualidade <br /> que você merece
          </>
        }
        subtitle={
          <>
            Um empréstimo pode ser a solução financeira que você precisa <br /> para melhorar sua vida.
          </>
        }
        items={benefitsLoan}
      />
      <CeoAbout />
      <LatestPosts />
      <Faq items={faqAboutLoan} title="Ficou com alguma dúvida?" />
    </main>
  )
}
