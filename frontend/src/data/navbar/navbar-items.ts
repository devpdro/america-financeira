import { NavItemTypes } from "@/presentation/@types";

const NavItems: NavItemTypes[] = [
  {
    label: "América Financeira",
    link: "/",
    children: [
      {
        label: "Quem Somos",
        link: "/quem-somos",
        // iconImage: todoImage,
      },
      {
        label: "Trabalhe Conosco",
        link: "/trabalhe-conosco",
      },
      {
        label: "Nossas Lojas",
        link: "#",
      },
    ],
  },
  {
    label: "Simule seu Crédito",
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
    label: "Seja Parceiro",
    link: "/seja-parceiro",
  },
  {
    label: "Blog",
    link: "/blog",
  },
];

export default NavItems;
