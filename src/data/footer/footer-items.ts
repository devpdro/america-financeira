type FooterTypes = {
  title: string;
  items: Array<{ label: string; link?: string }>;
};

const FooterItems: FooterTypes[] = [
  {
    title: "Produtos",
    items: [
      { label: "Empréstimo Pessoal", link: "/emprestimo-pessoal" },
      { label: "Empréstimo Consignado", link: "/emprestimo-consignado" },
      { label: "Empréstimo FGTS", link: "/emprestimo-fgts" },
    ],
  },
  {
    title: "Central de Atendimento",
    items: [
      { label: "0800 000 0120 (ouvidoria)" },
      { label: "Atendimento das 9h às 18h (dias úteis)" },
    ],
  },
  {
    title: "Outras informações",
    items: [
      { label: "Quem somos", link: "/quem-somos" },
      { label: "Trabalhe Conosco", link: "/trabalhe-conosco" },
      { label: "Seja parceiro", link: "/seja-parceiro" },
      { label: "Blog", link: "/blog" },
    ],
  },
];

export default FooterItems;
