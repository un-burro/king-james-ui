import styles from "./styles.module.css";
import SectionTag from "../SectionTag";


export default function Footer() {

    return (

        <div className={styles.footerContainer}>

            <SectionTag title="Contact us"
                        colour="#fff" />

            <div className={styles.outerContainer}>

                {/* <div className={styles.leftContainer}> */}
                <div>

                    <div className={styles.ctaContainer}>

                        <div className={styles.ctaSection}>

                            <p className={styles.ctaText}>Have a project in mind?</p> 
                            <p className={styles.ctaText}>Let's make it happen</p>

                        </div>

                    </div>

                    <div className={styles.leftSection}>
                    {/* <div className={styles.termsSection}> */}

                        <div className={styles.termsSection}>

                            <p className={styles.text}>Terms of service</p>
                            <p className={styles.text}>Privacy policy</p>
                            <p className={styles.text}>Impressum</p>

                        </div>

                        <div className={styles.socialsSection}>

                            <div className={styles.leftSocials}>

                                <a href="#"><p className={styles.text}>Facebook</p></a>
                                <a href="#"><p className={styles.text}>Instagram</p></a>
                                <a href="#"><p className={styles.text}>Twitter</p></a>

                            </div>

                            <div className={styles.middleSocials}>

                                <a href="#"><p className={styles.text}>Gitbub</p></a>
                                <a href="#"><p className={styles.text}>Linkedin</p></a>
                                <a href="#"><p className={styles.text}>Teams</p></a>

                            </div>

                            <div className={styles.rightSocials}>

                                <a href="#"><p className={styles.text}>Youtube</p></a>
                                <a href="#"><p className={styles.text}>Behance</p></a>
                                <a href="#"><p className={styles.text}>Dribble</p></a>

                            </div>

                        </div>

                    </div>

                </div>

                <div className={styles.rightContainer}>

                    <div className={styles.contactSection}>

                        <p className={styles.text}>22 Lawley Road, Woodstock, 7925,</p>
                        <p className={styles.text}>Cape Town, South Africa</p>
                        <p className={styles.text}>+27 21 469 1500</p>
                        <p className={styles.text}><span className={styles.email}>enquirie@kingjames.co.za</span></p>

                    </div>

                    <div className={styles.exploreSection}>

                        <p className={styles.text}>Explore open jobs</p>
                        <p className={styles.text}>&copy;2000&mdash;2022 King James Digital</p>

                    </div>
                        
                </div>

            </div>

        </div>

    );

}