import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV !== 'production') {
  const registerServiceWorker = require('./registerServiceWorker');
  registerServiceWorker();
}
