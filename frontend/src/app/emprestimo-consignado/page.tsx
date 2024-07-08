import { Header, Navbar, Faq, ContractorVerifier } from "@/presentation/components/Common";
import { ConsinedLoanInfo, Simulation } from "@/presentation/components";
import { Images } from "@/presentation/assets";
import payrollLoansCategories from "@/data/categories/payroll-loans-categories";
import HiringBenefits from "@/presentation/components/Common/HiringBenefits/hiring-benefits";

export default function payrollLoan() {
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
      <ConsinedLoanInfo   title="O que é a antecipação FGTS"
        subtitle="Saiba mais"
        paragraph="O empréstimo consignado é uma forma de crédito vantajosa com taxa de
          juros mais baixas para aposentados e pensionistas do INSS, servidores
          públicos, além de beneficiários de programas sociais, no qual o
          pagamento das parcelas é descontado diretamente da folha de pagamento
          do solicitante."/>
      <ContractorVerifier categories={payrollLoansCategories}/>
      <HiringBenefits />
      <Faq />
    </div>
  );
}
