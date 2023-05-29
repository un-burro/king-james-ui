import styles from "./styles.module.css";
import Image from "next/image";
import CTAButton from "../CTAButton";


export default function NavBar() {

    return (

        <div className={styles.navContainer}>

            <div className={styles.contentSection}>

                <a href="#">

                    <Image src="/assets/icons/logo_KJD.svg"
                           width={53.29}
                           height={32} />

                </a>

                <div className={styles.menuContainer}>
    
                    <a href="#">
                        <p className={styles.text}>Services</p>
                    </a>

                    <a href="#">
                        <p className={styles.text}>Industries</p>
                    </a>

                    <a href="#">
                        <p className={styles.text}>Cases</p>
                    </a>

                    <a href="#">
                        <p className={styles.text}>Contact</p>
                    </a>

                </div>

                <div className={styles.ctaContainer}>
    
                    <CTAButton title="Let's Talk"
                               width="96px"
                               height="37px"
                               text_colour="var(--primary)" />
                </div>

            </div>

        </div>

    );

}