import { ToastContainer } from 'react-toastify';

import LoanRequest from "../../Form/LoanRequest/loan-request";

import styles from "./header.module.scss";

type HeaderTypes = {
  title: string;
  subtitle: React.ReactNode;
  paragraph: string;
};

const Header: React.FC<HeaderTypes> = ({ title, subtitle, paragraph }) => {
  return (
    <header className={styles.container}>
      <div className={styles["box-section"]}>
        <div className={styles["text-section"]}>
          <h6 className={styles.subtitle}>{title}</h6>
          <h1 className={styles.title}>{subtitle}</h1>
          <p className={styles.paragraph}>{paragraph}</p>
        </div>
        <div className={styles["form-section"]}>
          <ToastContainer />
          <LoanRequest />
        </div>
      </div>
    </header>
  );
};

export default Header;
