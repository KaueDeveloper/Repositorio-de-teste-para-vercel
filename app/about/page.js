import styles from './about.module.css';

//Página Sobre
export default function AboutPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Página Sobre</h1>
            <p>Bem vindo á página Sobre</p>
        </div>
    );
}