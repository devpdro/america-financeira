import { CarouselItemsTypes } from "@/presentation/@types";

const LoanCarouselItems: CarouselItemsTypes[] = [
  {
    key: 1,
    title: "Empréstimo Pessoal",
    subtitle: "Dinheiro rápido pra usar como quiser e condições exclusivas.",
    link: "/emprestimo-pessoal",
  },
  {
    key: 2,
    title: "Empréstimo Consignado",
    subtitle:
      "Para aposentados e pensionistas do INSS com taxas a partir de 1,90% a.m.",
    link: "/emprestimo-consignado",
  },
  {
    key: 3,
    title: "Empréstimo FGTS",
    subtitle:
      "Antecipe até 10 parcelas do seu saque-aniversário FGTS com a menor taxa do mercado",
    link: "/antecipacao-fgts",
  },
];

export default LoanCarouselItems;
