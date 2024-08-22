import { ReactElement } from 'react'

import { DashboardDefaultLayout } from '@/presentation/components/layout'
import { OperationalScripts } from '@/presentation/pages'

export const makeOperationalScripts = () => {
  return <OperationalScripts />
}

makeOperationalScripts.getLayout = (page: ReactElement) => <DashboardDefaultLayout>{page}</DashboardDefaultLayout>
