import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.containercontent}>
        <ul className={styles.list}>
          <li>
            <Link href="/exe1">Exercício da Pg. 210</Link>
          </li>
          <li>
            <Link href="/exe2">Exercício da Pg. 231</Link>
          </li>
          <li>
            <Link href="/exe3">Exercício da Pg. 246</Link>
          </li>
          <li>
            <Link href="/exe4">Exercício da Pg. 263</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
