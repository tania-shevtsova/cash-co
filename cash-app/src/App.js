import React, { useState } from "react";
import Container from "./components/container/Container";
import Navigation from "./components/navigation/Navigation";
import Background from "./components/background/Background";
import Burger from "./components/burger/Burger";
import Map from "./components/google-map/GoogleMap";
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar';
import styles from './App.module.css'
import Header from './components/header/Header'

function App() {
  return (

    <div className={styles.background}>
       <div className={styles.layer}></div>
    <div className={styles.wrapper}>
      <section className={styles.headerSection}>
        <Navbar/>
        <Header/>
      </section>
      {/* <div id="App">
        <div id="pageWrap">
          <Navigation pageWrapId={"page wrap"} outerContainerId={"App"} />
          <Background />
          <Footer/>
        </div>
      </div> */}
    </div>
    </div>
   
  );
}

export default App;

//TODO
/*
- Сделать кнопку для связи
- Сделать кнопку личного кабинета, Log out'а. Сделать модальное окно для регистрации/логинизации. Сделать модальное окно для личного кабинета.
*/
