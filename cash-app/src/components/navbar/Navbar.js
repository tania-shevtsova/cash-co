import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';
import RegisterModal from '../registerModal/RegisterModal';
import LoginModal from '../loginModal/LoginModal';

const Navbar = () => {
    const [isOpen, setOpen]=useState(false);
    const [isOpenLogin, setOpenLogin]=useState(false);
    
   return ( <nav className={styles.navbar}>
        <Link to='/' className={styles.logo}>
            <span className='logo'>Cash $</span>
            <span className='logo'>Co</span>
            </Link>
            <a className={styles.navLink}>Home</a>
            <a className={styles.navLink}>About</a>
            <a className={styles.navLink}>Services</a>
            <a className={styles.navLink}>Prices</a>
            <a className={styles.navLink}>Contact</a>
            <button className={styles.navButton} onClick={(e)=>{e.preventDefault(); setOpenLogin(!isOpenLogin)}}>Sign in</button>
            <button className={styles.navButton} onClick={(e)=>{ e.preventDefault(); setOpen(!isOpen)}}>Sign up</button>
            {isOpen && <RegisterModal/>}
            {isOpenLogin && <LoginModal/>}
        </nav>
   )
}

export default Navbar;