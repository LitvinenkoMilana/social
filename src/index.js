import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from './redax/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App state={state} />
);




