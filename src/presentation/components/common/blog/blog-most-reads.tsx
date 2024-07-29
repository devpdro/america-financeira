import styles from "./blog-most-reads.module.scss";

const BlogMostReads = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["cards"]}>
        <div className={`${styles["card"]} ${styles["content"]}`}>
          <div className={styles["card-content"]}>
            <div className={styles["card-img"]}>
              <img
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt="Gamer"
              />
            </div>
            <div className={styles["card-label"]}>E-Sports</div>
            <div className={styles["card-title"]}>
              Fnatic raises $19 million, shakes up leadership team
            </div>
          </div>
        </div>
        <div className={`${styles["card"]} ${styles["content"]}`}>
          <div className={styles["card-content"]}>
            <div className={styles["card-img"]}>
              <img
                src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt="keyboard"
              />
            </div>
            <div className={styles["card-label"]}>Technology</div>
            <div className={styles["card-title"]}>
              Google Stadia: The Future of Gaming
            </div>
          </div>
        </div>
        <div className={`${styles["card"]} ${styles["content"]}`}>
          <div className={styles["card-content"]}>
            <div className={styles["card-img"]}>
              <img
                src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80"
                alt="Controller"
              />
            </div>
            <div className={styles["card-label"]}>Consoles</div>
            <div className={styles["card-title"]}>Testando title aqui</div>
          </div>
        </div>
        <div className={`${styles["card"]} ${styles["form"]}`}>
          <div className={styles["form-title"]}>Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default BlogMostReads;
