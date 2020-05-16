import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
    <nav className={styles.navbar}>
        <Link to='/' className={styles.logo}>
            <span>Cash $</span>
            <span>Co</span>
            </Link>
            <NavLink to='/feedback' className={styles.contactsLink}>Контакты</NavLink>
        </nav>
);

export default Navbar;