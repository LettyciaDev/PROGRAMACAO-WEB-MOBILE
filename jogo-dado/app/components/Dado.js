import Image from "next/image";
import styles from "./Dado.module.css";

export default function Dado({ valor, animando = false }) {
  return (
    <div className={`${styles.dado} ${animando ? styles.animando : ""}`}>
      <Image
        src={`/dados/dado-${valor}.svg`}
        alt={`Dado com valor ${valor}`}
        width={90}
        height={90}
        priority
      />
    </div>
  );
}