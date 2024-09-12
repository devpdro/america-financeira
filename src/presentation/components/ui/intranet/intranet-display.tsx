import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { intranetBanks, intranetLinks } from '@/data/ui'
import styles from './intranet-display.module.scss'
import Link from 'next/link'

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
      <h6 className={styles['subtitle-container']}>Links Úteis</h6>
      <h1 className={styles['title-container']}>
        Explore nossos <br /> recursos úteis
      </h1>
      <div className={styles['box-section']}>
        {intranetLinks.map((link, index) => (
          <div className={styles.box} key={index}>
            <Link href={link.url}>
              {link.imageLinks ? (
                <Image className={styles['imgs-links']} src={link.imageLinks} alt={link.name} />
              ) : link.image ? (
                <Image className={styles.img} src={link.image} alt={link.name} />
              ) : null}
            </Link>
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
                  {link.info.map((item, i) => (
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
      <h6 className={styles['subtitle-container']}>Bancos Parceiros</h6>
      <h1 className={styles['title-container']}>
        Conheça nossos <br /> bancos parceiros
      </h1>
      <div className={styles['box-section']}>
        {intranetBanks.map((bank, index) => (
          <div className={styles.box} key={index}>
            <Link href={bank.url}>
              {bank.image ? <Image className={styles.img} src={bank.image} alt={bank.name} /> : null}
            </Link>
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
