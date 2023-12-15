import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "../src/scss_custom/style.css";
import "bootstrap/dist/js/bootstrap.min.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
