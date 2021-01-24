import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../src/app/Routes';
import '../src/resource/scss/app.scss';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);