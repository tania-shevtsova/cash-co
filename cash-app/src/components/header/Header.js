import React from 'react'
import styles from './Header.module.css'


const Header = () => {
    return (
        <>
        <h1 className={styles.headerDesc}>Service</h1>
        <span className={styles.headerAbout}>Over 35 Years Of Quality Auto Service</span>
        <button className={styles.headerButton}>Book now</button>
</>
    )
}

export default Header;