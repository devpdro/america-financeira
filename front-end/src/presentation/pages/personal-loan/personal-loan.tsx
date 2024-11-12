import { Meta, Banks } from 'src/presentation/components'
import { IMAGE } from '@/presentation/assets'

import { Header, LatestPosts, InfoPanel, Benefits, LoadInfo, Faq } from '@/presentation/components/common'
import { personalLoanBenefits, faqAboutPersonalLoan } from '@/data/ui'

export default function PersonalLoan() {
  const backgroundImageUrl = IMAGE.pessoaOlhando

  return (
    <div>
      <Meta
        title="Empréstimo Pessoal: Online, Ágil e Seguro"
        description="Empréstimo pessoal rápido e fácil, com as melhores condições e benefícios para atender todas suas necessidades financeiras pessoais. Simule agora!"
        keywords="empréstimo pessoal, crédito pessoal, América Financeira, simulação de empréstimo, condições de empréstimo, benefícios financeiros"
      />
      <Header
        title="Empréstimo Pessoal"
        subtitle="Empréstimo pra você,\nrápido e fácil"
        paragraph="*Sujeito à análise de crédito e condições do produto"
        image={backgroundImageUrl.src}
      />
      <LoadInfo
        image={IMAGE.tresPessoasEmprestimo.src}
        imageWidth={100}
        imageHeight={98}
        alt="O que é o Empréstimo Pessoal?"
        subtitle="Sobre o empréstimo pessoal"
        title="O que é o empréstimo pessoal?"
        paragraph="O empréstimo pessoal é um tipo de crédito oferecido por instituições financeiras para indivíduos que necessitam de dinheiro para diversas finalidades pessoais, como pagar dívidas, realizar compras ou lidar com emergências."
        buttonPrimaryText="Simular empréstimo"
        imagePosition="left"
      />
      <Benefits
        title={
          <>
            Seu empréstimo pessoal <br /> ideal está aqui
          </>
        }
        subtitle={
          <>
            Oferecemos as melhores condições e benefícios para atender todas suas <br /> necessidades financeiras
            pessoais.
          </>
        }
        items={personalLoanBenefits}
      />
      <Banks />
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
      <LatestPosts />
      <Faq items={faqAboutPersonalLoan} title="Ficou com alguma dúvida sobre Empréstimo Pessoal?" />
    </div>
  )
}
