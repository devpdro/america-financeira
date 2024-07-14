import Image from "next/image";
import styles from "./decorative.module.scss";

export type DecorativeTypes = {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  paragraph: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition: "left" | "right";
};

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
            <span className={styles.paragraph}>{paragraph}</span>
          </div>
          <div className={styles["image-section"]}>
            <Image
              width={100}
              height={100}
              src={image}
              layout="responsive"
              alt={alt}
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
              width={imageWidth}
              height={imageHeight}
              src={image}
              layout="responsive"
              alt={alt}
            />
          </div>
          <div className={styles["text-section"]}>
            <h1 className={styles.title}>{title}</h1>
            <h6 className={styles.subtitle}>{subtitle}</h6>
            <span className={styles.paragraph}>{paragraph}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Decorative;
