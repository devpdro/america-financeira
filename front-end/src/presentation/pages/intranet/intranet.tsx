import { Meta } from 'src/presentation/components'

import { HeaderPolicy, IntranetDisplay } from '@/presentation/components/ui'
import BoxIntranet from '@/presentation/components/ui/box-intranet/box-intranet'

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
      <section className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.boxSection}>
        <h1 className={styles.title}>Bem-vindo à Intranet</h1>
      </div>
    </section>
    </div>
  )
}


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
