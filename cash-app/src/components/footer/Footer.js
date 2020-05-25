import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {

  return (
    <>
    <div className={styles.footerWrapper}>
    <span className={styles.footerHeader}>Having problems with your car?</span>
    <span id="contacts" className={styles.footerBook}>Call now</span>

<form className={styles.footerForm}>
    <input placeholder='Your name'className={styles.footerInput1}/>
    <input className={styles.footerInput1} placeholder='Your phone number*'/>
    <textarea className={styles.footerTextArea} placeholder='Message'/>
    <button className={styles.footerSubmitBtn} type="submit">Call back</button>
    </form>
    {/* <span className={styles.phoneIcon}></span> <NavLink to='/feedback' className={styles.contactsLink}> 0808 159 1234</NavLink> */}


   {/* <h2 className='nav-header'>CONTACTS</h2>
  <div className='mainWrap'>
  <span className='footer-city'>
  Kyiv
  </span>
  <span className='footer-address'>
  Kozatska st., 124/5
  </span>
  <span className='footer-work'>
  Monday - Friday
  </span>
    <span className='footer-workTime'>
  08:00 AM - 18:00 PM
  </span>

   <span className='footer-work'>
   Saturday - Sunday
  </span>

  <span className='footer-workTime'>
  08:00 AM - 16:00 PM
  </span>
  </div> */}

  </div>
  <div style={{position: "relative"}}>
    <div className={styles.footerBottom}>
      <div className={styles.footerBottomWrapper}>
    <span className={styles.footerBottomDesc}>Contact us</span>
    <ul className={styles.footerBottomList}>
      <li className={styles.footerBottomItem}>Email <a href="mailto:info@gmail.com" className={styles.footerBottomMail}>info@gmail.com</a></li>
      <li className={styles.footerBottomItem2}>Phone <a href="tel:+08081591234" className={styles.footerBottomPhone}>08081591234</a></li>
    </ul>
    </div>
  </div>
  </div>
  </>
  )

};

export default Footer;
