import { ReactElement } from 'react'

import { DashboardDefaultLayout } from '@/presentation/components/layout'
import { HotAcademy } from '@/presentation/pages'

export const makeHotAcademy = () => {
  return <HotAcademy />
}

makeHotAcademy.getLayout = (page: ReactElement) => <DashboardDefaultLayout>{page}</DashboardDefaultLayout>
