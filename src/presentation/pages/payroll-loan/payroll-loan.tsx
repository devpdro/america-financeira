import { Header, LatestPosts, InfoPanel, Benefits, LoadInfo, Faq } from '@/presentation/components/common'
import { benefitsConsignedLoan, faqAboutPayrollLoan } from '@/data/ui'
import { Navbar, Footer } from '@/presentation/components/layout'
import { PartnersBanks } from '@/presentation/components/common'
import { Images } from '@/presentation/assets'

export default function PayrollLoan() {
  const backgroundImageUrl = Images.emprestimoConsignadoPessoas

  return (
    <main>
      <Navbar />
      <Header
        title="Empréstimo Consignado"
        subtitle={
          <>
            Dinheiro extra para <br /> alcançar seus planos e <br /> realizar os seus sonhos
          </>
        }
        showParagraph="*Sujeito à análise de crédito e condições do produto"
        backgroundImage={backgroundImageUrl.src}
      />
      <LoadInfo
        image={Images.pessoaTablet.src}
        imageWidth={100}
        imageHeight={98}
        alt="O que é o Empréstimo Consignado?"
        subtitle="Sobre o empréstimo consignado"
        title="O que é o empréstimo consignado?"
        paragraph="O empréstimo consignado é um tipo de crédito onde as parcelas são descontadas diretamente da folha de pagamento. Isso garante condições mais favoráveis, como taxas de juros mais baixas e prazos mais flexíveis. Ideal para quem busca um crédito com segurança e benefícios exclusivos."
        buttonPrimaryText="Simular empréstimo consignado"
        imagePosition="left"
      />
      <Benefits
        title={<>Benefícios do empréstimo consignado para você</>}
        subtitle="Descubra como o empréstimo consignado pode facilitar sua vida financeira com taxas baixas e condições vantajosas."
        items={benefitsConsignedLoan}
      />
      <PartnersBanks />
      <LatestPosts />
      <Faq items={faqAboutPayrollLoan} title="Ficou com alguma dúvida sobre Empréstimo Consignado?" />
      <Footer />
    </main>
  )
}
