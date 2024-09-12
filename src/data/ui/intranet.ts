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
    url: 'https://webmail.americafinanceira.com.br/',
    imageLinks: Images.webmail,
    info: [
      'Webmail é uma plataforma de correio eletrônico para acesso e gerenciamento de e-mails.',
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
  {
    name: 'Sistema Corban',
    url: 'https://gestao.sistemacorban.com.br/',
    imageLinks: Images.vanguard,
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
    image: Images.bancoBradesco,
    info: [
      'Ouvidoria Banco do Bradesco: 0800 704 8383',
      'Atendimento disponível das 9h às 18h, de segunda a sexta, exceto feriados.',
      'SAC Banco do Bradesco: 0800 727 9933',
    ],
  },
  {
    name: 'Banco Caixa Econômica Federal',
    url: 'https://www.caixa.gov.br',
    image: Images.bancoCaixa,
    info: [
      'Ouvidoria Banco Caixa Econômica Federal: 0800 726 0101',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Caixa Econômica Federal: 0800 726 0101',
    ],
  },
  {
    name: 'Banco Santander',
    url: 'https://www.santander.com.br',
    image: Images.bancoSantander,
    info: [
      'Ouvidoria Banco Santander: 0800 771 0401',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Santander: 0800 762 7777',
    ],
  },
  {
    name: 'Banco do Brasil',
    url: 'https://www.bb.com.br',
    image: Images.bancoBrasil,
    info: [
      'Ouvidoria Banco do Brasil: 0800 729 5678',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco do Brasil: 0800 729 0722',
    ],
  },
  {
    name: 'Banco Mercantil',
    url: 'https://meu.bancomercantil.com.br/login',
    image: Images.mercantil,
    info: [
      'Ouvidoria Banco Mercantil do Brasil: 0800 723 4500',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Mercantil do Brasil: 0800 723 4500',
    ],
  },
  {
    name: 'Banco Safra',
    url: 'https://www.safra.com.br',
    image: Images.bancoSafra,
    info: [
      'Ouvidoria Banco Safra: 0800 770 3000',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Safra: 0800 770 3000',
    ],
  },
  {
    name: 'Banco Itaú',
    url: 'https://www.itau.com.br',
    image: Images.bancoItau,
    info: [
      'Ouvidoria Banco Itaú: 0800 970 4848',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Itaú: 0800 728 0728',
    ],
  },
  {
    name: 'Banco Pan',
    url: 'https://www.bancopan.com.br',
    image: Images.bancoPan,
    info: [
      'Ouvidoria Banco Pan: 0800 770 2288',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Pan: 0800 776 8000',
    ],
  },
  {
    name: 'Banco Crefaz',
    url: 'https://www.crefaz.com.br',
    image: Images.crefaz,
    info: [
      'Ouvidoria Banco Crefaz: 0800 702 8555',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados.',
      'SAC Banco Crefaz: 0800 702 8555',
    ],
  },
]
