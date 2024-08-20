import { ReactElement } from 'react'

import { AuthDefaultLayout } from '@/presentation/components/layout'
import { OperationalScripts } from '@/presentation/pages'

export const makeOperationalScripts = () => {
  return <OperationalScripts />
}

makeOperationalScripts.getLayout = (page: ReactElement) => <AuthDefaultLayout>{page}</AuthDefaultLayout>
