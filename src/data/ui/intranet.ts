import { Images } from '@/presentation/assets'
import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons'

interface IntranetLink {
  name: string
  url?: string
  icone?: IconType
  image?: StaticImageData
  imageLinks?: StaticImageData
  info: string[]
}

export const intranetLinks: IntranetLink[] = [
  {
    name: 'Webmail',
    url: 'https://kolmeya.com.br/auth/login',
    imageLinks: Images.webmail,
    info: [
      'Kolmeya é uma plataforma de inteligência de dados focada em melhorar a eficiência operacional.',
      'Horário de Atendimento: 9h às 18h, de segunda a sexta-feira.',
      'Contato: suporte@kolmeya.com.br',
    ],
  },
  {
    name: 'KingHost',
    url: 'https://kinghost.com.br',
    imageLinks: Images.kingHost,
    info: [
      'KingHost oferece serviços de hospedagem de sites e soluções em nuvem.',
      'Horário de Atendimento: 24/7 (Suporte online).',
      'Contato: suporte@kinghost.com.br',
    ],
  },
  {
    name: 'N8n',
    url: 'https://n8n.io',
    imageLinks: Images.n8n,
    info: [
      'N8n é uma ferramenta de automação de fluxo de trabalho que permite a criação de integrações personalizadas entre diferentes serviços.',
      'Horário de Atendimento: 24/7 (Suporte online).',
      'Documentação completa disponível no site.',
    ],
  },
  {
    name: 'Sistema Corban',
    url: 'https://gestao.sistemacorban.com.br/',
    imageLinks: Images.chat,
    info: [
      'Sistema Corban é uma ferramenta de gestão financeira para empresas.',
      'Horário de Atendimento: 9h às 17h, de segunda a sexta-feira.',
      'Contato: suporte@sistemacorban.com.br',
    ],
  },
  {
    name: 'Chathot',
    url: 'https://app.chathot.com.br/login',
    imageLinks: Images.chat,
    info: [
      'Chathot oferece uma plataforma para comunicação instantânea e atendimento ao cliente.',
      'Horário de Atendimento: 8h às 20h, de segunda a sexta-feira.',
      'Contato: suporte@chathot.com.br',
    ],
  },
  {
    name: 'GapSys',
    url: 'https://app.gapsys.com.br/login',
    imageLinks: Images.gapSys,
    info: [
      'GapSys é um sistema de gestão de operações e processos empresariais.',
      'Horário de Atendimento: 8h às 18h, de segunda a sexta-feira.',
      'Contato: suporte@gapsys.com.br',
    ],
  },
  {
    name: 'HotSys',
    url: 'https://hotsys.com.br/#/login',
    imageLinks: Images.Sys,
    info: [
      'HotSys é uma solução de gerenciamento de vendas e relacionamento com o cliente.',
      'Horário de Atendimento: 9h às 18h, de segunda a sexta-feira.',
      'Contato: contato@hotsys.com.br',
    ],
  },
  {
    name: '4Net Solutions',
    url: 'https://4netsolutions.net.br/',
    imageLinks: Images.fourrnet,
    info: [
      '4Net Solutions é especializada em soluções de infraestrutura de rede e segurança digital.',
      'Horário de Atendimento: 8h às 18h, de segunda a sexta-feira.',
      'Contato: contato@4netsolutions.net.br',
    ],
  },
]

export const intranetBanks: IntranetLink[] = [
  {
    name: 'Banco do Bradesco',
    url: 'https://www.bradesco.com.br',
    image: Images.bancoBradesco,
    info: [
      'Ouvidoria Banco do Bradesco',
      'Atendimento disponível das 9h às 18h, de segunda a sexta, exceto feriados.',
      'SAC Banco do Bradesco',
    ],
  },
  {
    name: 'Banco Caixa Econômica Federal',
    url: 'https://www.caixa.gov.br',
    image: Images.bancoCaixa,
    info: [
      'Ouvidoria Banco Caixa Econômica Federal',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Caixa Econômica Federal',
    ],
  },
  {
    name: 'Banco Santander',
    url: 'https://www.santander.com.br',
    image: Images.bancoSantander,
    info: [
      'Ouvidoria Banco Santander',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Santander',
    ],
  },
  {
    name: 'Banco do Brasil',
    url: 'https://www.bb.com.br',
    image: Images.bancoBrasil,
    info: [
      'Ouvidoria Banco do Brasil',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco do Brasil',
    ],
  },
  {
    name: 'Banco Mercantil do Brasil',
    url: 'https://www.mercantil.com.br',
    image: Images.mercantil,
    info: [
      'Ouvidoria Banco Mercantil do Brasil',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Mercantil do Brasil',
    ],
  },
  {
    name: 'Banco Safra',
    url: 'https://www.safra.com.br',
    image: Images.bancoSafra,
    info: [
      'Ouvidoria Banco Safra',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Safra',
    ],
  },
  {
    name: 'Banco Itaú',
    url: 'https://www.itau.com.br',
    image: Images.bancoItau,
    info: [
      'Ouvidoria Banco Itaú',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Itaú',
    ],
  },
  {
    name: 'Banco Pan',
    url: 'https://www.bancopan.com.br',
    image: Images.bancoPan,
    info: [
      'Ouvidoria Banco Pan',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Pan',
    ],
  },
  {
    name: 'Banco Crefaz',
    url: 'https://www.crefaz.com.br',
    image: Images.crefaz,
    info: [
      'Ouvidoria Banco Crefaz',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Crefaz',
    ],
  },
]
