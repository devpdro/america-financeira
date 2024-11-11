import { Meta, Terms } from 'src/presentation/components'

import S from './terms-agreement.module.scss'

const TERMS = {
  title: 'Diretrizes de Utilização do Site',
  overview:
    'Os seguintes termos e condições regem todo o uso do site da América Financeira e todos os conteúdos, serviços e produtos disponíveis no ou através do site. O site é de propriedade e operado pela América Financeira. O site é oferecido sujeito à sua aceitação sem modificação de todos os termos e condições contidos aqui e todas as outras regras de operação, políticas (incluindo, sem limitação, a Política de Privacidade da América Financeira) e procedimentos que podem ser publicadas de tempos em tempos neste Site pela América Financeira (coletivamente, o "Acordo").',
  introduction: 'Aceitação dos Termos',
  items: [
    {
      title: 'Acesso e Uso do Site',
      description:
        'Ao acessar ou usar qualquer parte do site, você concorda em se vincular a estes termos de uso. Se você não concorda com todos os termos e condições deste acordo, então você não pode acessar o site ou usar quaisquer serviços.',
    },
    {
      title: 'Direitos de Propriedade Intelectual',
      description:
        'Este site e todos os seus conteúdos, características e funcionalidades (incluindo mas não limitado a toda informação, software, texto, displays, imagens, vídeo e áudio, e o design, seleção e arranjo dos mesmos), são propriedade da América Financeira, seus licenciadores ou outros provedores de tais materiais e são protegidos por direitos autorais, marcas registradas, patentes, segredos comerciais e outras leis de propriedade intelectual ou direitos de propriedade.',
    },
    {
      title: 'Uso Permitido',
      description:
        'Você está autorizado a usar o site apenas para fins pessoais e não comerciais. Você não deve usar qualquer conteúdo disponível no site para qualquer outro propósito sem a permissão prévia por escrito da América Financeira.',
    },
    {
      title: 'Limitação de Responsabilidade',
      description:
        'Em nenhum caso a América Financeira, nem seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados, serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo sem limitação, perda de lucros, dados, uso, boa vontade, ou outras perdas intangíveis, resultantes de (i) seu acesso a ou uso de ou incapacidade de acessar ou usar o site; (ii) qualquer conduta ou conteúdo de terceiros no site.',
    },
    {
      title: 'Modificações',
      description:
        'A América Financeira reserva-se o direito de modificar ou substituir qualquer parte destes termos. É sua responsabilidade verificar estes termos periodicamente por mudanças. Seu uso contínuo de ou acesso ao site após a publicação de quaisquer mudanças nestes termos constitui aceitação dessas mudanças.',
    },
    {
      title: 'Contato',
      description:
        'Quaisquer dúvidas sobre os Termos de Uso devem ser enviadas para nós através do nosso canal de contato disponível no site.',
    },
  ],
  conclusion: 'Disposições Gerais',
  description:
    'Estes Termos de Uso são regidos e interpretados de acordo com as leis do Brasil, sem considerar conflitos de disposições legais. Nossa falha em fazer cumprir qualquer direito ou disposição destes Termos não será considerada uma renúncia a esses direitos. Se qualquer disposição destes Termos for considerada inválida ou inexecutável por um tribunal, as demais disposições destes Termos continuarão em vigor. Estes Termos constituem o acordo completo entre nós em relação ao nosso site, e substituem quaisquer acordos anteriores que possamos ter entre nós em relação ao site.',
}

const TermsAgreement = () => (
  <div className={S.container}>
    <Meta
      title="Termos de uso"
      description="Leia os Termos de Uso da América Financeira e entenda as condições e políticas para utilizar nossos serviços."
      keywords="termos de uso, América Financeira, políticas, condições, serviços"
    />

    <div className={S['header']}>
      <h1 className={S.title}>Termos de uso</h1>
    </div>

    <Terms
      title={TERMS.title}
      overview={TERMS.overview}
      introduction={TERMS.introduction}
      items={TERMS.items}
      conclusion={TERMS.conclusion}
      description={TERMS.description}
    />
  </div>
)

export default TermsAgreement
