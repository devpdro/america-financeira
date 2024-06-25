import { ToastContainer } from "react-toastify";

import { Button, LoanRequest } from "@/presentation/components/Form";
import { HeaderTypes } from "@/presentation/@types";

import styles from "./header.module.scss";

const Header: React.FC<HeaderTypes> = ({
  title,
  subtitle,
  showDetails,
  showParagraph = true,
  showLoanRequest = true,
}) => {
  return (
    <header className={`${styles.container}`}>
      <div className={styles["box-section"]}>
        <div className={styles["text-section"]}>
          <h6 className={styles.subtitle}>{title}</h6>
          <h1 className={styles.title}>{subtitle}</h1>
          {showParagraph && <p className={styles.paragraph}>{showParagraph}</p>}
          {showDetails && (
            <>
              <p className={styles["paragraph-details"]}>{showDetails}</p>
              <Button typeStyle="btn3" text="Conheça mais" />{" "}
          
            </>
          )}
        </div>
        {showLoanRequest && (
          <div className={styles["form-section"]}>
            <ToastContainer />
            <LoanRequest />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
