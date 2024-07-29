import { CombinedCarouselTypes } from "@/presentation/@types";

const LoanCarouselItems: CombinedCarouselTypes[] = [
  {
    key: 1,
    title: "Empréstimo Pessoal",
    subtitle:
      "Dinheiro rápido com condições especiais para você usar como quiser.",
    link: "/emprestimo-pessoal",
  },
  {
    key: 2,
    title: "Empréstimo Consignado",
    subtitle: "Para beneficiários do INSS com taxas a partir de 1,90% a.m.",
    link: "/emprestimo-consignado",
  },
  {
    key: 3,
    title: "Empréstimo FGTS",
    subtitle:
      "Antecipe até 10 parcelas do saque-aniversário FGTS com a menor taxa.",
    link: "/emprestimo-fgts",
  },
];

export default LoanCarouselItems;
