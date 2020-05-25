import React from 'react';
import {Link} from 'react-router-dom';
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
            <Link className={styles.navButton} to='/login' onClick={()=>console.log('hello')}>Sign in</Link>
            <Link className={styles.navButton} to='/register'>Sign up</Link>
        </nav>
);

export default Navbar;