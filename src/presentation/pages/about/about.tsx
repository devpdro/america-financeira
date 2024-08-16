import Head from 'next/head'

import { ArticleHeader } from '@/presentation/components/common'
import { Footer, Navbar } from '@/presentation/components/layout'
import { Timeline, Team } from '@/presentation/components/ui'
import { Images } from '@/presentation/assets'

export default function About() {
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
        <meta property="og:url" content="https://www.americafinanceira.com.br/quem-somos" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <ArticleHeader
        image={Images.empresa.src}
        imageWidth={100}
        imageHeight={98}
        alt="Nossa História"
        subtitle="Quem Somos"
        title="Conheça Nossa História"
        paragraph="A América Financeira é uma empresa dedicada a oferecer soluções financeiras que transformam vidas. Desde nossa fundação, temos nos comprometido com a inovação e a excelência no atendimento, conquistando a confiança de milhares de clientes ao longo dos anos. Com uma equipe de mais de 500 colaboradores e mais de 10 filiais espalhadas pelo país, estamos prontos para atender você onde quer que esteja."
        buttonPrimaryText="Seja nosso parceiro"
        imagePosition="left"
      />
      <Timeline />
      <Team />
      <Footer />
    </main>
  )
}
