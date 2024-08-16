import Head from 'next/head'

import { Benefits, FollowUs, Information, LoadInfo, ArticleHeader } from '@/presentation/components/common'
import { Navbar, Footer } from '@/presentation/components/layout'
import { PartnersBenefits } from '@/presentation/components/ui'
import { Images } from '@/presentation/assets'
import { benefitsPartners } from '@/data/ui'

export default function Partners() {
  const title = 'América Partners'
  const paragraphs = [
    'Seja bem-vindo ao America Partners! Aqui você encontrará informações sobre nossas parcerias estratégicas e como elas podem ajudar a impulsionar o seu negócio. Na America Financeira, valorizamos a colaboração e estamos comprometidos em oferecer suporte e soluções financeiras inovadoras aos nossos parceiros.',
    'Junte-se a nós e descubra os benefícios exclusivos de ser um parceiro da America Financeira. Tenha acesso a recursos dedicados e suporte contínuo para crescer com segurança.',
    'Nossos parceiros têm acesso a uma ampla rede de clientes, suporte especializado e inúmeras oportunidades de crescimento. Com mais de 12 anos de experiência, estamos aqui para ajudar você a alcançar novos patamares de sucesso. Explore nossas soluções e veja como podemos crescer juntos.',
  ]
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
        <meta property="og:url" content="https://www.americafinanceira.com.br/parceiros" />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <ArticleHeader
        image={Images.PessoaParceiro.src}
        imageWidth={100}
        imageHeight={40}
        alt="Parcerias de Sucesso"
        subtitle="Sobre nossas parcerias"
        title="Parcerias de Sucesso"
        paragraph="Na America Financeira, valorizamos as parcerias estratégicas que nos permitem oferecer soluções financeiras inovadoras e eficazes. Junte-se a nós e descubra os benefícios de ser um parceiro, incluindo acesso a uma ampla rede de clientes, suporte especializado e oportunidades de crescimento conjunto."
        buttonPrimaryText="Seja parceiro"
        imagePosition="left"
      />
      <Benefits
        title={<>Nossos diferenciais</>}
        subtitle={
          <>
            Descubra os benefícios exclusivos de se tornar um parceiro da <br /> America Financeira e impulsione seu
            negócio.
          </>
        }
        items={benefitsPartners}
      />
      <PartnersBenefits />
      <Information title={title} paragraphs={paragraphs} />
      <FollowUs />
      <Footer />
    </main>
  )
}
