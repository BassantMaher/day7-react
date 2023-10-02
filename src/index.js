import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// ya3ny ro7 hatly el element eli el id bta3o root eli heya el div eli f file el index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // ha3red el app bta3y
  <React.StrictMode>
    {/* keda da component mesh function 3adeya */}
    <App /> 
    {/* 3obara 3an component el building block eli howa el app nafso */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();