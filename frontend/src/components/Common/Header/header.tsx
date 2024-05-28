import styles from "@/components/Common/Header/header.module.scss";
import Navbar from "../Navbar/navbar";

const Header = () => {
  return (
    <header className={styles.container}>
      <h6>Empréstimo com Garantia de Veículo</h6>
      <h1>O dinheiro que você precisa, com as menores taxas.</h1>
      <p>Continue dirigindo seu carro ou moto, pague em até 60 meses e aproveite as taxas a partir de 1,27% ao mês.</p>
      <button></button>
    </header>
  );
};

export default Header;
