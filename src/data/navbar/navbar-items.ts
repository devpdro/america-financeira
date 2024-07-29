import { NavItemTypes } from "@/presentation/@types";

const NavItems: NavItemTypes[] = [
  {
    label: "América Financeira",
    link: "#",
    children: [
      {
        label: "Quem Somos",
        link: "/quem-somos",
      },
      {
        label: "Nossas Unidades",
        link: "https://www.google.com/maps/search/Am%C3%A9rica+Financeira/@-22.3971915,-48.0358251,10z/data=!3m1!4b1?entry=ttu",
      },
      {
        label: "Nossa Último Treinamento",
        link: "https://www.youtube.com/watch?v=mMnM4dBdH6s",
        new: "NOVO",
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
        label: "Empréstimo FGTS",
        link: "/emprestimo-fgts",
      },
    ],
  },
  {
    label: "Seja Parceiro",
    link: "/parceiros",
  },
  {
    label: "Blog",
    link: "/blog",
  },
];

export default NavItems;
