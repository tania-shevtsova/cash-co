import React from 'react'
import styles from './Header.module.css'


const Header = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse'}}>
        <div className={styles.headerRectangle}></div>
        <span className={styles.headerArrow}></span>
        <span className={styles.headerArrow}></span>
        <div>
        <h1 className={styles.headerDesc}>Service</h1>
        <span className={styles.headerAbout}>Over 35 Years Of Quality Auto Service</span>
        <a href='#contacts' className={styles.headerButton}>Book now</a>
        </div>
</div>
    )
}

export default Header;