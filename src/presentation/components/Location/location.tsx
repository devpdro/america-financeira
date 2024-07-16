import Image from "next/image";

import { Button } from "@/presentation/components/Form";
import { LocationTypes } from "@/presentation/@types";
import { Images } from "@/presentation/assets";

import styles from "./location.module.scss";

const Location: React.FC<LocationTypes> = ({ imageWidth, imageHeight }) => {
  return (
    <section className={styles.container}>
      <div className={styles["box-container"]}>
        <div className={styles["image-section"]}>
          <Image
            style={{ width: `${imageWidth}%`, height: `${imageHeight}%` }}
            className={styles.img}
            src={Images.workWithUs}
            alt="Loja presencial da América Financeira"
            layout="responsive"
            width={imageWidth}
            height={imageHeight}
          />
        </div>
        <div className={styles["text-section"]}>
          <h1 className={styles.title}>
          Prefere atendimento presencial? Conheça nossas unidades localizadas
          perto de você!
          </h1>
          <p className={styles.subtitle}>
            Mais de 10 unidades espalhadas pelo Brasil. Venha nós conhecer e
            tomar um café!
          </p>
          <a
            href="https://www.google.com/maps/search/America+Financeira/@-22.3991961,-48.0358146,10z/data=!3m1!4b1?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button typeStyle="btn3" text="Localize a loja mais próxima" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
