import styles from "./styles.module.css";


export default function SectionTag({ title, colour = "#000", size = "20px" }) {

    const textStyling = { color: colour, 
                          fontSize: size, };

    return (

        <div className={styles.tagContainer}>

            <div className={styles.line} />

            <div>

                <p style={textStyling}>{title}</p>

            </div>

        </div>

    );

}