import { SatisfiedCustomers } from "@/presentation/components/SatisfiedCustomers";

type SatisfiedCustomersProps = {
  key: number;
  paragraph: string;
  name: string;
  about: string;
};

const itemsSatisfiedCustomers: SatisfiedCustomersProps[] = [
  {
    key: 1,
    paragraph:
      " Atendimento prático, consegui ajudar meu filho a quitar as prestações do carro.",
    name: "Maria de Lourdes",
    about: "Aposentada, 78 anos",
  },
  {
    key: 2,
    paragraph: "Muito satisfeito, consegui acertar minha dívida com o banco.",
    name: "Paulo Marcelo",
    about: "Aposentado, 69 anos",
  },
  {
    key: 3,
    paragraph:
      "Atendente teve enorme paciencia comigo, e consegui ajudar o meu filho a quitar a casa.",
    name: "Rosalina Almeida",
    about: "Aposentada, 72 anos",
  },
];

export default itemsSatisfiedCustomers;
