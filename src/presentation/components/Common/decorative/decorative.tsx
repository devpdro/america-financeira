import Link from "next/link";
import Image from "next/image";

import { DecorativeTypes } from "@/presentation/@types";
import { Icons } from "@/presentation/assets";

import styles from "./decorative.module.scss";

const Decorative: React.FC<DecorativeTypes> = ({
  image,
  alt,
  title,
  subtitle,
  paragraph,
  imageWidth,
  imageHeight,
  imagePosition,
}) => {
  return (
    <section className={styles.container}>
      {imagePosition === "left" && (
        <div className={styles["box-section"]}>
          <div className={styles["text-section"]}>
            <h1 className={styles.title}>{title}</h1>
            <h6 className={styles.subtitle}>{subtitle}</h6>
            <div className={styles["link-section"]}>
              <Link href="#header" aria-label={`Saiba mais sobre ${title}`}>
                <span className={styles.paragraph}>{paragraph}</span>
              </Link>
              <Icons.FaArrowRight className={styles.icon} aria-hidden="true" />
            </div>
          </div>
          <div className={styles["image-section"]}>
            <Image
              className={styles.img}
              width={100}
              height={100}
              src={image}
              layout="responsive"
              alt={alt}
              aria-hidden="true"
            />
          </div>
        </div>
      )}
      {imagePosition === "right" && (
        <div className={styles["box-section"]}>
          <div
            className={styles["image-section"]}
            style={{ width: `${imageWidth}%`, height: `${imageHeight}%` }}
          >
            <Image
              className={styles.img}
              width={imageWidth}
              height={imageHeight}
              src={image}
              layout="responsive"
              alt={alt}
              aria-hidden="true"
            />
          </div>
          <div className={styles["text-section"]}>
            <h1 className={styles.title}>{title}</h1>
            <h6 className={styles.subtitle}>{subtitle}</h6>
            <div className={styles["link-section"]}>
              <Link
                href="./antecipacao-fgts"
                aria-label={`Saiba mais sobre ${title}`}
              >
                <span className={styles.paragraph}>{paragraph}</span>
              </Link>
              <Icons.FaArrowRight className={styles.icon} aria-hidden="true" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Decorative;
