import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    return (
        <>
        <div className={styles.wrapper}>
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