import styles from "./styles.module.css";


export default function CTAButton({ title, colour = "#fff", width = "127px", height = "41px", text_colour = "#000", link = "#" }) {

    const buttonStyling = { color: text_colour, 
                            backgroundColor: colour,
                            width: width,
                            height: height, }

    return (

        <a href={link}>

            <button className={styles.ctaButton}
                    style={buttonStyling}>{title}</button>

        </a>

    );

}