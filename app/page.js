//CSS
import styles from './page.module.css';

//Componentes
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import Message from '@/components/message';

//Metadados
export const metadata = {
  title: "Página principal"
}

//Página principal
export default function IndexPage() {
  return (
    <>
      <NavBar/>
      <main className={styles.main}>
        <Message title="Página principal" description="Bem vindo á página principal"/>
      </main>
      <Footer/>
    </>
  );
}