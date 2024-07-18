import {
  Footer,
  Header,
  LoanBenefits,
  LoanPresentation,
  LoanQuality,
  Navbar,
} from "@/presentation/components/common";
import { Images } from "@/presentation/assets";

export default function Partners() {
  const backgroundImageUrl = Images.payrollLoan;
  return (
    <>
      <Navbar />
      <Header
        title="Seja Parceiro"
        subtitle={
          <>
            Dinheiro extra para <br /> alcançar seus planos e <br /> realizar os
            seus sonhos
          </>
        }
        showParagraph="*Sujeito à analise de crédito e condições do produto"
        showDetails={false}
        backgroundImage={backgroundImageUrl.src}
      />
      <LoanBenefits />
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
      <LoanQuality />
      <LoanBenefits />
      <Footer />
    </>
  );
}
