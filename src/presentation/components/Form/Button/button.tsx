import styles from "./button.module.scss";

export type ButtonTypes = {
  typeStyle: "btn1" | "btn2" | "btn3" | "btn4";
  text: string;
  width?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonTypes> = ({ typeStyle, text, width, onClick }) => {
  let buttonClass;
  switch (typeStyle) {
    case "btn1":
      buttonClass = styles.btn1;
      break;
    case "btn2":
      buttonClass = styles.btn2;
      break;
    case "btn3":
      buttonClass = styles.btn3;
      break;
    case "btn4":
      buttonClass = styles.btn4;
      break;
    default:
      buttonClass = styles.btn1;
  }
  return (
    <button
      className={`${styles.btn} ${buttonClass}`}
      style={{ width: width || "auto" }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
