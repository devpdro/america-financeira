import { IntranetItems } from '../models'

export const intranet: IntranetItems[] = [
  {
    id: 'bancos',
    title: 'Bancos Autorizados',
    items: [
      { label: 'BR Flow', url: 'https://www.brflow.com.br/autenticacao/autenticacao/login' },
      { label: 'BV Financeira', url: 'https://www.bvfinanceira.com.br/acesso/parceiros/' },
      { label: 'Banco Sabemi', url: 'https://www.portalseguro.srv.br/Login.aspx?ReturnUrl=%2f' },
      {
        label: 'Sul Financeira',
        url: 'https://webcdc.ccbfinanceira.com.br/Login/AC.UI.LOGIN.aspx?FISession=aad575eeeb01',
      },
      { label: 'Santander', url: 'https://www.parceirosantander.com.br/spa-base/landing-page' },
    ],
  },
  {
    id: 'links',
    title: 'Links Úteis',
    items: [
      { label: 'Kolmeya', url: 'https://kolmeya.com.br/auth/login' },
      { label: 'N8n', url: 'https://n8n.io' },
      { label: 'Chathot', url: 'https://app.chathot.com.br/login' },
      { label: '4Net Solutions', url: 'https://4netsolutions.net.br/' },
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
      { label: 'Seguro Auto', url: '#' },
    ],
  },
]
