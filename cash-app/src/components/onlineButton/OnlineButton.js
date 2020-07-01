import React from 'react';
import styles from './OnlineButton.module.css'

const OnlineButton = () => {
    return (
        <>
        <a className={styles.button} href='#'>
            <div className={styles.buttonBackground}></div>
            <div className={styles.buttonWave}></div>
            <div className={styles.buttonText}>Book online</div>
            <div className={styles.buttonIcon}></div>
        </a>
        </>
    )
}

export default OnlineButton;