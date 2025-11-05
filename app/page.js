import styles from './page.module.css';

//Página principal
export default function IndexPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Página principal</h1>
      <p>Bem vindo á página principal</p>
    </div>
  );
}