import Head from 'next/head'

import { IntroductionHeader } from '@/presentation/components/common'
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

        <meta property="og:type" content="website" />
      </Head>
      <IntroductionHeader
        image={Images.pessoaComputadorCabecalho.src}
        imageWidth={100}
        imageHeight={98}
        alt="Parcerias de Sucesso"
        subtitle="Sobre nossas parcerias"
        title="Parcerias de Sucesso"
        paragraph="Na America Financeira, valorizamos as parcerias estratégicas que nos permitem oferecer soluções financeiras inovadoras e eficazes. Junte-se a nós e descubra os benefícios de ser um parceiro, incluindo acesso a uma ampla rede de clientes, suporte especializado e oportunidades de crescimento conjunto."
        buttonPrimaryText="Seja nosso parceiro"
        imagePosition="left"
      />
      <Navbar />
      <Timeline />
      <Team />
      <Footer />
    </main>
  )
}
