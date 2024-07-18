import { ReactElement } from "react";
import {
  FaPercentage,
  FaMoneyCheckAlt,
  FaUserCheck,
  FaRegClock,
} from "react-icons/fa";

// Definição do tipo para cada item do array
interface LoanBenefitItem {
  title: string;
  subtitle: string;
  icon: ReactElement;
}

const LoanBenefitsItems: LoanBenefitItem[] = [
  {
    title: "A taxa mais baixa",
    subtitle:
      "A partir de 1,29% a.m. A menor em relação aos outros empréstimos e bancos.",
    icon: FaPercentage({}),
  },
  {
    title: "Sem dívidas",
    subtitle: "O pagamento é descontado do saldo do próprio FGTS.",
    icon: FaMoneyCheckAlt({}),
  },
  {
    title: "Disponível para negativado",
    subtitle: "Você pode contratar, mesmo com o nome negativado.",
    icon: FaUserCheck({}),
  },
  {
    title: "Receba no mesmo dia",
    subtitle:
      "São 10 parcelas anuais do seu Saque-aniversário direto na sua conta de uma vez.",
    icon: FaRegClock({}),
  },
];

export default LoanBenefitsItems;
