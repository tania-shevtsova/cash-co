import React, {useEffect} from 'react';
import styles from './Projects.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    useEffect(()=>{
        AOS.init();
      }, []);
    return (
        <>
        <div className={styles.wrapper} data-aos="fade-up" data-aos-duration="1000">
        <h3 className={styles.projectHeader}>Projects</h3>
            <span className={styles.rect}></span>
            <span className={styles.projectImg}></span>
            <div style={{position: 'relative', left: '28%', marginTop: 60}}>
            <span className={styles.projectAbout}>M4 Project <span className={styles.projectAbout} style={{opacity: 0.5}}>-  Lorem ipsum dolor sit amet, consectetur adipisci</span></span>
        </div>
        </div>
        </>
    )
}

export default Projects;