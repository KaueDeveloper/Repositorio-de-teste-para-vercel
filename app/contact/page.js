import styles from './contact.module.css';

//Componentes
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Message from '@/components/message';

//Página de Contato
export default function ContactPage() {
    return (
        <>
            <NavBar/>
            <main className={styles.main}>
                <Message title="Página de Contato" description="Bem vindo á página de Contato"/>
            </main>
            <Footer/>
        </>
    );
}