import { Button } from "@/presentation/components/Form";

import styles from "./login-request.module.scss";
import Image from "next/image";
import { Images } from "@/presentation/assets";

const LoginRequest = () => {
  return (
    <form className={styles.container}>
    <Image src={Images.AboutIlustration} />
    </form>
  );
};

export default LoginRequest;
