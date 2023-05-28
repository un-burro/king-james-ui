import styles from "./styles.module.css";
import Line from "../Line";


export default function SectionTag({ title, colour = "#000", size = "20px" }) {

    const textStyling = { color: colour, 
                          fontSize: size, };

    return (

        <div className={styles.tagContainer}>

            <Line gap_right="20px" />

            <div>

                <p style={textStyling}>{title}</p>

            </div>

        </div>

    );

}