import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import ContextPovaydir from "./components/Search/indexx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextPovaydir>
        <App />
      </ContextPovaydir>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
