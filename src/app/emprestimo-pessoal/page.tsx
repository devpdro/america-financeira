import {
  Navbar,
  Header,
  OurChannel,
  LoanInfo,
  LoanQuality,
  LoanPresentation,
  BlogHighlights,
  Faq,
  Footer,
} from "@/presentation/components/common";
import { Images } from "@/presentation/assets";

export default function PersonalLoan() {
  const backgroundImageUrl = Images.personalEntrepreneur;

  return (
    <div>
      <Navbar />
      <Header
        title="Empréstimo Pessoal"
        subtitle={
          <>
            Empréstimo pra você, <br /> rápido e fácil
          </>
        }
        showDetails={
          <>
            Realize seus sonhos com a América Financeira e aproveite <br /> as
            menores taxas do mercado!
          </>
        }
        showParagraph="*Sujeito à analise de crédito e condições do produto"
        backgroundImage={backgroundImageUrl.src}
      />
      <OurChannel />
      <LoanInfo
        title="O que é o Empréstimo Pessoal?"
        subtitle="Entenda essa modalidade de crédito"
        paragraph="O empréstimo pessoal é um tipo de crédito oferecido por instituições financeiras para indivíduos que necessitam de dinheiro para diversas finalidades pessoais, como pagar dívidas, realizar compras ou lidar com emergências. Normalmente, ele não requer um motivo específico para a solicitação."
      />
      <LoanQuality />
      <LoanPresentation
        imageWidth={91}
        imageHeight={100}
        image={Images.Investment.src}
        alt="Antecipação FGTS"
        title="Antecipação FGTS"
        subtitle="Antecipe seu FGTS com a América e tenha acesso rápido ao seu dinheiro quando precisar. Simplificamos o processo para você aproveitar seus recursos antes do prazo habitual."
        paragraph="Antecipar FGTS"
        imagePosition="right"
      />
      <LoanPresentation
        image={Images.CardCredit.src}
        imageWidth={91}
        imageHeight={100}
        alt="Cartão de Crédito"
        title="Cartão de Crédito"
        subtitle="A América oferece cartões de crédito de bancos parceiros, com benefícios exclusivos. Somos especialistas em conectar você às melhores opções financeiras, sem ser um banco."
        paragraph="Solicitar agora"
        imagePosition="left"
      />
      <BlogHighlights />
      <Faq title="Ficou com alguma dúvida sobre o empréstimo pesssoal?" />
      <Footer />
    </div>
  );
}
