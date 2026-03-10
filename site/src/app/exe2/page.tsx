import styles from "./Home.module.css";

export default function Home() {
    return (
         <div className={styles.container}>
            <div className={styles.squarered}></div>
            <div className={styles.squaregreen}></div>
        </div>
    );
}