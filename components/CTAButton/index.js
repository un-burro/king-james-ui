import styles from "./styles.module.css";


export default function CTAButton({ title, colour = "#fff", width = "7.9375rem", height = "2.5625rem", text_colour = "#000", link = "#" }) {

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