import { ReactElement } from 'react'

import { AuthDefaultLayout } from '@/presentation/components/layout'
import { Dashboard } from '@/presentation/pages'

export const makeDashboard = () => {
  return <Dashboard />
}

makeDashboard.getLayout = (page: ReactElement) => <AuthDefaultLayout>{page}</AuthDefaultLayout>
