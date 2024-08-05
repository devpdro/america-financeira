import { Header, Benefits } from '@/presentation/components/common'
import { Navbar, Footer } from '@/presentation/components/layout'
import { PartnersBenefits } from '@/presentation/components/ui'
import { Images } from '@/presentation/assets'
import { benefitsPartners } from '@/data/ui'

export default function Partners() {
  const backgroundImageUrl = Images.cartaoDebito

  return (
    <main>
      <Navbar />
      <Header
        title="Sobre a América Financeira"
        subtitle={
          <>
            Inovação e confiança <br /> para realizar seus sonhos <br /> financeiros
          </>
        }
        showParagraph="*Conheça nossa trajetória e conquistas ao longo dos anos"
        showLoanRequest={false}
        showDetails={false}
        backgroundImage={backgroundImageUrl.src}
      />
      <Benefits
        title={
          <>
            Por que ser um parceiro da <br /> América?
          </>
        }
        subtitle="Um empréstimo pode ser a solução financeira que você precisa para
          melhorar sua vida."
        imageWidth={100}
        imageHeight={100}
        items={benefitsPartners}
      />
      <PartnersBenefits />
      <Footer />
    </main>
  )
}
