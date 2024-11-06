import { Meta } from 'src/presentation/components'

import { InformationPolicy } from '@/presentation/components/ui'
import { termsOfUse } from '@/data/ui'

import S from './terms-of-use.module.scss'

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

    <InformationPolicy
      title={termsOfUse.title}
      paragraph={termsOfUse.paragraph}
      introductionTitle={termsOfUse.introductionTitle}
      listItems={termsOfUse.listItems}
      finishedTitle={termsOfUse.finishedTitle}
      finishedParagraph={termsOfUse.finishedParagraph}
    />
  </div>
)

export default TermsAgreement
