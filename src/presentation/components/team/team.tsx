import Image from "next/image";

import { TeamItems } from "@/data";

import classNames from "classnames";
import styles from "./team.module.scss";

const Team = () => {
  return (
    <section className={styles.container}>
      <div className={classNames(styles.row, styles["justify-content-center"])}>
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
      <div
        className={classNames(
          styles.row,
          styles["form-row"],
          styles["align-items-center"]
        )}
      >
        <div className={classNames(styles.col, styles["col-3"])}>
          <div className={styles["img-square"]}>
            <Image
              src={TeamItems[0].src}
              alt={TeamItems[0].alt}
              className={styles["img-cover"]}
            />
          </div>
        </div>
        <div className={classNames(styles.col, styles["col-6"])}>
          <div
            className={classNames(
              styles.row,
              styles["form-row"],
              styles["align-items-end"],
              styles.mb2
            )}
          >
            {TeamItems.slice(1, 3).map((img, index) => (
              <div
                key={index}
                className={classNames(
                  styles.col,
                  styles[`col-${index === 0 ? 7 : 5}`]
                )}
              >
                <div className={styles["img-square"]}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    className={styles["img-cover"]}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.row}>
            {TeamItems.slice(3, 5).map((img, index) => (
              <div
                key={index}
                className={classNames(
                  styles.col,
                  styles[`col-${index === 0 ? 5 : 7}`]
                )}
              >
                <div className={styles["img-square"]}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    className={styles["img-cover"]}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={classNames(styles.col, styles["col-3"])}>
          <div className={styles["img-square"]}>
            <Image
              src={TeamItems[5].src}
              alt={TeamItems[5].alt}
              className={styles["img-cover"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
