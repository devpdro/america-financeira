import { type ReactElement } from 'react'

import { PartnerForm } from '@/presentation/pages'
import { AuthLayout } from '@/presentation/components/layout'

export const makePartnerForm = () => <PartnerForm />

makePartnerForm.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>
