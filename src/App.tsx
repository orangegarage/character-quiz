import React from 'react';
import lostarkLogo from './data/img/logo/lostarkLogo.png';
import { Outlet } from 'react-router-dom';
import './App.css';
import { Nav } from './components/nav';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Nav />
      <header className="App-header w-3/4 sm:w-full m-auto whitespace-pre-line">
        <img src={lostarkLogo} className="App-logo" alt="lostarkLogo" />
        <h1 className="text-3xl font-bold mb-5">{t('home.welcome')}</h1>
        <p className="text-base">{t('home.message')}</p>
        <a className="my-10 App-link font-bold text-3xl" href="/Quiz">
          {t('home.takeQuiz')}
        </a>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
