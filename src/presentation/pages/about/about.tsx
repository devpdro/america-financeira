import Head from 'next/head'

import { Footer, Navbar } from '@/presentation/components/layout'
import { Timeline, Team } from '@/presentation/components/ui'
import { Header } from '@/presentation/components/common'
import { Images } from '@/presentation/assets'

export default function About() {
  const backgroundImageUrl = Images.cartaoDebito

  return (
    <main>
      <Head>
        <title>Conheça Nossa História | América Financeira</title>
        <meta
          name="description"
          content="Conheça a trajetória e conquistas da América Financeira ao longo dos anos. Descubra como estamos inovando e conquistando a confiança de nossos clientes."
        />
        <meta name="keywords" content="América Financeira, nossa história, equipe, inovação, confiança, trajetória" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Sobre a América Financeira: Nossa História e Equipe" />
        <meta
          property="og:description"
          content="Conheça a trajetória e conquistas da América Financeira ao longo dos anos. Descubra como estamos inovando e conquistando a confiança de nossos clientes."
        />
        <meta property="og:image" content={backgroundImageUrl.src} />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <Header
        title="Sobre a América Financeira"
        subtitle={
          <>
            Inovação e confiança <br /> para realizar seus sonhos <br /> financeiros
          </>
        }
        showParagraph="Conheça nossa trajetória e conquistas ao longo dos anos"
        showLoanRequest={false}
        showDetails={false}
        backgroundImage={backgroundImageUrl.src}
      />
      <Timeline />
      <Team />
      <Footer />
    </main>
  )
}
