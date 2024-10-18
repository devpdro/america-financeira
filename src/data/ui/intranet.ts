import { Images } from '@/presentation/assets'
import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

interface IntranetLink {
  name: string
  url?: string
  icone?: IconType
  image?: StaticImageData
  imageLinks?: StaticImageData
  info?: string[]
}

export const intranetLinks: IntranetLink[] = [
  {
    name: 'Webmail',
    url: 'https://webmail.americafinanceira.com.br/',
  },
  {
    name: 'KingHost',
    url: 'https://kinghost.com.br',
  },
  {
    name: 'N8n',
    url: 'https://n8n.io',
  },
  {
    name: 'GapSys',
    url: 'https://app.gapsys.com.br/login',
  },
  {
    name: 'Chathot',
    url: 'https://app.chathot.com.br/login',
    imageLinks: Images.chat,
  },
  {
    name: 'HotSys',
    url: 'https://hotsys.com.br/#/login',
  },
  {
    name: '4Net Solutions',
    url: 'https://4netsolutions.net.br/',
  },
  {
    name: 'Sistema Corban',
    url: 'https://gestao.sistemacorban.com.br/',
    info: [
      'Sistema Corban é uma ferramenta de gestão financeira para empresas.',
      'Horário de Atendimento: 9h às 17h, de segunda a sexta-feira.',
      'Contato: suporte@sistemacorban.com.br',
    ],
  },
]

export const intranetBanks: IntranetLink[] = [
  {
    name: 'Banco do Bradesco',
    url: 'https://www.bradesco.com.br',
  },
  {
    name: 'Banco Caixa Econômica Federal',
  },
  {
    name: 'Banco Santander',
    url: 'https://www.santander.com.br',
  },
  {
    name: 'Banco do Brasil',
    url: 'https://www.bb.com.br',
  },
  {
    name: 'Banco Mercantil',
    url: 'https://meu.bancomercantil.com.br/login',
  },
  {
    name: 'Banco Safra',
    url: 'https://www.safra.com.br',
  },
  {
    name: 'Banco Itaú',
    url: 'https://www.itau.com.br',
  },
  {
    name: 'Banco Pan',
    url: 'https://www.bancopan.com.br',
  },
  {
    name: 'Banco Crefaz',
    url: 'https://www.crefaz.com.br',
  },
]
