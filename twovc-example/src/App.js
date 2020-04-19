import React from 'react';
import logo from './logo.svg';
import './App.css';
import twovc from "twovc.macro";

function App() {
  const a = 'a'
  return (
    <div className={twovc("App yash", "yash3",a)}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
