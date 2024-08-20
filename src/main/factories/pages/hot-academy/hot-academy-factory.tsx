import { ReactElement } from 'react'

import { AuthDefaultLayout } from '@/presentation/components/layout'
import { HotAcademy } from '@/presentation/pages'

export const makeHotAcademy = () => {
  return <HotAcademy />
}

makeHotAcademy.getLayout = (page: ReactElement) => <AuthDefaultLayout>{page}</AuthDefaultLayout>
