import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import'./font/flaticon.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
