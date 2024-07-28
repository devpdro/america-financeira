import {
  Header,
  Navbar,
  LoanInfo,
  BlogHighlights,
  Faq,
  Footer,
} from "@/presentation/components/common";
import { Banks, FgtsSimulation } from "@/presentation/components";
import { Images } from "@/presentation/assets";
import { FaqFgtsLoanItems } from "@/data";

export default function FgtsAdvance() {
  const backgroundImageUrl = Images.HeaderInitial;

  return (
    <div>
      <Navbar />
      <Header
        title="Empréstimo FGTS"
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
      <LoanInfo
        title="O que é Empréstimo FGTS?"
        subtitle="Saiba mais"
        paragraph="O empréstimo consignado é uma forma de crédito vantajosa com taxa de
          juros mais baixas para aposentados e pensionistas do INSS, servidores
          públicos, além de beneficiários de programas sociais, no qual o
          pagamento das parcelas é descontado diretamente da folha de pagamento
          do solicitante."
        imagePosition="left"
      />
      <FgtsSimulation />
      <Banks />
      <BlogHighlights />
      <Faq
        items={FaqFgtsLoanItems}
        title="Ficou com alguma dúvida sobre Empréstimo FGTS?"
      />
      <Footer />
    </div>
  );
}
