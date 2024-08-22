import { ReactElement } from 'react'

import { DashboardDefaultLayout } from '@/presentation/components/layout'
import { Dashboard } from '@/presentation/pages'

export const makeDashboard = () => {
  return <Dashboard />
}

makeDashboard.getLayout = (page: ReactElement) => <DashboardDefaultLayout>{page}</DashboardDefaultLayout>
