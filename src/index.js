// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App tab="home" />
  </BrowserRouter>
);