import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/scss/bootstrap.scss';
import './custom_bootstrap.scss';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
