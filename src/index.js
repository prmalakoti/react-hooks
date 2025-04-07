import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Effect from './Effect'
import UseReference from './UseReference';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Effect />
    <UseReference></UseReference>
  </React.StrictMode>
);