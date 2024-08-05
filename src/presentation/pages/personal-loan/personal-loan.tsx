import { Header, LatestPosts, InfoPanel, Benefits, LoadInfo, Faq } from '@/presentation/components/common'
import { personalLoanBenefits, faqAboutPersonalLoan } from '@/data/ui'
import { Navbar, Footer } from '@/presentation/components/layout'
import { PartnersBanks } from '@/presentation/components/common'
import { Images } from '@/presentation/assets'

export default function PersonalLoan() {
  const backgroundImageUrl = Images.pessoaComputadorCabecalho

  return (
    <main>
      <Navbar />
      <Header
        title="Empréstimo Pessoal"
        subtitle={
          <>
            Empréstimo pra você, <br /> rápido e fácil
          </>
        }
        showDetails={false}
        showParagraph="*Sujeito à analise de crédito e condições do produto"
        backgroundImage={backgroundImageUrl.src}
      />
      <LoadInfo
        image={Images.pessoaOlhandoCelular.src}
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
        subtitle="Oferecemos as melhores condições e benefícios para atender todas suas necessidades financeiras pessoais."
        items={personalLoanBenefits}
      />
      <PartnersBanks />
      <InfoPanel
        image={Images.cartaoCredito.src}
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
        image={Images.investimentos.src}
        alt="Imagem representativa de antecipação de FGTS"
        title="Antecipação FGTS"
        subtitle="Antecipe seu FGTS com a América e tenha acesso rápido ao seu dinheiro quando precisar. Simplificamos o processo para você aproveitar seus recursos antes do prazo habitual."
        paragraph="Antecipar FGTS"
        imagePosition="right"
      />
      <LatestPosts />
      <Faq items={faqAboutPersonalLoan} title="Ficou com alguma dúvida sobre Empréstimo Pessoal?" />
      <Footer />
    </main>
  )
}