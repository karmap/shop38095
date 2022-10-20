import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC53NJSMW165WJ82yjw82EQW1L1EO6tiE4",
  authDomain: "shop38095.firebaseapp.com",
  projectId: "shop38095",
  storageBucket: "shop38095.appspot.com",
  messagingSenderId: "289495598173",
  appId: "1:289495598173:web:a20a675604ad287c4739b4"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
