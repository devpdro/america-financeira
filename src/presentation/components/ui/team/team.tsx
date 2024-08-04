import Image from 'next/image'

import { team } from '@/data/ui'

import classNames from 'classnames'
import styles from './team.module.scss'

const Team = () => {
  return (
    <section className={styles.container}>
      <div className={classNames(styles.row, styles['justify-content-center'])}>
        <div className={classNames()}>
          <h3
            className={classNames(styles.subtitle)}
            data-toggle="animation"
            data-animation="fadeUp"
            data-animation-order="1"
            data-animation-trigger="load"
          >
            Nossa equipe
          </h3>
          <h1
            className={classNames(styles.title)}
            data-toggle="animation"
            data-animation="fadeUp"
            data-animation-order="2"
            data-animation-trigger="load"
          >
            Conectando histórias e transformando vidas
          </h1>
        </div>
      </div>
      <div className={classNames(styles.row, styles['form-row'], styles['align-items-center'])}>
        <div className={classNames(styles.col, styles['col-3'])}>
          <div className={styles['img-square']}>
            <img src={team[0].src} alt={team[0].alt} className={styles['img-cover']} />
          </div>
        </div>
        <div className={classNames(styles.col, styles['col-6'])}>
          <div className={classNames(styles.row, styles['form-row'], styles['align-items-end'], styles.mb2)}>
            {team.slice(1, 3).map((img, index) => (
              <div key={index} className={classNames(styles.col, styles[`col-${index === 0 ? 7 : 5}`])}>
                <div className={styles['img-square']}>
                  <img src={img.src} alt={img.alt} className={styles['img-cover']} />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.row}>
            {team.slice(3, 5).map((img, index) => (
              <div key={index} className={classNames(styles.col, styles[`col-${index === 0 ? 5 : 7}`])}>
                <div className={styles['img-square']}>
                  <img src={img.src} alt={img.alt} className={styles['img-cover']} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={classNames(styles.col, styles['col-3'])}>
          <div className={styles['img-square']}>
            <img src={team[5].src} alt={team[5].alt} className={styles['img-cover']} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
