import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SampleComponent from "./SampleComponent";
function App() {
  return (
    <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Project Mini-Mek</h2>
        </div>
        <SampleComponent />
    </div>
);
}

export default App;
