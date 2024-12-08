import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <App />
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
