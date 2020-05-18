import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
    <nav className={styles.navbar}>
        <Link to='/' className={styles.logo}>
            <span className='logo'>Cash $</span>
            <span className='logo'>Co</span>
            </Link>
            <span className={styles.phoneIcon}></span><NavLink to='/feedback' className={styles.contactsLink}> 0808 159 1234</NavLink>
        </nav>
);

export default Navbar;