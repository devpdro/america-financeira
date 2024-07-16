"use client";

import { useRef } from "react";
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { CarouselTypes } from "@/presentation/@types";
import { Icons } from "@/presentation/assets";
import { CarouselLoanItems } from "@/data";

import styles from "./loan-carousel.module.scss";

const responsive = {
  0: { items: 1 },
  880: { items: 2 },
  1280: { items: 3 },
};

const LoanCarousel: React.FC<CarouselTypes> = ({ title, subtitle }) => {
  const carouselRef = useRef<AliceCarousel>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <p className={styles["subtitle-section"]}>{subtitle}</p>
        <h1 className={styles["title-section"]}>{title}</h1>
      </div>
      <div className={styles["custom-arrow-left"]} onClick={handlePrev}>
        <Icons.FaArrowLeft size={20} />
      </div>
      <div className={styles["carousel-section"]}>
        <AliceCarousel
          mouseTracking
          items={CarouselLoanItems.map((item) => (
            <Link href={item.link} key={item.key}>
              <div key={item.key} className={styles.item} data-value={item.key}>
                <div className={styles["text-section"]}>
                  <h1 className={styles.title}>{item.title}</h1>
                  <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
                <div className={styles["icon-section"]}>
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
      <div className={styles["custom-arrow-right"]} onClick={handleNext}>
        <Icons.FaArrowRight size={20} />
      </div>
    </div>
  );
};

export default LoanCarousel;
