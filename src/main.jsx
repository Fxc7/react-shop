import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './assets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import { title_web } from '../config.js';
import Scroll from './Scroll.jsx';

document.title = title_web;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Scroll />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);