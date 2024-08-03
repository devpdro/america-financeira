import { Icons } from '@/presentation/assets'
import { listLinkProps, IconsProps } from '@/data/models'

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
      { label: 'Trabalhe Conosco', link: '/trabalhe-conosco' },
      { label: 'Seja parceiro', link: '/seja-parceiro' },
      { label: 'Blog', link: '/blog' },
    ],
  },
]

export const icons: IconsProps[] = [
  {
    icon: Icons.BiLogoLinkedin,
    link: 'https://www.linkedin.com/company/am%C3%A9rica-financeira/mycompany/',
  },
  {
    icon: Icons.BiLogoInstagramAlt,
    link: 'https://www.instagram.com/america.financeira/',
  },
  {
    icon: Icons.FaYoutube,
    link: 'https://www.youtube.com/channel/UCFZ1B3eZmM9sSEc_SkwRFRQ',
  },
  {
    icon: Icons.BiLogoFacebook,
    link: 'https://www.facebook.com/americafinanceiraeseguros',
  },
  {
    icon: Icons.IoLogoWhatsapp,
    link: 'https://api.whatsapp.com/send?phone=5519999594454&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!',
  },
]
