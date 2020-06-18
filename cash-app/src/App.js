import React, {useEffect} from "react";
import {  withRouter } from "react-router-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import  "./App.module.css";

import HomePage from './pages/HomePage';
import Verify from './components/Verify';

  

// TODO CALL BACK ON THE SIDE, BUTTON CALL BACK SCROLLS TO THE BUTTON, SIGN IN SUGN UP INSTEAD OF NUMBER, PHONE NUMBER IN THE FOOTER
function App(props) {
 
  const docWidth = document.documentElement.offsetWidth;
  
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);
// isAuth=true;
//      if(!isAuth){
    return (
      <>
        <Router>
           <Route path='/' exact component={HomePage} />
            <Route path='/:otpCode' exact component={Verify} />
        </Router>
        </>
    )






    // <>
    //   <div className={styles.background}>
    //     <div className={styles.layer}></div>
    //     <div className={styles.wrapper}>
    //       <section className={styles.headerSection}>
    //         <Navbar />
    //         <Header />
    //       </section>
    //     </div>
    //     <section className='main'>
    //      <MainContent/>
    //     </section>
    //   </div>
    //   <div className={styles.contentBackground}>
    //     <section className={styles.projects}>
    //     <Projects/>
    //     </section>
    //   </div>
    //   <section className={styles.service}>
    //   <Service/>
    //   </section>
    //   <section className={styles.services}>
    //   <Services/>
    //   </section>
    //   <footer className={styles.footer}>
    //   <Footer/>
    //   </footer>
    // </>

}

export default (withRouter(App));

//TODO
/*
- Сделать кнопку для связи
- Сделать кнопку личного кабинета, Log out'а. Сделать модальное окно для регистрации/логинизации. Сделать модальное окно для личного кабинета.
*/
