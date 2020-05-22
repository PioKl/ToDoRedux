import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from "react-redux";
import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import throttle from 'lodash/throttle';

import rootReducer from "./reducers";
import App from './components/App';
import * as serviceWorker from './serviceWorker';

//const store = createStore(rootReducer);

//Rozwiazanie z localStorage na podstawie
//https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
//https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState
);
store.subscribe(throttle(() => {
  saveState({
    tasks: store.getState().tasks
  });
}, 1000));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
