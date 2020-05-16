import React from "react";
import "./Footer.css";

const Footer = () => {
  const Container = document.getElementById("map");
  console.log(Container);

  return (
    <>
   <h2 className='nav-header'>CONTACTS</h2>
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
  </div>
  </>)
};

export default Footer;
