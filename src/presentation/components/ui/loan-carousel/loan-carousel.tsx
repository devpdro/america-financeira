'use client'

import { useRef } from 'react'
import AliceCarousel, { Link } from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import { Icons } from '@/presentation/assets'
import { CarouselProps } from '@/data/models'
import { loanCarousel } from '@/data/ui'

import styles from './loan-carousel.module.scss'

const responsive = {
  0: { items: 1 },
  880: { items: 2 },
  1280: { items: 3 },
}

const CarouselLoan: React.FC<CarouselProps> = ({ title, subtitle }) => {
  const carouselRef = useRef<AliceCarousel>(null)

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev()
    }
  }

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext()
    }
  }

  return (
    <section className={styles.container} aria-labelledby="carousel-title" aria-describedby="carousel-subtitle">
      <header>
        <p id="carousel-subtitle" className={styles['subtitle-section']}>
          {subtitle}
        </p>
        <h1 id="carousel-title" className={styles['title-section']}>
          {title}
        </h1>
      </header>
      <button className={styles['custom-arrow-left']} onClick={handlePrev} aria-label="Anterior">
        <Icons.FaArrowLeft size={20} />
      </button>
      <div className={styles['carousel-section']}>
        <AliceCarousel
          mouseTracking
          items={loanCarousel.map((item) => (
            <Link key={item.key} href={item.link}>
              <div className={styles.item} data-value={item.key}>
                <div className={styles['text-section']}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
                <div className={styles['icon-section']}>
                  <Icons.FaArrowRightLong className={styles.icon} />
                </div>
              </div>
            </Link>
          ))}
          responsive={responsive}
          disableButtonsControls={true}
          controlsStrategy="alternate"
          disableDotsControls
          ref={carouselRef}
        />
      </div>
      <button className={styles['custom-arrow-right']} onClick={handleNext} aria-label="Próximo">
        <Icons.FaArrowRight size={20} />
      </button>
    </section>
  )
}

export default CarouselLoan
