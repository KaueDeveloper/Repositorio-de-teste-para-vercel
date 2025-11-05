import styles from './navbar.module.css';

//Barra de navegação
export default function NavBar() {
    return (
        <header className={styles.header}>
            <ul className={styles.navigation}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </header>
    );
}