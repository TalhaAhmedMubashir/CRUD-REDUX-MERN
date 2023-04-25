import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from '../src/appstore/appstore'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Approuting from '../src/approuting/routing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
  <Approuting/>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
