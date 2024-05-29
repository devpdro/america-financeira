import { NavItem } from "@/presentation/@types";

const NavItems: NavItem[] = [
  {
    label: "América Financeira",
    link: "#",
    children: [
      {
        label: "Quem somos",
        link: "#",
        // iconImage: todoImage,
      },
      {
        label: "Trabalhe conosco",
        link: "#",
      },
      {
        label: "Intranet",
        link: "#",
      },
    ],
  },
  {
    label: "Simule seu crédito",
    link: "#",
    children: [
      {
        label: "Empréstimo Pessoal",
        link: "#",
      },
      {
        label: "Empréstimo Consignado",
        link: "#",
      },
      {
        label: "Antecipação FGTS",
        link: "#",
      },
      {
        label: "Consórcio",
        link: "#",
      },
    ],
  },
  {
    label: "Seja parceiro",
    link: "#",
  },
  {
    label: "Ajuda",
    link: "#",
  },
];

export default NavItems;
