import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { intranetBanks, intranetLinks } from '@/data/ui'
import styles from './intranet-display.module.scss'
import Link from 'next/link'

const IntranetDisplay: React.FC = () => {
  const [openItemsLinks, setOpenItemsLinks] = useState<Set<number>>(new Set())
  const [openItemsBanks, setOpenItemsBanks] = useState<Set<number>>(new Set())

  const toggleListLinks = (index: number) => {
    setOpenItemsLinks((prev) => {
      const newOpenItems = new Set(prev)
      if (newOpenItems.has(index)) {
        newOpenItems.delete(index)
      } else {
        newOpenItems.add(index)
      }
      return newOpenItems
    })
  }

  const toggleListBanks = (index: number) => {
    setOpenItemsBanks((prev) => {
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
          <div className={styles.box} key={`link-${index}`}>
            {link.imageLinks ? (
              <Link href={link.url || '#'} passHref>
                <Image className={styles['imgs-links']} src={link.imageLinks} alt={link.name} />
              </Link>
            ) : link.image ? (
              <Link href={link.url || '#'} passHref>
                <Image className={styles.img} src={link.image} alt={link.name} />
              </Link>
            ) : null}
            <div className={styles['title-section']} onClick={() => toggleListLinks(index)}>
              <h1 className={styles.title}>Mais informações</h1>
              {openItemsLinks.has(index) ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <AnimatePresence>
              {openItemsLinks.has(index) && (
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
                      key={`link-info-${i}`}
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
          <div className={styles.box} key={`bank-${index}`}>
            {bank.image ? (
              <Link href={bank.url || '#'} passHref>
                <Image className={styles.img} src={bank.image} alt={bank.name} />
              </Link>
            ) : null}
            <div className={styles['title-section']} onClick={() => toggleListBanks(index)}>
              <h1 className={styles.title}>Mais informações</h1>
              {openItemsBanks.has(index) ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <AnimatePresence>
              {openItemsBanks.has(index) && (
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
                      key={`bank-info-${i}`}
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
