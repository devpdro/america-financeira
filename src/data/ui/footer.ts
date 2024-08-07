import { listLinkProps } from '@/data/models'

export const list: listLinkProps[] = [
  {
    title: 'Produtos',
    items: [
      { label: 'Empréstimo Pessoal', link: '/emprestimo-pessoal' },
      { label: 'Empréstimo Consignado', link: '/emprestimo-consignado' },
      { label: 'Empréstimo FGTS', link: '/emprestimo-fgts' },
    ],
  },
  {
    title: 'Central de Atendimento',
    items: [{ label: '0800 000 0120 (ouvidoria)' }, { label: 'Atendimento das 9h às 18h (dias úteis)' }],
  },
  {
    title: 'Outras informações',
    items: [
      { label: 'Quem somos', link: '/quem-somos' },
      { label: 'Seja parceiro', link: '/parceiros' },
      { label: 'Intranet', link: '/intranet' },
      {
        label: 'Nossas Unidades',
        link: 'https://www.google.com/maps/search/Am%C3%A9rica+Financeira/@-22.3971915,-48.0358251,10z/data=!3m1!4b1?entry=ttu',
      },
    ],
  },
]
