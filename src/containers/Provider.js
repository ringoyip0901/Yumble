import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store.js';
import { MainContainer } from './MainContainer.js';

render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById("app")
);