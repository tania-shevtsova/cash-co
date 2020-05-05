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
