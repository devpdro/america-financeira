import { Meta } from 'src/presentation/components'

import { HeaderPolicy, IntranetDisplay } from '@/presentation/components/ui'
import BoxIntranet from '@/presentation/components/ui/box-intranet/box-intranet'

export default function Intranet() {
  return (
    <div>
      <Meta
        title="Intranet - América Financeira"
        description="Acesse a Intranet da America Financeira para obter recursos exclusivos, informações internas e suporte especializado para nossa equipe e parceiros."
        keywords="Intranet, America Financeira, recursos internos, suporte especializado, equipe, parceiros"
      />
      <IntranetDisplay />
      <BoxIntranet />
    </div>
  )
}
