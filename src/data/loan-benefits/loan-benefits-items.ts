import { ReactElement } from "react";
import { Images } from "@/presentation/assets";

// Definição do tipo para cada item do array
interface LoanBenefitItem {
  title: string;
  subtitle: string;
  image: string;
}

const LoanBenefitsItems: LoanBenefitItem[] = [
  {
    title: "A taxa mais baixa",
    subtitle:
      "A partir de 1,29% a.m. A menor em relação aos outros empréstimos e bancos.",
    image: Images.NoDebt.src,
  },
  {
    title: "Sem dívidas",
    subtitle: "O pagamento é descontado do saldo do próprio FGTS.",
    image: Images.NoDebt.src,
  },
  {
    title: "Disponível para negativado",
    subtitle: "Você pode contratar, mesmo com o nome negativado.",
    image: Images.NoDebt.src,
  },
  {
    title: "Receba no mesmo dia",
    subtitle:
      "São 10 parcelas anuais do seu Saque-aniversário direto na sua conta de uma vez.",
    image: Images.NoDebt.src,
  },
];

export default LoanBenefitsItems;
