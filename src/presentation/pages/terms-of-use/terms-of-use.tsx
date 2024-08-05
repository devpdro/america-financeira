import { HeaderPolicy, InformationPolicy } from '@/presentation/components/ui'
import { Footer, Navbar } from '@/presentation/components/layout'
import { termsOfUse } from '@/data/ui'

export default function TermsOfUse() {
  return (
    <main>
      <Navbar />
      <HeaderPolicy title="Termos de Uso" />
      <InformationPolicy
        title={termsOfUse.title}
        paragraph={termsOfUse.paragraph}
        introductionTitle={termsOfUse.introductionTitle}
        listItems={termsOfUse.listItems}
        finishedTitle={termsOfUse.finishedTitle}
        finishedParagraph={termsOfUse.finishedParagraph}
      />
      <Footer />
    </main>
  )
}
