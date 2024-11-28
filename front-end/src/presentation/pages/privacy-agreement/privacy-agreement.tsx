import { Meta, Terms } from 'src/presentation/components'

import S from './privacy-agreement.module.scss'

const POLICY = {
  title: 'Aviso de Privacidade',
  overview:
    'A sua privacidade é extremamente importante para nós. A América Financeira está comprometida com a proteção da privacidade e da segurança de todas as informações pessoais que coletamos de nossos usuários, conforme descrito em nossa política de privacidade.',
  introduction: 'Nosso Compromisso',
  items: [
    {
      title: 'Coleta de Informação',
      description:
        'Coletamos informações pessoais apenas para fins específicos, claros e legais. Estamos transparentes sobre as informações que coletamos e por que as coletamos.',
    },
    {
      title: 'Consentimento',
      description:
        'Solicitamos seu consentimento antes de coletar ou usar suas informações pessoais para qualquer finalidade não listada nesta política. Você tem o direito de retirar seu consentimento a qualquer momento.',
    },
    {
      title: 'Retenção de Informação',
      description:
        'Armazenamos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos especificados, a menos que um período de retenção mais longo seja exigido ou permitido por lei.',
    },
    {
      title: 'Proteção de Dados',
      description:
        'Implementamos medidas de segurança físicas, técnicas e administrativas para proteger suas informações pessoais contra acesso, uso, alteração e divulgação não autorizados.',
    },
    {
      title: 'Direitos do Usuário',
      description:
        'Você tem direito a acessar, corrigir, excluir ou transferir suas informações pessoais que temos. Também pode solicitar que restrinjamos o processamento de suas informações.',
    },
    {
      title: 'Compartilhamento de Informações',
      description:
        'Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais, exceto conforme necessário para cumprir um pedido legítimo ou para cumprir uma obrigação legal.',
    },
    {
      title: 'Sites Externos',
      description:
        'Não nos responsabilizamos pelas práticas de privacidade de sites externos. Recomendamos que você leia as políticas de privacidade de qualquer site que visite.',
    },
    {
      title: 'Atualizações da Política',
      description:
        'Podemos atualizar nossa política de privacidade periodicamente. Avisaremos você sobre quaisquer mudanças significativas na forma como tratamos as informações pessoais, publicando um aviso em nosso site.',
    },
    {
      title: 'Contato',
      description:
        'Se você tiver perguntas ou preocupações sobre nossa política de privacidade ou práticas de dados, entre em contato com nosso responsável pela proteção de dados.',
    },
    {
      title: 'Uso do Site',
      description:
        'Seu uso contínuo de nosso site após quaisquer mudanças ou atualizações da política será considerado como aceitação das mesmas.',
    },
  ],
  conclusion: 'Mais Informações',
  description:
    'Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site. Esta política é efetiva a partir de Maio/2021.',
}

const PrivacyAgreement = () => (
  <div className={S.container}>
    <Meta
      title="Política de privacidade"
      description="Leia a Política de Privacidade da América Financeira e saiba como protegemos e utilizamos suas informações pessoais."
      keywords="política de privacidade, América Financeira, informações pessoais, proteção de dados, privacidade"
    />

    <div className={S['header']}>
      <div className={S.box}>
        <h1 className={S.title}>Política de Privacidade</h1>
      </div>
    </div>

    <Terms
      title={POLICY.title}
      overview={POLICY.overview}
      introduction={POLICY.introduction}
      items={POLICY.items}
      conclusion={POLICY.conclusion}
      description={POLICY.description}
    />
  </div>
)

export default PrivacyAgreement
