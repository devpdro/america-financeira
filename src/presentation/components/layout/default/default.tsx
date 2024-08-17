import { ReactNode } from 'react'

import { Navbar, Footer } from '@/presentation/components/common'

interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

export default DefaultLayout
