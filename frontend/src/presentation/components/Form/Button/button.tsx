import styles from "./button.module.scss";

export type ButtonTypes = {
  type: "btn1" | "btn2";
  text: string;
};

const Button: React.FC<ButtonTypes> = ({ type, text }) => {
  const buttonClass = type === "btn1" ? styles.btn1 : styles.btn2;

  return <button className={`${styles.btn} ${buttonClass}`}>{text}</button>;
};

export default Button;
