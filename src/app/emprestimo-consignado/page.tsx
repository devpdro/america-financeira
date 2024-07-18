import {
  Navbar,
  Header,
  LoanInfo,
  HiringBenefits,
  BlogHighlights,
  Faq,
  Footer,
} from "@/presentation/components/common";
import { Images } from "@/presentation/assets";
import { FaqConsignedLoanItems } from "@/data";

export default function PayrollLoan() {
  const backgroundImageUrl = Images.payrollLoan;

  return (
    <div>
      <Navbar />
      <Header
        title="Empréstimo Consignado"
        subtitle={
          <>
            Dinheiro extra para <br /> alcançar seus planos e <br /> realizar os
            seus sonhos
          </>
        }
        showParagraph="*Sujeito à analise de crédito e condições do produto"
        showDetails={true}
        backgroundImage={backgroundImageUrl.src}
      />
      <LoanInfo
        title="O que é a antecipação FGTS?"
        subtitle="Saiba mais"
        paragraph="O empréstimo consignado é uma forma de crédito vantajosa com taxa de
          juros mais baixas para aposentados e pensionistas do INSS, servidores
          públicos, além de beneficiários de programas sociais, no qual o
          pagamento das parcelas é descontado diretamente da folha de pagamento
          do solicitante."
      />
      <HiringBenefits />
      <BlogHighlights />
      <Faq
        items={FaqConsignedLoanItems}
        title="Ficou com alguma dúvida sobre Empréstimo Consignado?"
      />
      <Footer />
    </div>
  );
}
