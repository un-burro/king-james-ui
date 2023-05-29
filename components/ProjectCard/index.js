import styles from "./styles.module.css";
import Line from "../Line";


export default function ProjectCard({ image, title, description }) {

    const cardStyling = { backgroundImage: `linear-gradient(to bottom, 
                                                            rgba(0, 0, 0, 0) 0%, 
                                                            rgba(0, 0, 0, 0) 59%, 
                                                            rgba(0, 0, 0, 0.65) 100%), 
                                            
                                            url(${image})` };

    return (

        <div style={cardStyling}
             className={styles.projectContainer}>

            <div className={styles.overlay}>

                <Line gap_bottom="1rem" />
    
                <div className={styles.titleContainer}>

                    <p className={styles.title}>{title}</p>

                </div>

                <div className={styles.descriptionContainer}>

                    <p className={styles.text}>{description}</p>

                </div>

            </div>

        </div>

    );

}