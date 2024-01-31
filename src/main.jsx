import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./Calculator.jsx";
import GithubLink from "./GithubLink.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <Calculator />
      <GithubLink />
    </>
  </React.StrictMode>
);
