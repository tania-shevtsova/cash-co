import React, { useState, useReducer, useEffect } from "react";
import styles from "./Footer.module.css";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  useEffect(()=>{
    AOS.init();
  }, []);
  // const [phone, setPhone]=useState('');
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      message: "",
    }
  );


  const [userInputPhone, setInputPhone] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      phone: ""
    }
  );

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInput({ [name]: value });
  };

  const handleNumber=(value)=>{
    // const {phone}=userInputPhone
    setInputPhone({phone: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, message } = userInput;
    const {phone}=userInputPhone;
    console.log(name, phone, message);
    try {
      await axios({
        method: "POST",
        url: "http://localhost:3000/call",
        data: { name, phone, message },
      }).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(()=>{

    _createMap()
  
  }, []);

  const _createMap=()=>{
    const existMap=document.getElementById('weathermap');
    if(existMap.childNodes.length>0){

      return;
    }

    let L = window.L;
    
    let map = L.map("weathermap").setView([50.39621, 30.48923], 13);


        L.tileLayer(
          "https://api.maptiler.com/maps/darkmatter/{z}/{x}/{y}.png?key=HtgFiSQcqlaIjj7ncVqI",
          {
            maxZoom: 19,
            attribution:
              '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
          }
        ).addTo(map);
  
        L.control.scale().addTo(map);
        const marker = L.marker([50.39621, 30.48923])
          .bindPopup("Ул. Казацкая 124/5, Киев")
          .addTo(map);
        marker.on("click", function (e) {
          map.setView(e.latlng, 20);
        })
  }

  return (
    <>
      <div className={styles.footerWrapper} data-aos="fade-up" data-aos-duration="1000">
        <span className={styles.footerHeader}>
          Having problems with your car?
        </span>
        <span id="contacts" className={styles.footerBook}>
          Call now
        </span>

        <form className={styles.footerForm}>
          <input
            placeholder="Your name"
            name="name"
            value={userInput.name}
            className={styles.footerInput1}
            onChange={handleChange}
          />

          <PhoneInput
            country={"ua"}
            value={userInputPhone.phone}
            onChange={handleNumber}
          />
{/* 
          <input
            className={styles.footerInput1}
            name="number"
            value={userInput.number}
            placeholder="Your phone number*"
            onChange={handleChange}
          /> */}
          <textarea
            className={styles.footerTextArea}
            name="message"
            value={userInput.message}
            placeholder="Message"
            onChange={handleChange}
          />
          <button
            className={styles.footerSubmitBtn}
            type="submit"
            onClick={handleSubmit}
          >
            Call back
          </button>
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



    
      <div style={{ position: "relative" }}>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomWrapper}>
            <span className={styles.footerBottomDesc}>Contact us</span>
            <ul className={styles.footerBottomList}>
              <li className={styles.footerBottomItem}>
                Email{" "}
                <a
                  href="mailto:info@gmail.com"
                  className={styles.footerBottomMail}
                >
                  info@gmail.com
                </a>
              </li>
              <li className={styles.footerBottomItem2}>
                Phone{" "}
                <a href="tel:+08081591234" className={styles.footerBottomPhone}>
                  08081591234
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
