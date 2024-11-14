'use client'

import { useState } from 'react'

import { Button } from '@/presentation/components/form'
import { FaqProps } from '@/data/models'

import S from './faq.module.scss'

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
    <section className={S.container}>
      <h1 className={S.title}>{title}</h1>
      {visibleFaqs.map((faq, index) => (
        <div
          className={`${S['faq-section']} ${faq.open ? S.open : ''}`}
          key={index}
          onClick={() => toggleFAQ(index)}
          role="button"
          tabIndex={0}
        >
          <div className={S['faq-question']}>{faq.question}</div>
          {faq.open && <div className={S['faq-answer']}>{faq.answer}</div>}
        </div>
      ))}
      {!showAll && faqs.length > 5 && (
        <div className={S['btn-section']}>
          <Button typeStyle="btn2" text="Ver mais" width="150px" onClick={handleShowAll} />
        </div>
      )}
    </section>
  )
}

export default Faq
