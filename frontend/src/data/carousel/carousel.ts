import { IconType } from "react-icons";
import { FaArrowRightLong } from "react-icons/fa6";

import { Icons } from "@/presentation/assets/";

interface CarouselItem {
  key: number;
  title: string;
  subtitle: string;
  icon: IconType;
}

const itemsCarousel: CarouselItem[] = [
  {
    key: 1,
    title: "Empréstimo Pessoal",
    subtitle: "Dinheiro rápido pra usar como quiser e condições exclusivas.",
    icon: FaArrowRightLong,
  },
  {
    key: 2,
    title: "Empréstimo Consignado",
    subtitle:
      "Para aposentados e pensionistas do INSS com taxas a partir de 1,90% a.m.",
    icon: FaArrowRightLong,
  },
  {
    key: 3,
    title: "Empréstimo FGTS",
    subtitle:
      "Antecipe até 10 parcelas do seu saque-aniversário FGTS com a menor taxa do mercado",
    icon: FaArrowRightLong,
  },
  {
    key: 4,
    title: "Consórcio",
    subtitle:
      "Adquira imóveis, veículos ou serviços com planejamento e sem juros altos.",
    icon: FaArrowRightLong,
  },
];

export default itemsCarousel;
