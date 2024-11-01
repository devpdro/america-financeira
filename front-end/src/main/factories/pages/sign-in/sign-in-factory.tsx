import { type ReactElement } from 'react'

import { AuthLayout } from '@/presentation/components/layout'
import { SignIn } from '@/presentation/pages'

export const makeSignIn = () => <SignIn />

makeSignIn.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>
