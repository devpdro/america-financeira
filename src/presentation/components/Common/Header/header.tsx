import { Button, LoanRequest } from "@/presentation/components/form";
import { HeaderTypes } from "@/presentation/@types";

import styles from "./header.module.scss";

const Header: React.FC<HeaderTypes> = ({
  title,
  subtitle,
  backgroundImage,
  showLoanRequest = true,
  showParagraph = false,
  showDetails = false,
}) => {
  return (
    <header
      id="header"
      className={`${styles.container}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "left center",
        backgroundSize: "cover",
      }}
    >
      <div className={styles["box-section"]}>
        <div className={styles["text-section"]}>
          <h6 className={styles.subtitle}>{title}</h6>
          <h1 className={styles.title}>{subtitle}</h1>
          {showDetails && (
            <>
              <p className={styles["paragraph-details"]}>{showDetails}</p>
              <Button typeStyle="btn3" text="Conheça mais" />
            </>
          )}
          {showParagraph && <p className={styles.paragraph}>{showParagraph}</p>}
        </div>
        {showLoanRequest && (
          <div className={styles["form-section"]}>
            <LoanRequest />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
