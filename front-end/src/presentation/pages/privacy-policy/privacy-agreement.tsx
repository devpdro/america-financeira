import { Meta } from 'src/presentation/components'

import { HeaderPolicy, InformationPolicy } from '@/presentation/components/ui'
import { privacyPolicy } from '@/data/ui'

const PrivacyAgreement = () => (
  <div>
    <Meta
      title="Política de privacidade"
      description="Leia a Política de Privacidade da América Financeira e saiba como protegemos e utilizamos suas informações pessoais."
      keywords="política de privacidade, América Financeira, informações pessoais, proteção de dados, privacidade"
    />

    <HeaderPolicy title="Política de Privacidade" />
    <InformationPolicy
      title={privacyPolicy.title}
      paragraph={privacyPolicy.paragraph}
      introductionTitle={privacyPolicy.introductionTitle}
      listItems={privacyPolicy.listItems}
      finishedTitle={privacyPolicy.finishedTitle}
      finishedParagraph={privacyPolicy.finishedParagraph}
    />
  </div>
)

export default PrivacyAgreement
