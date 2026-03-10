import styles from "./Home.module.css";
import Image from "next/image"

export default function Home() {
    return (
        <div>
                <div className={styles.container}>
                <div className={styles.shoes}>
                    <Image src="/vans.jpeg" className={styles.shoeImage} alt="vans" width={200} height={200}/>
                    <p>Vans preto</p>
                    <p>Preço: R$320.00</p>
                </div>
                <div className={styles.shoes}>
                    <Image src="/olympikus.jpeg" className={styles.shoeImage} alt="olympikus" width={200} height={200}/>
                    <p>Olympikus preto</p>
                    <p>Preço: R$278.00</p>
                </div>
                <div className={styles.shoes}>
                    <Image src="/adidas.jpeg" className={styles.shoeImage} alt="adidas" width={200} height={200}/>
                    <p>Adidas Samba</p>
                    <p>Preço: R$399.00</p>
                </div>
                <div className={styles.shoes}>
                    <Image src="/umbro.jpeg" className={styles.shoeImage} alt="umbro" width={200} height={200}/>
                    <p>Umbro preto</p>
                    <p>Preço: R$389.00</p>
                </div>
                <div className={styles.shoes}>
                    <Image src="/nike.jpeg" className={styles.shoeImage} alt="nike" width={200} height={200}/>
                    <p>Nike Azul</p>
                    <p>Preço: R$459.00</p>
                </div>
            </div>
            <div className={styles.footer}>
                <p>Loja CasaPio</p>
            </div>
        </div>
        
    );

}