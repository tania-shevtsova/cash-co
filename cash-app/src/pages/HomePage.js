import React, {useEffect, useState} from 'react'
import Navbar from "../components/navbar/Navbar";
// import styles from "../App.module.css";
import Header from "../components/header/Header";
import MainContent from '../components/main/MainContent'
import Services from '../components/services/Services';
import Footer from "../components/footer/Footer";
import Projects from '../components/projects/Projects';
import Service from '../components/service/Service';
import styles from './HomePage.module.css';
import { css } from "@emotion/core";
import MoonLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const HomePage = (props) => {
  const [isLoading, setLoading]=useState(true)
  useEffect(()=>{
    console.log('propsss', props)
    setLoading(false)
  })
    return (
      <>
      {isLoading ?  
      <MoonLoader
      css={override}
      size={150}
      color={"#123abc"}/> : 
        
          <>
        <div className={styles.background}>
          <div className={styles.layer}></div>
          <div className={styles.wrapper}>
            <section className={styles.headerSection}>
              <Navbar />
              <Header />
            </section>
          </div>
          <section className='main'>
           <MainContent/>
          </section>
        </div> 
        <div className={styles.contentBackground}>
          <section className={styles.projects}>
          <Projects/>
          </section>
        </div>
        <section className={styles.service}>
        <Service/>
        </section>
        <section className={styles.services}>
        <Services/>
        </section>
        <footer className={styles.footer}>
        <Footer/>
        </footer>
        </>}
      </>
    )
}

export default HomePage;