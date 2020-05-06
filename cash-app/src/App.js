import React, { useState } from "react";
import Container from "./components/container/Container";
import css from "./App.css";
import Navigation from "./components/navigation/Navigation";
import Background from "./components/background/Background";
import Burger from "./components/burger/Burger";
import Menu from "./components/menu/Menu";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="wrapper">
      <div id="App">
        {/* <Burger open={open} setOpen={setOpen}/>
      <Menu open={open} setOpen={setOpen}/> */}
        <Navigation
          open={open}
          setOpen={setOpen}
          pageWrapId={"page wrap"}
          outerContainerId={"App"}
        />
        <div id="page-wrap">
          <h2
            style={{
              position: "relative",
              zIndex: 10,
              left: "50%",
              paddingTop: "3%",
            }}
          >
            CASH APP
          </h2>
          <Background />
        </div>
      </div>
    </div>
  );
}

export default App;

//TODO
/*
- Сделать кнопку для связи
- Сделать кнопку личного кабинета, Log out'а. Сделать модальное окно для регистрации/логинизации. Сделать модальное окно для личного кабинета.
-Сделать бордер кнопки Sign in. При ховере на Sign up поменять флаг на active, сделать проверку, если active: true, добавить соответствующий класс с бордером. Для кнопки Sign in, убрать бордер. Сделать то же самое в обратную сторону.
*/
