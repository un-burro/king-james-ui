import styles from "./styles.module.css";
import SectionTag from "../SectionTag";
import InfoTile from "../InfoTile";
import ProjectCard from "../ProjectCard";
// import { services, projects, brands } from "../../public/constants";
import { services, brands } from "../../public/constants";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function ServiceOfferings() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

      fetchProjects();

    }, []);

    async function fetchProjects() {

        try {

            const response = await fetch("/api/server");
            const result = await response.json();
            setProjects(result);
            console.log("fetched:", result);

        } catch (error) {

            console.error("Error fetching projects:", error);

        }

    }

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

            <div className={styles.projectsSection}>

                { projects.map((item, index) => <ProjectCard image={item.imageUrl}
                                                             key={index}
                                                             title={item.title}
                                                             description={item.description} />) }

            </div>

            <SectionTag title="You'll be in good company" />

            <div className={styles.partnersHeader}>
                <p className={styles.heading}>Trusted by leading brands</p>
            </div>

            <div className={styles.brandsSection}>

                { brands.map((item, index) => <div key={index}
                                                    className={styles.box}>
                                                
                                                    <Image src={item.image}
                                                           width={256}
                                                           height={120} />
                                                           {/* sizes="100vw"
                                                           style={{ width: "100%", height: "auto" }} />
                                                           style={{ width: "100%", height: "auto" }} /> */}
                                               
                                               </div> ) }

            </div>

        </div>

    );

}