import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import 'normalize.css'

ReactDOM.render(
  <BrowserRouter >
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);
