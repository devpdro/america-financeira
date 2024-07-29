"use client";

import { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import { Button } from "@/presentation/components/form";

import styles from "./loan-requirements.module.scss";

interface Category {
  title: string;
  text: string;
  imageSrc: string;
  buttonText: string;
}

const LoanRequirements: React.FC<{ categories: Category[] }> = ({
  categories,
}) => {
  const [contentSelected, setContentSelected] = useState<Category | null>(
    categories[0] || null
  );

  const handleClick = (category: Category) => {
    setContentSelected(category);
  };

  return (
    <section className={styles.container}>
      <h1 className={styles["title-section"]}>
        Quem pode contratar crédito consignado
      </h1>
      <h6 className={styles["subtitle-section"]}>
        Veja quem pode aproveitar nossos benefícios exclusivos
      </h6>
      <div className={styles["box-section"]}>
        {categories.map((category) => (
          <h1
            key={category.title}
            className={styles.title}
            onClick={() => handleClick(category)}
          >
            {category.title}
          </h1>
        ))}
      </div>
      {contentSelected && (
        <div className={styles["content-wrapper"]}>
          <div className={styles["content-text"]}>
            <p className={styles.paragraph}>{contentSelected.text}</p>
            <Button
              typeStyle="btn1"
              width="350px"
              text={contentSelected.buttonText}
            ></Button>
          </div>
          <div className={styles["content-image"]}>
            <Image
              className={styles.img}
              src={contentSelected.imageSrc}
              alt={contentSelected.title}
              width={700}
              height={500}
            />
          </div>
        </div>
      )}
    </section>
  );
};

LoanRequirements.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default LoanRequirements;
