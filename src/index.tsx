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

const navElement = (
  <div className = "nav">
    <nav className="flex flex-nowrap items-center justify between p-6 container mx-auto">
      <a href = "https://github.com/orangegarage" target ="_blank" rel="noreferrer" className = "mr-10">
        <img src={jinLogo} alt="jinlogo" className= "h-10 w-10"></img>
      </a>
      <div className = "text-#61dafb text-lg lg:flex">
        <Link to="/" className = "block mt-4 lg:inline-block lg:mt-0 mr-10">Home</Link>
        <Link to="/Quiz" className = "block mt-4 lg:inline-block lg:mt-0 mr-10">Quiz</Link>
        <Link to="/All" className = "block mt-4 lg:inline-block lg:mt-0 mr-10">View All</Link>
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
