import React from "react";
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { Login } from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/login" element={<Login/>}/>
      </Route>
    </Routes>
  </Router>
)