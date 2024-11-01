import { Meta } from 'src/presentation/components'
import { ICON } from 'src/presentation/assets'

import { Header, Benefits, Faq, LatestPosts } from '@/presentation/components/common'
import { LoanWarning, LoanCarousel } from '@/presentation/components/ui'
import { benefitsLoan, faqAboutLoan } from '@/data/ui'
import { Images } from '@/presentation/assets'
import CeoAbout from '@/presentation/components/ui/ceo-about/ceo-about'

import * as S from './home-styles'

export default function Home() {
  const backgroundImageUrl = Images.cabecalhoInicial

  return (
    <main>
      <Meta
        title="Empréstimo Online - América Financeira"
        description="Realize seus sonhos com os serviços de crédito da América Financeira. Oferecemos empréstimos rápidos, fáceis e descomplicados. Simule agora!"
        keywords="crédito, empréstimo, América Financeira, simulação de empréstimo, antecipação FGTS, cartão de crédito"
        image={backgroundImageUrl.src}
      />

      <S.Alert>
        <h1>Atenção: Não solicitamos nenhum pagamento prévio para aprovação do empréstimo</h1>
        <ICON.IconX size={24} color="red" stroke={2} className="my-icon" />
      </S.Alert>

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
