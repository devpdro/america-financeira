import styles from "./team.module.scss";
import classNames from "classnames";

const teamData = [
  {
    src: "https://www.bootdey.com/image/768x512/D3D3D3/000000",
    alt: "Image 1",
  },
  {
    src: "https://www.bootdey.com/image/768x512/FFB6C1/000000",
    alt: "Image 2",
  },
  {
    src: "https://www.bootdey.com/image/768x512/87CEFA/000000",
    alt: "Image 3",
  },
  {
    src: "https://www.bootdey.com/image/768x512/B0C4DE/000000",
    alt: "Image 4",
  },
  {
    src: "https://www.bootdey.com/image/768x512/20B2AA/000000",
    alt: "Image 5",
  },
  {
    src: "https://www.bootdey.com/image/768x512/FFA07A/000000",
    alt: "Image 6",
  },
];

const Team = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container}>
        <div
          className={classNames(styles.row, styles["justify-content-center"])}
        >
          <div
            className={classNames(
              styles.col,
              styles["col-12"],
              styles["col-md-8"]
            )}
          >
            {/* Heading */}
            <h1
              className={classNames(
                styles.mb4,
                styles.textCenter,
                styles.animate
              )}
              data-toggle="animation"
              data-animation="fadeUp"
              data-animation-order="1"
              data-animation-trigger="load"
            >
              Creating beautiful layouts like no one else
            </h1>

            {/* Text */}
            <p
              className={classNames(
                styles.mb6,
                styles.textCenter,
                styles.textMuted,
                styles.animate
              )}
              data-toggle="animation"
              data-animation="fadeUp"
              data-animation-order="2"
              data-animation-trigger="load"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              voluptas harum aperiam minus corporis, nesciunt nobis quaerat
              voluptatumunt qui similique.
            </p>
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
              <img
                src={teamData[0].src}
                alt={teamData[0].alt}
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
              {teamData.slice(1, 3).map((img, index) => (
                <div
                  key={index}
                  className={classNames(
                    styles.col,
                    styles[`col-${index === 0 ? 7 : 5}`]
                  )}
                >
                  <div className={styles["img-square"]}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={styles["img-cover"]}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.row}>
              {teamData.slice(3, 5).map((img, index) => (
                <div
                  key={index}
                  className={classNames(
                    styles.col,
                    styles[`col-${index === 0 ? 5 : 7}`]
                  )}
                >
                  <div className={styles["img-square"]}>
                    <img
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
              <img
                src={teamData[5].src}
                alt={teamData[5].alt}
                className={styles["img-cover"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
