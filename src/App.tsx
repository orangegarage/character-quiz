import React from "react";
import windowsLogo from "./windowslogo.svg";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={windowsLogo} className="App-logo" alt="windowsLogo" />
        <p>
          What <code>Waller.exe</code> outputs
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
      <Outlet />
    </div>
  );
}

export default App;
