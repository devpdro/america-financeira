import { TimelineItems } from '@/data/ui'

import styles from './timeline.module.scss'

const Timeline = () => {
  return (
    <section className={styles.container}>
      <div className={styles['box-container']}>
        {TimelineItems.map((item, index) => (
          <article key={index} className={styles.timeline}>
            <div className={styles.icon}></div>
            <div className={styles['date-content']}>
              <div className={styles['date-outer']}>
                <span className={styles.date}>
                  <span className={styles.month}>{item.duration}</span>
                  <span className={styles.year}>{item.year}</span>
                </span>
              </div>
            </div>
            <div className={styles['timeline-content']}>
              <h5 className={styles.title}>{item.title}</h5>
              <p className={styles.description}>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Timeline
