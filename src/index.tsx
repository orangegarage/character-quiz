import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Quiz from "./routes/Quiz";
import Results from "./routes/Results";
import All from "./routes/All";
import reportWebVitals from "./reportWebVitals";

const navElement = (
  <div className="navbar">
    <Link to="/">Home</Link> | <Link to="/Quiz">Quiz</Link> |{" "}
    <Link to="/All">View All</Link> | Language
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
