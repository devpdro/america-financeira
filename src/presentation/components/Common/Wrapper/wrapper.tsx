import Image from "next/image";

import { Button } from "@/presentation/components/Form";
import { WrapperTypes } from "@/presentation/@types";

import styles from "./wrapper.module.scss";

const Wrapper: React.FC<WrapperTypes & { imagePosition: "left" | "right" }> = ({
  image,
  alt,
  title,
  subtitle,
  buttonPrimaryText,
  imageWidth,
  imageHeight,
  imagePosition,
}) => {
  return (
    <section className={styles.container}>
      {imagePosition === "left" && (
        <>
          <div
            className={styles["image-section"]}
            style={{ width: `${imageWidth}%`, height: `${imageHeight}%` }}
          >
            <Image
              className={styles.img}
              src={image}
              alt={alt}
              width={imageWidth}
              height={imageHeight}
              layout="responsive"
            />
          </div>
          <div className={styles["text-section"]}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <Button typeStyle="btn2" text={buttonPrimaryText} width="350px" />
          </div>
        </>
      )}
      {imagePosition === "right" && (
        <>
          <div className={styles["text-section"]}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <Button typeStyle="btn2" text={buttonPrimaryText} width="350px" />
          </div>
          <div
            className={styles["image-section"]}
            style={{ width: `${imageWidth}%`, height: `${imageHeight}%` }}
          >
            <Image
              className={styles.img}
              src={image}
              alt={alt}
              width={imageWidth}
              height={imageHeight}
              layout="responsive"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Wrapper;
