import styles from './message.module.css';

//Main
export default function Message(props) {
    return (
        <>
            <h1 className={styles.title}>{props.title}</h1>
            <p>{props.description}</p>
        </>
    );
}