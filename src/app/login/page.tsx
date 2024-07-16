
import { AccessLogin } from '@/presentation/components';
import styles from './page.module.scss'
import AccessParc from '@/presentation/components/access-parceiro/access-parc';

export default function Login() {
  return (
    <>
      <main className={styles.container}>
        <AccessParc />
      </main>
    </>
  );
}
