import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Import React Router
import { BrowserRouter } from "react-router-dom";

//Import styles
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
