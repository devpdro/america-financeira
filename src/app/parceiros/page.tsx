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
        showLoanRequest={false}
      />
      <LoanBenefits title="Vantagens do empréstimo FGTS" />
      <LoanQuality />
      <LoanPresentation
        imageWidth={91}
        imageHeight={100}
        image={Images.payrollLoan.src}
        alt="Seja parceiro"
        title="Seja parceiro"
        subtitle="Antecipe seu FGTS com a América e tenha acesso rápido ao seu dinheiro quando precisar. Simplificamos o processo para você aproveitar seus recursos antes do prazo habitual."
        paragraph="Antecipar FGTS"
        imagePosition="right"
      />
      <Footer />
    </>
  );
}
