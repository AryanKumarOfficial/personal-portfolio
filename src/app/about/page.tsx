import React from 'react'
import styles from "@/styles/About.module.css";
import Skills from '@/components/Skills';
import Education from '@/components/Education';

const About: React.FC = () => {
    return (
        <>
            <section className={styles.about}>
                <h1 className={`${styles.heading} text-[6vw]`}> About <span>Me</span></h1>

                <div className={styles.row}>

                    <div className={styles.info_container}>
                        <h1>Personal Info</h1>

                        <div className={styles.box_container}>
                            <div className={styles.box}>
                                <h3><span>Name: </span> Aryan Kumar</h3>
                                <h3><span>Age: </span> {(new Date().getFullYear()) - 2005} </h3>
                                <h3><span>Email: </span><span
                                    className="!text-white lowercase">aryan.official.cse@mail.com</span></h3>
                                <h3><span>Address: </span> Sitamarhi, Bihar </h3>
                            </div>

                            <div className={styles.box}>
                                <h3><span>Freelance: </span> Available </h3>
                                <h3><span>Skill: </span> Full Stack Developer </h3>
                                <h3><span>Experience: </span> {(new Date().getFullYear()) - 2021} years </h3>
                                <h3><span>Language: </span> English </h3>
                            </div>
                        </div>

                        <a href="resume-aryan.pdf" className={styles.btn} download> Download CV <i
                            className="fas fa-download"></i> </a>
                    </div>

                    <div className={styles.count_container}
                         style={{ //temporary
                             display: "flex",
                             flexDirection: "column",
                             justifyContent: "center",
                             paddingTop: "15px"
                         }}
                    >
                        <div className={styles.box}
                             style={{ // temporary
                                 display: "flex",
                                 flexDirection: "column",
                                 justifyContent: "center"
                             }}
                        >
                            <h3>{(new Date().getFullYear()) - 2021}+</h3>
                            <p>Years of Experience</p>
                        </div>

                        {/*<div className={styles.box}>*/}
                        {/*    <h3>50+</h3>*/}
                        {/*    <p>Happy Clients</p>*/}
                        {/*</div>*/}

                        <div className={styles.box}
                             style={{ //temporary
                                 display: "flex",
                                 flexDirection: "column",
                                 justifyContent: "center"
                             }}
                        >
                            <h3>150+</h3>
                            <p>Projects Completed</p>
                        </div>

                        {/*<div className={styles.box}>*/}
                        {/*    <h3>3</h3>*/}
                        {/*    <p>Awards Won</p>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>

            <Skills/>
            {/*<Experience/>*/}
            {/*<Projects/>*/}
            {/*<Testimonials/>*/}
            <Education/>
        </>
    )
}

export default About;
