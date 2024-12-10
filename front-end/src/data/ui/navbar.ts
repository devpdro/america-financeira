import { NavbarItemProps } from 'src/data/models'

export const MENU: NavbarItemProps[] = [
  {
    label: 'América Financeira',
    link: '#',
    children: [
      {
        label: 'Quem Somos',
        link: '/quem-somos',
      },
      {
        label: 'Nossas Unidades',
        link: '/nossas-unidades',
      },
      {
        label: 'Apresentação Institucional',
        link: '/apresentacao-institucional.pdf',
        new: 'PDF',
      },
    ],
  },
  {
    label: 'Simule seu Crédito',
    link: '#',
    children: [
      {
        label: 'Empréstimo Pessoal',
        link: '/emprestimo-pessoal',
      },
      {
        label: 'Empréstimo FGTS',
        link: '/emprestimo-fgts',
      },
      {
        label: 'Empréstimo Consignado',
        link: '/emprestimo-consignado',
      },
    ],
  },
  {
    label: 'Seja Parceiro',
    link: '/seja-um-parceiro',
  },
  {
    label: 'Carreira',
    link: '/trabalhe-conosco',
  },
]
