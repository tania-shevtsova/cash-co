import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {

  return (
    <div className={styles.footerWrapper}>
    <span className={styles.footerHeader}>Having problems with your car?</span>
    <span className={styles.footerBook}>Book now</span>

<form id="contacts" className={styles.footerForm}>
    <input placeholder='Your name*'className={styles.footerInput1}/>
    <input className={styles.footerInput1} placeholder='Your email address*'/>
    <textarea className={styles.footerTextArea} placeholder='Message*'/>
    <button className={styles.footerSubmitBtn} type="submit">Send message</button>
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
  </div>)
};

export default Footer;
