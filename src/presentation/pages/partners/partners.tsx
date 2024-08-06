import Head from 'next/head'

import { Header, Benefits, FollowUs, Information, LoadInfo, IntroductionHeader } from '@/presentation/components/common'
import { Navbar, Footer } from '@/presentation/components/layout'
import { PartnersBenefits } from '@/presentation/components/ui'
import { Images } from '@/presentation/assets'
import { benefitsPartners } from '@/data/ui'

export default function Partners() {
  const backgroundImageUrl = Images.cartaoDebito

  return (
    <main>
      <Head>
        <title>América Partners | Seja um Parceiro</title>
        <meta
          name="description"
          content="Descubra os benefícios de se tornar um parceiro da América Financeira. Inovação e confiança para realizar seus sonhos financeiros."
        />
        <meta name="keywords" content="parceiros, América Financeira, benefícios, inovação, confiança, parceria" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="América Partners | Seja um Parceiro" />
        <meta
          property="og:description"
          content="Descubra os benefícios de se tornar um parceiro da América Financeira. Inovação e confiança para realizar seus sonhos financeiros."
        />
        <meta property="og:image" content={backgroundImageUrl.src} />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
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
      <Benefits
        title={
          <>
            Por que ser um parceiro da <br /> América Financeira?
          </>
        }
        subtitle="Descubra os benefícios exclusivos de se tornar um parceiro da America Financeira e impulsione seu negócio."
        imageWidth={100}
        imageHeight={100}
        items={benefitsPartners}
      />
      <PartnersBenefits />
      <Information />
      <FollowUs />
      <Footer />
    </main>
  )
}
