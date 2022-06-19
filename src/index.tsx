import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Quiz from "./routes/Quiz";
import Results from "./routes/Results";
import All from "./routes/All";
import reportWebVitals from "./reportWebVitals";
import jinLogo from "./jinhub.webp";
import "./i18n";

const navElement = (
  <div className="bg-[#0583D2] flex items-center">
    <nav className="flex items-center p-4 mx-auto">
      <a
        href="https://github.com/orangegarage"
        target="_blank"
        rel="noreferrer"
        className="lg:mr-10 mr-5"
      >
        <img src={jinLogo} alt="jinLogo" className="h-10 w-10"></img>
      </a>
      <div className="text-#61dafb text-lg flex justify-items-center">
        <Link
          to="/"
          className="block lg:inline-block lg:mr-7 mr-2 font-bold px-3 py-2 rounded-md hover:text-white hover:bg-[#055e96] transition-colors duration-500"
        >
          Home
        </Link>
        <Link
          to="/Quiz"
          className="block lg:inline-block lg:mr-7 mr-2 font-bold px-3 py-2 rounded-md hover:text-white hover:bg-[#055e96] transition-colors duration-500"
        >
          Quiz
        </Link>
        <Link
          to="/All"
          className="block lg:inline-block lg:mr-7 mr-2 font-bold px-3 py-2 rounded-md hover:text-white hover:bg-[#055e96] transition-colors duration-500"
        >
          View All
        </Link>
      </div>
    </nav>
  </div>
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <div>
    <BrowserRouter>
      {navElement}
      <Routes>
        <Route path="/" element={<App />} />
        <Route index element={<App />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Results" element={<Results />} />
        <Route path="/All" element={<All />} />
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
