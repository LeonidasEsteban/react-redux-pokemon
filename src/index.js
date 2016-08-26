import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import pokemonApp from './reducers/index.js';

const store = createStore(pokemonApp);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
