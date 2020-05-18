import React, { useState } from "react";
import Container from "./components/container/Container";
import Navigation from "./components/navigation/Navigation";
import Background from "./components/background/Background";
import Burger from "./components/burger/Burger";
import Map from "./components/google-map/GoogleMap";
import Navbar from "./components/navbar/Navbar";
import styles from "./App.module.css";
import Header from "./components/header/Header";
import MainContent from './components/main/MainContent'
import Services from './components/services/Services';
import Footer from "./components/footer/Footer";

function App() {
  const docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
  return (
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
      <div className={styles.contentBackground}></div>
      <section className={styles.services}>
      <Services/>
      </section>
      <footer className={styles.footer}>
      <Footer/>
      </footer>
    </>
  );
}

export default App;

//TODO
/*
- Сделать кнопку для связи
- Сделать кнопку личного кабинета, Log out'а. Сделать модальное окно для регистрации/логинизации. Сделать модальное окно для личного кабинета.
*/
