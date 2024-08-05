import { Header } from '@/presentation/components/common'
import { Timeline, Team } from '@/presentation/components/ui'
import { Footer, Navbar } from '@/presentation/components/layout'
import { Images } from '@/presentation/assets'

export default function About() {
  const backgroundImageUrl = Images.cartaoDebito

  return (
    <main>
      <Navbar />
      <Header
        title="Sobre a América Financeira"
        subtitle={
          <>
            Inovação e confiança <br /> para realizar seus sonhos <br /> financeiros
          </>
        }
        showParagraph="Conheça nossa trajetória e conquistas ao longo dos anos"
        showLoanRequest={false}
        showDetails={false}
        backgroundImage={backgroundImageUrl.src}
      />
      <Timeline />
      <Team />
      <Footer />
    </main>
  )
}
