 import React from 'react';
 import ReactDOM from 'react-dom';
 import App from './App';
 import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createRoot } from 'react-dom';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
