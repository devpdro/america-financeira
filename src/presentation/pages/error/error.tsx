import { Footer, Navbar } from '@/presentation/components/layout'
import { ErrorDisplay } from '@/presentation/components/ui'

export default function Error() {
  return (
    <main>
      <Navbar />
      <ErrorDisplay />
      <Footer />
    </main>
  )
}
