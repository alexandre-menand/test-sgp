import styles from "./layout.module.css"
import Image from "next/image";
import Illustration from "@/../public/illustration.svg";
import Shape from "@/../public/shape.svg";

export default function AuthLayout ({children}: {children : React.ReactNode}) {
    return (
        <main className={styles.main}>
            <div className={styles.containerForm}>
                <h1 className={styles.title}>Les ateliers du Baobab</h1>
                {children}
            </div>
            <div className={styles.containerImg}>
                <Image src={Illustration} alt="" />
            </div>

            <div className={styles.containerShape}>
                <Image src={Shape} alt="" className={styles.shape}/>
            </div>
        </main>
    )
}