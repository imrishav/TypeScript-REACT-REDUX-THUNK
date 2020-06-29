import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { App } from './components/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers/index';

const middlewares = [thunk, logger];
const store = createStore(reducers, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
