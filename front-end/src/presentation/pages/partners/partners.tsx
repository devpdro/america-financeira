import { Benefits, FollowUs, Information, ArticleHeader } from 'src/presentation/components/common'
import { benefitsPartners, informationPartners } from '@/data/ui'
import { PartnersBenefits } from '@/presentation/components/ui'
import { Meta } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

const Partners = () => (
  <div>
    <Meta
      title="América Partners | Seja um Parceiroe"
      description="Descubra os benefícios de se tornar um parceiro da América Financeira. Inovação e confiança para realizar seus sonhos financeiros."
      keywords="parceiros, América Financeira, benefícios, inovação, confiança, parceria"
    />

    <ArticleHeader
      image={IMAGE.empresa.src}
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
    <div className={styles.container} aria-labelledby="modal-titulo" aria-describedby="modal-descricao">
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
    </div>
  </div>
)

export default Partners
