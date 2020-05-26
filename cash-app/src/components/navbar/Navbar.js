import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';
import RegisterModal from '../registerModal/RegisterModal';
import LoginModal from '../loginModal/LoginModal';

const Navbar = (props) => {
    const [isOpen, setOpen]=useState(false);
    const [isOpenLogin, setOpenLogin]=useState(false);

    const handleOpen=(e)=> {
        e.preventDefault(); 
        setOpen(!isOpen); 
        document.body.style.overflow = 'hidden';  
        document.body.style.position = 'fixed';
    }

    const handleOpenLogin=(e)=>{
        e.preventDefault(); 
        setOpenLogin(!isOpenLogin);
        document.body.style.overflow = 'hidden';  
        document.body.style.position = 'fixed';
    }
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
            <button className={styles.navButton} onClick={handleOpenLogin}>Sign in</button>
            <button className={styles.navButton} onClick={handleOpen}>Sign up</button>
            {isOpen && <RegisterModal isOpen={isOpen} onClose={handleOpen}/>}
            {isOpenLogin && <LoginModal isOpenLogin={isOpenLogin} onClose={handleOpenLogin}/>}
        </nav>
   )
}

export default Navbar;