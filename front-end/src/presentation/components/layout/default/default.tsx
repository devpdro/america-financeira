import { type ReactNode } from 'react'

import { Navbar, Footer } from '@/presentation/components/common'
import { WhatsappButton } from '@/presentation/components/ui'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <>
    <Navbar />
    <main>{children}</main>
    <WhatsappButton />
    <Footer />
  </>
)

export default DefaultLayout
