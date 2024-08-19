import { IntranetItems } from '../models'

export const intranet: IntranetItems[] = [
  {
    id: 'bancos',
    title: 'Bancos Autorizados',
    items: [
      { label: 'BrFlow', url: 'https://brflow.com' },
      { label: 'BV Financeira', url: 'https://bvfinanceira.com' },
      { label: 'Banco BGN', url: 'https://bgn.com' },
      { label: 'Celtem', url: 'https://celetm.com' },
      { label: 'Banco Sabemi', url: 'https://sulfinanceira.com' },
      { label: 'Sul Financeira', url: 'https://sulfinanceira.com' },
      { label: 'PortoCred', url: 'https://portocred.com' },
      { label: 'Santander', url: 'https://www.parceirosantander.com.br/spa-base/landing-page' },
    ],
  },
  {
    id: 'links',
    title: 'Links Úteis',
    items: [
      { label: 'Kolmeta', url: 'https://kolmeta.com' },
      { label: 'n8n', url: 'https://n8n.io' },
      { label: 'Chathot', url: 'https://app.chathot.com.br/login' },
      { label: '4net Solutions', url: 'https://4netsolutions.net.br/' },
      { label: 'Sistema Corban', url: 'https://gestao.sistemacorban.com.br/' },
      { label: 'GapSys', url: 'https://app.gapsys.com.br/login' },
      { label: 'HotSys', url: 'https://hotsys.com.br/#/login' },
      { label: 'KingHost', url: 'https://kinghost.com.br' },
    ],
  },
  {
    id: 'seguradoras',
    title: 'Seguradoras',
    items: [
      { label: 'BMG Saúde', url: '#' },
      { label: 'Cartão Odonto', url: '#' },
      { label: 'Seguro Auto - Redentor', url: '#' },
    ],
  },
]
