import { ReactElement } from "react";
import { Images } from "@/presentation/assets";

// Definição do tipo para cada item do array
interface LoanBenefitItem {
  title: string;
  subtitle: string;
  image?: string;
}

const LoanBenefitsItems: LoanBenefitItem[] = [
  {
    title: "Seguro Acidentes Pessoais com Sorteio",
    subtitle:
      "Tenha estabilidade financeira em caso de acidente ou morte e conte ainda com a cobertura desemprego e com sorteios de até R$ 10.000.",
  },
  {
    title: "Seguro Empréstimo",
    subtitle:
      "Garanta o pagamento de suas parcelas em situações imprevistas e tenha mais tranquilidade para organizar sua vida financeira.",
  },
  {
    title: "Seguro Cartão Protegido com Sorteio",
    subtitle:
      "Tranquilidade para você em caso de roubo ou furto do seu cartão. Conte ainda com as melhores coberturas e sorteios mensais de até R$ 50.000.",
  },
];

export default LoanBenefitsItems;
