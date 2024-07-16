"use client";

import { useState } from "react";

import styles from "./faq.module.scss";

interface FaqItemTypes {
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItemTypes[];
  title: string;
}

const Faq: React.FC<FaqProps> = ({ items, title }) => {
  const [faqs, setFaqs] = useState(
    items ? items.map((faq) => ({ ...faq, open: false })) : []
  );

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false,
      }))
    );
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {faqs.map((faq, index) => (
        <div
          className={`${styles["faq-section"]} ${faq.open ? styles.open : ""}`}
          key={index}
          onClick={() => toggleFAQ(index)}
        >
          <div className={styles["faq-question"]}>{faq.question}</div>
          {faq.open && <div className={styles["faq-answer"]}>{faq.answer}</div>}
        </div>
      ))}
    </section>
  );
};

export default Faq;
