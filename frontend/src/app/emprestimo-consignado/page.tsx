import { Header, Navbar } from "@/presentation/components/Common";

export default function payrollLoan() {
  return (
    <div>
      <h1>
        <Navbar />
        <Header
          title="Empréstimo Consignado"
          subtitle={
            <>
              Dinheiro extra para <br /> alcançar seus planos e <br /> realizar
              os seus sonhos
            </>
          }
          paragraph="*Sujeito à analise de crédito e condições do produto"
        />
      </h1>
    </div>
  );
}
