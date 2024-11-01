import React, { useState } from 'react'
import { IconUser, IconRainbow, IconBuildingBank, IconShield, IconFlame, IconLink , IconMail } from '@tabler/icons-react'
import S from './box-intranet.module.scss'
import { StatusModal } from '../../modal'

const data = [
  {
    icon: <IconRainbow />,
    title: 'Gay Sys',
    info: [{ text: 'Gap Sys', link: 'https://app.gapsys.com.br/login' }],
  },
  {
    icon: <IconBuildingBank />,
    title: 'Bancos',
    info: [
      { text: 'Banco do Bradesco', link: 'https://www.bradesco.com.br' },
      { text: 'Banco Santander', link: 'https://www.santander.com.br' },
      { text: 'Banco do Brasil', link: 'https://www.bb.com.br' },
      { text: 'Banco Mercantil', link: 'https://meu.bancomercantil.com.br/login' },
      { text: 'Banco Safra', link: 'https://www.safra.com.br' },
      { text: 'Banco Itaú', link: 'https://www.itau.com.br' },
      { text: 'Banco Pan', link: 'https://www.bancopan.com.br' },
      { text: 'Banco Crefaz', link: 'https://www.crefaz.com.br' },
    ],
  },
  {
    icon: <IconFlame />,
    title: 'Hot Sys',
    info: [{ text: 'Hot Sys', link: 'https://hotsys.com.br/#/login' }],
  },
  {
    icon: <IconLink  />,
    title: 'Links úteis',
    info: [
      { text: 'Área do Parceiro', link: 'https://america.nodesistemas.com.br/' },
      { text: 'KingHost', link: 'https://kinghost.com.br' },
      { text: 'N8n', link: 'https://n8n.io' },
      { text: 'Kolmeyaa', link: 'https://kolmeya.com.br/auth/login' },
    ],
  },
  {
    icon: <IconMail />,
    title: 'Webmail',
    info: [{ text: 'Webmail', link: 'https://webmail.americafinanceira.com.br/' }],
  },
]

const BoxIntranet = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [info, setInfo] = useState<{ text: string; link: string }[]>([])

  const handleOpenModal = (title: string, info: { text: string; link: string }[]) => {
    if (info.length === 1) {
      // Se houver apenas um link, redireciona para ele
      window.open(info[0].link, '_blank')
    } else {
      // Caso contrário, abre o modal
      setMessage(title)
      setInfo(info)
      setIsOpen(true)
    }
  }

  const handleCloseModal = () => {
    setIsOpen(false)
    setMessage('')
    setInfo([])
  }

  return (
    <section className={S.container}>
      {data.map((item, index) => (
        <div key={index} className={S.box} onClick={() => handleOpenModal(item.title, item.info)}>
          <span className={S.icon}>{item.icon}</span>
          <h3 className={S.title}>{item.title}</h3>
        </div>
      ))}
      <StatusModal isOpen={isOpen} onClose={handleCloseModal} message={message} info={info} />
    </section>
  )
}

export default BoxIntranet
