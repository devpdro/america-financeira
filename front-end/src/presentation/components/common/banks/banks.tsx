import Image from 'next/image'

import { IMAGE } from 'src/presentation/assets'

import S from './banks.module.scss'

const BANKS = [
  { src: IMAGE.bancoBradesco.src, alt: 'Imagem do banco Bradesco' },
  { src: IMAGE.bancoCaixa.src, alt: 'Imagem do banco Caixa' },
  { src: IMAGE.bancoSantander.src, alt: 'Imagem do banco Santander' },
  { src: IMAGE.bancoBrasil.src, alt: 'Imagem do banco Brasil' },
  { src: IMAGE.bancoBanrisul.src, alt: 'Imagem do banco Banrisul' },
  { src: IMAGE.bancoSafra.src, alt: 'Imagem do banco Safra' },
  { src: IMAGE.bancoItau.src, alt: 'Imagem do banco Itaú' },
  { src: IMAGE.bancoPan.src, alt: 'Imagem do banco Pan' },
]

const Banks = () => {
  return (
    <div className={S.container}>
      <h1 className={S.title}>
        Simule com facilidade, conheça as nossas <br /> opções de bancos que trabalhamos
      </h1>
      <div className={S['image-section']}>
        {BANKS.map((item, index) => (
          <Image width={180} height={0} key={index} src={item.src} alt={item.alt} className={S.img} />
        ))}
      </div>
    </div>
  )
}

export default Banks
