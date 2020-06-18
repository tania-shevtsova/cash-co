import {createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["token", 'authenticated']
  }
   
  const persistedReducer = persistReducer(persistConfig, reducer)

const middlewares=[thunk];
const enhancer=composeWithDevTools(applyMiddleware(...middlewares));

export const  store = createStore(persistedReducer, enhancer)
export const  persistor = persistStore(store);