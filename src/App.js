
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Games from './Games';
import Login from './Login';

function App() {
  return (
    <div className="App">

      <Routes>
          
          <Route  exact path="/" element={<Login/>} />
          <Route  path="/games" element={<Games/>} />

      </Routes>
    </div>
  );
}

export default App;
