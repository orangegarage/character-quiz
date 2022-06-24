import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Quiz from './routes/Quiz';
import Results from './routes/Results';
import All from './routes/All';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { Paths } from './components/nav/constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <div className="select-none">
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Home} element={<App />} />
        <Route index element={<App />} />
        <Route path={Paths.Quiz} element={<Quiz />} />
        <Route path={Paths.Results} element={<Results />} />
        <Route path={Paths.All} element={<All />} />
      </Routes>
    </BrowserRouter>
  </div>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
