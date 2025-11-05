import styles from './about.module.css';

//Componentes
import NavBar from '@/components/navbar';
import Message from '@/components/message';
import Footer from '@/components/footer';

//Página Sobre
export default function AboutPage() {
    return (
        <>
            <NavBar/>
            <main className={styles.main}>
                <Message title="Página Sobre" description="Bem vindo á página Sobre"/>
            </main>
            <Footer/>
        </>
    );
}