import React from 'react';
import tcqLogo from './data/img/logo/tcq.png';
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
        <img src={tcqLogo} className="App-logo" alt="tcqLogo" />
        <h1 className="text-3xl font-bold mb-5">{t('home.welcome')}</h1>
        <p className="text-base">{t('home.message')}</p>
        <a
          className="my-10 App-link font-bold text-3xl hover:text-[#BBA14F]"
          href="/Quiz"
        >
          {t('home.takeQuiz')}
        </a>
        <a
          className="mt-10 text-lg hover:text-[#BBA14F] transition-colors duration-300 mb-5"
          href="https://twitter.com/Jincontroller"
        >
          <b>{t('home.feedbackLink')}</b>
        </a>
        <p className="text-base">{t('home.thanks')}</p>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
