import { ReactElement } from 'react'

import { AuthLayout } from '@/presentation/components/layout'
import { SignIn } from '@/presentation/pages'

export const makeSignIn = () => {
  return <SignIn />
}

makeSignIn.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>
