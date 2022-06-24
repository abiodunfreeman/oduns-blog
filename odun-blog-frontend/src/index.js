import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const getData = async () => {
//   const response = await fetch('http://localhost:5000/posts', { mode: 'cors' });
//   console.log(response);
// };
// getData();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
