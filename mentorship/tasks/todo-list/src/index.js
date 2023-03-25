import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ProgressContext from "./components/ProgressContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProgressContext>
    <App />
  </ProgressContext>
);
