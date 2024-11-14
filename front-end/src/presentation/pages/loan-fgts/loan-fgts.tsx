import { Meta, Spotlight, Simulation, Banks } from 'src/presentation/components'
import { IMAGE } from 'src/presentation/assets'

import { Header, LatestPosts, InfoPanel, Faq } from '@/presentation/components/common'
import { PartnersBanks } from '@/presentation/components/common'
import { faqAboutFgtsLoan } from '@/data/ui'

const LoanFGTS = () => {
  const IMAGES = IMAGE.duasPessoasConversando

  return (
    <div>
      <Meta
        title="Empréstimo FGTS: Antecipe o saque aniversário do FGTS"
        description="O empréstimo FGTS permite utilizar o saldo do Fundo de Garantia como garantia, oferecendo condições especiais e flexibilidade para o pagamento. Simule agora!"
        keywords="empréstimo FGTS, crédito FGTS, América Financeira, simulação de empréstimo, antecipação FGTS, condições especiais"
      />

      <Header
        title="Empréstimo FGTS"
        subtitle="Aproveite seu FGTS para\ntransformar seus planos\nem realidade"
        paragraph="*Sujeito à análise de crédito e condições do produto"
        image={IMAGES.src}
      />

      <Spotlight
        subtitle="Descubra o Empréstimo FGTS"
        title="O que é o Empréstimo FGTS?"
        paragraph="O empréstimo FGTS é uma modalidade de crédito que permite utilizar o saldo do Fundo de Garantia do Tempo de Serviço (FGTS) como garantia. É uma alternativa para quem precisa de dinheiro extra, oferecendo condições especiais e flexibilidade para o pagamento."
        label="Simule seu FGTS"
        position="right"
        image={IMAGE.duasPessoasOlhando.src}
        alt="Sobre o Empréstimo FGTS"
        width={100}
        height={100}
      />

      <Simulation />
      <Banks />

      <InfoPanel
        imageWidth={91}
        imageHeight={100}
        image={IMAGE.investimentos.src}
        alt="Imagem representativa de antecipação de FGTS"
        title="Antecipação FGTS"
        subtitle="Antecipe seu FGTS com a América e tenha acesso rápido ao seu dinheiro quando precisar. Simplificamos o processo para você aproveitar seus recursos antes do prazo habitual."
        paragraph="Antecipar FGTS"
        imagePosition="right"
      />

      <InfoPanel
        image={IMAGE.cartaoCredito.src}
        imageWidth={91}
        imageHeight={100}
        alt="Imagem de Cartão de Crédito"
        title="Cartão de Crédito"
        subtitle="A América oferece cartões de débito de bancos parceiros, com benefícios exclusivos. Somos especialistas em conectar você às melhores opções financeiras, sem ser um banco."
        paragraph="Solicitar agora"
        imagePosition="left"
      />

      <Faq items={faqAboutFgtsLoan} title="Ficou com alguma dúvida sobre Empréstimo FGTS?" />
    </div>
  )
}

export default LoanFGTS
