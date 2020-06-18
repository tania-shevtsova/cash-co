import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './index.css';
import './assets/fonts/fonts.css'
import {store, persistor} from './redux/store'

ReactDOM.render(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
  <Router>
  <App/>
  </Router>
  </PersistGate>
  </Provider>,
  document.getElementById("root")
  );