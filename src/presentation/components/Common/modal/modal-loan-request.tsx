import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import styles from "./modal-loan-request.module.scss";
import { Button } from "@/presentation/components/form";

import { IconsItems } from "@/data";

interface ModalLoanRequestProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

const ModalLoanRequest: React.FC<ModalLoanRequestProps> = ({
  isOpen,
  onClose,
  message,
}) => {
  return (
    <section className={styles.container}>
      <Modal
        classNames={{
          modal: styles.modal,
        }}
        open={isOpen}
        onClose={onClose}
        center
        showCloseIcon={false}
        blockScroll={true}
        animationDuration={300}
        focusTrapped={true}
        closeOnEsc={true}
      >
        <div className={styles["modal-content"]}>
          <h1
            className={styles.title}
          >
            {message}
          </h1>
          <h3 className={styles.subtitle}>Siga a gente</h3>
          <p className={styles.paragraph}>
            Aprenda a economizar, organizar as suas finanças e fazer <br /> o
            seu dinheiro render mais.
          </p>
          <div className={styles["icons-section"]}>
            {IconsItems.map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className={styles.icon} />
              </a>
            ))}
          </div>
          <Button
            typeStyle="btn1"
            text="Fechar"
            width="100%"
            onClick={onClose}
          />
        </div>
      </Modal>
    </section>
  );
};

export default ModalLoanRequest;
