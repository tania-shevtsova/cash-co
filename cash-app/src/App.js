import React from 'react';
import Container from './components/container/Container'
import css from './App.css';
import Navigation from './components/navigation/Navigation';
import Background from './components/background/Background';
function App() {
  return (
    <Container>
      <Navigation/>
      <Background />
    <h2>CASH APP</h2>
    </Container>
  );
}

export default App;
