import Image from 'next/image'
import Link from 'next/link'

import { latestPosts } from '@/data/ui'

import styles from './latest-posts.module.scss'

const LatestPosts = () => {
  return (
    <section
      className={styles.container}
      aria-labelledby="ultimas-postagens-titulo"
      aria-describedby="ultimas-postagens-subtitulo"
    >
      <p className={styles['subtitle-section']}>Nossas últimas postagens</p>
      <h1 className={styles['title-section']}>
        Acompanhe nossas novidades <br /> e dicas!
      </h1>
      <div className={styles.news}>
        {latestPosts.map((post, index) => (
          <Link key={index} className={styles.link} href={post.href} aria-label={post.ariaLabel}>
            <div className={styles.article}>
              <Image className={styles.img} src={post.imageSrc} alt={post.alt} />
              <p className={styles.subtitle}>{post.subtitle}</p>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.data}>{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default LatestPosts
