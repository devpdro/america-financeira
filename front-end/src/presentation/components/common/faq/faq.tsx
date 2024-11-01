'use client'

import { useState } from 'react'

import { Button } from '@/presentation/components/form'
import { FaqProps } from '@/data/models'

import styles from './faq.module.scss'

const Faq: React.FC<FaqProps> = ({ items, title }) => {
  const [faqs, setFaqs] = useState(items ? items.map((faq) => ({ ...faq, open: false })) : [])
  const [showAll, setShowAll] = useState(false)

  const toggleFAQ = (index: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : faq.open,
      }))
    )
  }

  const handleShowAll = () => {
    setShowAll(true)
  }

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5)

  return (
    <section className={styles.container} aria-labelledby="faq-titulo">
      <h1 className={styles.title}>{title}</h1>
      {visibleFaqs.map((faq, index) => (
        <div
          className={`${styles['faq-section']} ${faq.open ? styles.open : ''}`}
          key={index}
          onClick={() => toggleFAQ(index)}
          aria-expanded={faq.open}
          role="button"
          tabIndex={0}
        >
          <div className={styles['faq-question']}>{faq.question}</div>
          {faq.open && (
            <div className={styles['faq-answer']} aria-hidden={!faq.open}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
      {!showAll && faqs.length > 5 && (
        <div className={styles['btn-section']}>
          <Button typeStyle="btn2" text="Ver mais" width="150px" onClick={handleShowAll} />
        </div>
      )}
    </section>
  )
}

export default Faq
