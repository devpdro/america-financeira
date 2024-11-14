'use client '

import { useState } from 'react'

import { ICON } from 'src/presentation/assets'

import S from './warning.module.scss'

const Warning = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className={S.container}>
      <div className={S['box-section']}>
        <h1 className={S.title}>Atenção: Não solicitamos nenhum pagamento prévio para aprovação do empréstimo</h1>
        <ICON.IoClose className={S.icon} onClick={() => setIsVisible(false)} />
      </div>
    </div>
  )
}

export default Warning
