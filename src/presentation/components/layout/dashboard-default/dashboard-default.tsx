import React, { ReactNode } from 'react'

import { Sidebar } from '@/presentation/components/ui'

import styles from './dashboard-default.module.scss'

interface DashboardDefaultLayoutProps {
  children: ReactNode
}

const DashboardDefaultLayout = ({ children }: DashboardDefaultLayoutProps) => (
  <main className={styles.container}>
    <Sidebar />
    {children}
  </main>
)

export default DashboardDefaultLayout
