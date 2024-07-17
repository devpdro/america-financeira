import { Button, LoanRequest } from "@/presentation/components/form";
import { HeaderTypes } from "@/presentation/@types";

import styles from "./header.module.scss";

const Header: React.FC<
  HeaderTypes & {
    backgroundImage: string;
  }
> = ({
  title,
  subtitle,
  showDetails,
  showParagraph = true,
  showLoanRequest = true,
  backgroundImage,
}) => {
  return (
    <header
      id="header"
      className={`${styles.container}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "left center",
        backgroundSize: "cover",
        height: "100vh",
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
