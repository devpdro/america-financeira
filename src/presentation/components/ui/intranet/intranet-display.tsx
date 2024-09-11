import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

import { Images } from '@/presentation/assets'

import styles from './intranet-display.module.scss'

const banks = [
  {
    name: 'Banco do Bradesco',
    image: Images.bancoBradesco,
    info: [
      'Ouvidoria Banco A',
      'Atendimento disponível das 9h às 18h, de segunda a sexta, exceto feriados',
      'SAC Banco A',
    ],
  },
  {
    name: 'Banco B',
    image: Images.bancoCaixa,
    info: [
      'Ouvidoria Banco B',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados',
      'SAC Banco B',
    ],
  },
  {
    name: 'Banco B',
    image: Images.bancoSantander,
    info: [
      'Ouvidoria Banco B',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados',
      'SAC Banco B',
    ],
  },
  {
    name: 'Banco B',
    image: Images.bancoBrasil,
    info: [
      'Ouvidoria Banco B',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados',
      'SAC Banco B',
    ],
  },
  {
    name: 'Banco B',
    image: Images.bancoBanrisul,
    info: [
      'Ouvidoria Banco B',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados',
      'SAC Banco B',
    ],
  },
  {
    name: 'Banco B',
    image: Images.bancoSafra,
    info: [
      'Ouvidoria Banco B',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados',
      'SAC Banco B',
    ],
  },
  {
    name: 'Banco B',
    image: Images.bancoItau,
    info: [
      'Ouvidoria Banco B',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados',
      'SAC Banco B',
    ],
  },
  {
    name: 'Banco B',
    image: Images.bancoPan,
    info: [
      'Ouvidoria Banco B',
      'Atendimento disponível das 8h às 17h, de segunda a sexta, exceto feriados',
      'SAC Banco B',
    ],
  },
]

const IntranetDisplay: React.FC = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleList = (index: number) => {
    setOpenItems((prev) => {
      const newOpenItems = new Set(prev)
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index)
      } else {
        newOpenItems.add(index)
      }
      return newOpenItems
    })
  }

  return (
    <section className={styles.container}>
      <div className={styles['box-section']}>
        {banks.map((bank, index) => (
          <div className={styles.box} key={index}>
            <Image className={styles.img} src={bank.image} alt={bank.name} />
            <div className={styles['title-section']} onClick={() => toggleList(index)}>
              <h1 className={styles.title}>Mais informações</h1>
              {openItems.has(index) ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <AnimatePresence>
              {openItems.has(index) && (
                <motion.ul
                  className={styles['list-section']}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {bank.info.map((item, i) => (
                    <motion.li
                      className={styles.list}
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

export default IntranetDisplay
