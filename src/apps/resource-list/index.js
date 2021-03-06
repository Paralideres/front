import 'normalize.css';
import 'common/styles/global.css';

import 'babel-core/register';
import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './app/store';
import Main from './app/containers/Main';

const store = configureStore();
const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  rootEl);
