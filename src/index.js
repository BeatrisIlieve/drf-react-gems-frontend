import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";
import { ShippingDetailsProvider } from "./contexts/ShippingDetailsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthenticationProvider>
        <ShippingDetailsProvider>
          <App />
        </ShippingDetailsProvider>
      </AuthenticationProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
