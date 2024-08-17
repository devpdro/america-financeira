import { ReactElement } from 'react'

import { AuthLayout } from '@/presentation/components/layout'
import { Dashboard } from '@/presentation/pages'

export const makeDashboard = () => {
  return <Dashboard />
}

makeDashboard.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>
