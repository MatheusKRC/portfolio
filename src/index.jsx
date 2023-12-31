import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import './CSS/About.css';
import './CSS/Contact.css';
import './CSS/Skills.css';
import './CSS/Projects.css';
import './CSS/NavBar.css';
import './CSS/Colors.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
