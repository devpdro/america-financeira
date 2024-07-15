import {
  Header,
  Navbar,
  Faq,
  ContractorVerifier,
  BlogInitial,
  Footer,
} from "@/presentation/components/Common";
import { LoanInfo } from "@/presentation/components";
import { Images } from "@/presentation/assets";

import FgtsSimulation from "@/presentation/components/FgtsSimulation/fgts-simulation";
import LoanBenefits from "@/presentation/components/Common/LoanBenefits/loan-benefits";
import Decorative from "@/presentation/components/Common/Decorative/decorative";

export default function FgtsAdvance() {
  const backgroundImageUrl = Images.payrollLoan;
  return (
    <div>
      <Navbar />
      <Header
        title="Antecipação FGTS"
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
      <FgtsSimulation />
      <LoanInfo
        title="O que é a antecipação FGTS"
        subtitle="Saiba mais"
        paragraph="O empréstimo consignado é uma forma de crédito vantajosa com taxa de
          juros mais baixas para aposentados e pensionistas do INSS, servidores
          públicos, além de beneficiários de programas sociais, no qual o
          pagamento das parcelas é descontado diretamente da folha de pagamento
          do solicitante."
      />
      <LoanBenefits />
      <Decorative
        imageWidth={91}
        imageHeight={100}
        image={Images.Investment.src}
        alt="Antecipação FGTS"
        title="Antecipação FGTS"
        subtitle="Antecipe seu FGTS com a América e tenha acesso rápido ao seu dinheiro quando precisar. Simplificamos o processo para você aproveitar seus recursos antes do prazo habitual."
        paragraph="Antecipar FGTS"
        imagePosition="right"
      />
      <Decorative
        image={Images.CardCredit.src}
        imageWidth={91}
        imageHeight={100}
        alt="Cartão de Crédito"
        title="Cartão de Crédito"
        subtitle="A América oferece cartões de crédito de bancos parceiros, com benefícios exclusivos. Somos especialistas em conectar você às melhores opções financeiras, sem ser um banco."
        paragraph="Solicitar agora"
        imagePosition="left"
      />
      <Faq />
      <BlogInitial />
      <Footer />
    </div>
  );
}