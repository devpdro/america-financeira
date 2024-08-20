import { IntranetItems } from '../models'

export const intranet: IntranetItems[] = [
  {
    id: 'bancos',
    title: 'Bancos Autorizados',
    items: [
      { label: 'Banco Banrisul', url: 'https://bemweb.bempromotora.com.br/autenticacao/login' },
      { label: 'Banco BMG', url: 'https://www.bmgconsig.com.br/Index.do?method=prepare' },
      { label: 'Banco Bonsucesso', url: 'https://digitacaoproposta.oleconsignado.com.br/PROPBSOEMP_DLL.Dll' },
      {
        label: 'Banco Bonsucesso Portal',
        url: 'https://sso.oleconsignado.com.br/adfs/ls?version=1.0&action=signin&realm=urn%3AAppProxy%3Acom&appRealm=e539654b-963e-e911-b81d-00505681f520&returnUrl=https%3A%2F%2Forienta.oleconsignado.com.br%2FPaginas%2Fhome.aspx&client-request-id=8E95803C-55FA-0003-A044-DD90FA55D501',
      },
      { label: 'Banco Bonsucesso Olé', url: 'https://ola.oleconsignado.com.br/' },
      { label: 'Banco Bradesco', url: 'https://www.bradescopromotoranet.com.br/Login.aspx' },
      {
        label: 'Banco C6 Bank',
        url: 'https://c6.c6consig.com.br/FIMenu/Login/AC.UI.LOGIN.aspx?FISession=5eec6adf9a72',
      },
      { label: 'Banco Daycoval', url: 'https://consignado.daycoval.com.br/Autorizador/Login/AC.UI.LOGIN.aspx' },
      { label: 'Banco JV Itaú', url: 'https://www.ibconsigweb.com.br/Index.do?method=prepare' },
      {
        label: 'Banco Mercantil',
        url: 'https://www2.mercantildobrasil.com.br/internetmb2/MB.Web.UI.PNW.EmprestimoConsignado/',
      },
      {
        label: 'Banco Pan',
        url: 'https://accounts-sso.bancopan.com.br/auth/realms/pan-parceiros/protocol/openid-connect/auth?client_id=pancred-fimenu&redirect_uri=https%3A%2F%2Fpanconsig.pansolucoes.com.br%2FFIMENU%2Fsignin-oidc&response_type=code&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3D59GdS_c4ftOPeZ_G8hFPHA_QIe9gBfCTxlHS3xQYU8zct-3KKsETU8IUNt7ZwacZ3Wj06csuDKCxVFe5rPmF4Cz4Bc0CY62OD9dyN8ocbQWuA2VaTtDcGfX3L2PXeQZGUze1sRaPmq_JokwDpGpHJVmrW2bwnzL7K0wJsoz2_agNvGdKIw9rEvB4JspZxHez9feRxBPGewEyKs4CHW83uw&response_mode=form_post&nonce=638597822715165746.ZTI0MjY0OGUtN2U2NS00NjE3LWI3YjItNjAxZTc3YzhjNmJiMDU1YjUwZjItNjljNi00NGU4LWJkNWMtNjI5NjNlN2JjNGE0&x-client-SKU=ID_NET461&x-client-ver=5.3.0.0',
      },
      { label: 'Banco Safra', url: 'https://epfweb.safra.com.br/Home/Login' },
      { label: 'PoupaCred', url: 'https://poupacred.nodesistemas.com.br/' },
      { label: 'Crefaz', url: 'https://crefaz.com.br/webagente+/' },
      { label: 'Paraná Banco', url: 'https://portalconsignado.paranabanco.com.br/Account/Login?ReturnUrl=%2F' },
      { label: 'Via Certa', url: 'https://erc.viacertafinanciadora.com.br/atendimento/' },
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
