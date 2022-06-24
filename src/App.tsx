import React from 'react';
import windowsLogo from './windowslogo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Nav } from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={windowsLogo} className="App-logo" alt="windowsLogo" />
        <h1 className="text-3xl font-bold">Hello world!</h1>
        <p>This is just a recommendation</p>
        <a className="App-link" href="/Quiz">
          Take Quiz
        </a>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
