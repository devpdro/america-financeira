import { NavItemTypes } from "@/presentation/@types";

const NavItems: NavItemTypes[] = [
  {
    label: "América Financeira",
    link: "/",
    children: [
      {
        label: "Quem somos",
        link: "/quem-somos",
        // iconImage: todoImage,
      },
      {
        label: "Trabalhe conosco",
        link: "/trabalhe-conosco",
      },
    ],
  },
  {
    label: "Simule seu crédito",
    link: "#",
    children: [
      {
        label: "Empréstimo Pessoal",
        link: "/emprestimo-pessoal",
      },
      {
        label: "Empréstimo Consignado",
        link: "/emprestimo-consignado",
      },
      {
        label: "Antecipação FGTS",
        link: "/antecipacao-fgts",
      },
    ],
  },
  {
    label: "Seja parceiro",
    link: "/seja-parceiro",
  },
  {
    label: "Blog",
    link: "/blog",
  },
];

export default NavItems;
