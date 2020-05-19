import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
    <nav className={styles.navbar}>
        <Link to='/' className={styles.logo}>
            <span className='logo'>Cash $</span>
            <span className='logo'>Co</span>
            </Link>
            <a className={styles.navLink}>Home</a>
            <a className={styles.navLink}>About</a>
            <a className={styles.navLink}>Services</a>
            <a className={styles.navLink}>Prices</a>
            <a className={styles.navLink}>Contact</a>
            <button className={styles.navButton}>Sign in</button>
            <button className={styles.navButton}>Sign up</button>
        </nav>
);

export default Navbar;