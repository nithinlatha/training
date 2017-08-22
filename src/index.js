import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Event from './Eventhandling';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Event />,
  document.getElementById('root')
);

registerServiceWorker();
