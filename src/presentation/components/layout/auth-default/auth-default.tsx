import React, { ReactNode } from 'react'

import { Sidebar } from '@/presentation/components/ui'

import styles from './auth-default.module.scss'

interface AuthDefaultLayoutProps {
  children: ReactNode
}

const AuthDefaultLayout = ({ children }: AuthDefaultLayoutProps) => (
  <main className={styles.container}>
    <Sidebar />
    {children}
  </main>
)

export default AuthDefaultLayout
