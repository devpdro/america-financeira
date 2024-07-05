"use client";

import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./contractor-verifier.module.scss";
import { Button } from "../../Form";

interface Category {
  title: string;
  text: string;
  imageSrc: string;
  buttonText: string;
}

const ContractorVerifier: React.FC<{ categories: Category[] }> = ({
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
      <div className={styles["box-container"]}>
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
                typeStyle="btn4"
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
      </div>
    </section>
  );
};

ContractorVerifier.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContractorVerifier;
