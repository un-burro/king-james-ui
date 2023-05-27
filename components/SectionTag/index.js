import styles from "./styles.module.css";


export default function SectionTag({ title, colour = "#fff", size = "20px" }) {

    const textStyling = { color: colour, 
                          fontSize: size, };

    return (

        <div className={styles.tagContainer}>

            <div className={styles.line} />

            <div>

                <p className={styles.text}
                   style={textStyling}>{title}</p>

            </div>

        </div>

    );

}