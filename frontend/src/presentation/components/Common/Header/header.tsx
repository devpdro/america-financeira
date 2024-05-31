import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles["box-section"]}>
        <div className={styles["text-section"]}>
          <h6>Solicite seu crédito agora mesmo!</h6>
          <h1>Realizando sonhos <br /> através do Crédito!</h1>
          <p>Aqui seu empréstimo é rápido, fácil e descomplicado</p>
        </div>
        <div className={styles["form-section"]}>
          <h1>SOLICITAR AGORA!</h1>
          <form action="">
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Whatsapp" />
            <input type="text" placeholder="CPF" />
            <input type="text" placeholder="Qual tipo de solicitação?" />
            <input type="submit" value="SOLICITAR" />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
