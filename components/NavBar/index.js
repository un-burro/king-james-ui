import styles from "./styles.module.css";
import Image from "next/image";


export default function NavBar() {

    return (

        <div className={styles.navContainer}>

            <div className={styles.contentSection}>

                <div className={styles.logoContainer}>

                    <Image src="/assets/icons/logo_KJD.svg"
                           width={53.29}
                           height={32} />

                </div>

                <div className={styles.menuContainer}>

                    <p className={styles.text}>Services</p>
                    <p className={styles.text}>Industries</p>
                    <p className={styles.text}>Cases</p>
                    <p className={styles.text}>Contact</p>

                </div>

            </div>

        </div>

    );

}