import { type ReactNode } from 'react'

import { Navbar, Footer } from 'src/presentation/components'

import { IconX } from '@tabler/icons-react'

import S from './default.module.scss'
interface DefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <div>
    <Navbar />
    <main>{children}</main>

    <a
      href="https://api.whatsapp.com/send?phone=5519999594454&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Am%C3%A9rica%20Financeira!"
      target="_blank"
      rel="noopener noreferrer"
      className={S['whatsapp-button']}
    >
      <IconX className={S.icon} />
    </a>
    <Footer />
  </div>
)

export default DefaultLayout
