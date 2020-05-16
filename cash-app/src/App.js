import React, { useState } from "react";
import Container from "./components/container/Container";
import "./App.module.css";
import Navigation from "./components/navigation/Navigation";
import Background from "./components/background/Background";
import Burger from "./components/burger/Burger";
import Map from "./components/google-map/GoogleMap";
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="wrapper">
      <Navbar/>
      {/* <div id="App">
        <div id="pageWrap">
          <Navigation pageWrapId={"page wrap"} outerContainerId={"App"} />
          <Background />
          <Footer/>
        </div>
      </div> */}
    </div>
  );
}

export default App;

//TODO
/*
- Сделать кнопку для связи
- Сделать кнопку личного кабинета, Log out'а. Сделать модальное окно для регистрации/логинизации. Сделать модальное окно для личного кабинета.
*/
