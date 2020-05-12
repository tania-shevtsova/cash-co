import React, { useState } from "react";
import Container from "./components/container/Container";
import css from "./App.css";
import Navigation from "./components/navigation/Navigation";
import Background from "./components/background/Background";
import Burger from "./components/burger/Burger";
import Menu from "./components/menu/Menu";
import Map from "./components/google-map/GoogleMap";

function App() {
  return (
    <>
    <div className="wrapper">
      <div id="App">
        <div id="page-wrap">
          <Navigation pageWrapId={"page wrap"} outerContainerId={"App"} />
          <Background />
        </div>
      </div>
    </div>
    </>
   
  );
}

export default App;

//TODO
/*
- Сделать кнопку для связи
- Сделать кнопку личного кабинета, Log out'а. Сделать модальное окно для регистрации/логинизации. Сделать модальное окно для личного кабинета.
*/
