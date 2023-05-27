import styles from "./styles.module.css";
import SectionTag from "../SectionTag";
import InfoTile from "../InfoTile";
import { services } from "../../public/constants";


export default function ServiceOfferings() {

    return (

        <div className={styles.servicesContainer}>

            <SectionTag title="What we do"
                        size="24px" />

            <div className={styles.header}>
                <p className={styles.heading}>We offer a complete range of bespoke design and development services to help you turn your ideas into digital masterpieces</p>
            </div>

            <div className={styles.offeringsSection}>

                { services.map((item, index) => <InfoTile image={item.image}
                                                          key={index}
                                                          title={item.title}
                                                          description={item.description} />) }

            </div>

            <SectionTag title="Case studies" />


        </div>

    );

}