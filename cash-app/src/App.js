import React from 'react';
import Container from './components/container/Container'
import css from './App.css';
import Navigation from './components/navigation/Navigation';
import Background from './components/background/Background';
function App() {
  return (
    <Container>
      <Navigation/>
      <h2 style={{position: 'relative', zIndex: 1223}}>CASH APP</h2>
      <Background />
   
    </Container>
  );
}

export default App;

//TODO
/*
- Сделать кнопку для связи
- Сделать кнопку личного кабинета, Log out'а. Сделать модальное окно для регистрации/логинизации. Сделать модальное окно для личного кабинета.
-Сделать бордер кнопки Sign in. При ховере на Sign up поменять флаг на active, сделать проверку, если active: true, добавить соответствующий класс с бордером. Для кнопки Sign in, убрать бордер. Сделать то же самое в обратную сторону.
*/ 
