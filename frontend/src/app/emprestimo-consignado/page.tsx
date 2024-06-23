import { Header, Navbar, Faq } from "@/presentation/components/Common";
import { ConsinedLoanInfo, Simulation } from "@/presentation/components";

export default function payrollLoan() {
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
        showDetails={false}
      />
      <ConsinedLoanInfo />
      <Simulation />
      <Faq />
    </div>
  );
}
