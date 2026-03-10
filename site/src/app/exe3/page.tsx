import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempora 
            sunt quos excepturi quas ratione ipsum vero impedit reprehenderit soluta officiis, 
            quam voluptatum assumenda ut fugiat? Placeat necessitatibus aut adipisci!
            </p>
            <a href="https://www.amazon.com.br/">Link para Amazon</a>
            <a href="https://shopee.com.br/">Link para Shoppee</a>
       </div>
    );

}