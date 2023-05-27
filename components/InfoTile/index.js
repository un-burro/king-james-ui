import styles from "./styles.module.css";
import Image from "next/image";


export default function InfoTile({ image, title, description }) {

    return (

        <div className={styles.tileContainer}>

            <div className={styles.imageContainer}>

                <Image src={image}
                       width={64}
                       height={64} />

            </div>

            <div className={styles.titleContainer}>
                <p className={styles.title}>{title}</p>
            </div>

            <div className={styles.descriptionContainer}>
                <p className={styles.text}>{description}</p>
            </div>

        </div>

    );
}