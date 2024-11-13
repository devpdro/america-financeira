import Head from 'next/head'

import { Benefits, FollowUs, Information, ArticleHeader } from '@/presentation/components/common'
import { benefitsPartners, informationPartners } from '@/data/ui'
import { PartnersBenefits } from '@/presentation/components/ui'
import { Images } from '@/presentation/assets'

export default function Partners() {
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
      <ArticleHeader
        image={Images.empresa.src}
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
      <Information title={informationPartners[0].title} paragraphs={informationPartners[0].paragraphs} />
      <FollowUs />
      <section className={styles.container} aria-labelledby="modal-titulo" aria-describedby="modal-descricao">
      <Image className={styles.img} src={Images.logoAmericaAzul} alt="Logo América Financeira" />
      <h3 className={styles.subtitle}>Siga a gente</h3>
      <p className={styles.paragraph}>
        Conheça nossa cultura, explore nossos serviços e veja <br /> como transformamos finanças em oportunidades todos
        os dias.
      </p>
      <div className={styles['icons-section']}>
        {icons.map(({ icon: Icon, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer" aria-label={`Link para ${link}`}>
            <Icon className={styles.icon} />
          </a>
        ))}
      </div>
    </section>
    </main>
  )
}
