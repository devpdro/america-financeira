import { HeaderPolicy, InformationPolicy } from '@/presentation/components/ui'
import { Footer, Navbar } from '@/presentation/components/layout'
import { privacyPolicy } from '@/data/ui'

export default function PrivacyPolicy() {
  return (
    <main>
      <Navbar />
      <HeaderPolicy title="Política de Privacidade" />
      <InformationPolicy
        title={privacyPolicy.title}
        paragraph={privacyPolicy.paragraph}
        introductionTitle={privacyPolicy.introductionTitle}
        listItems={privacyPolicy.listItems}
        finishedTitle={privacyPolicy.finishedTitle}
        finishedParagraph={privacyPolicy.finishedParagraph}
      />
      <Footer />
    </main>
  )
}
