import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import ProtectedRoute from "./component/ProtectedRoute";
import Home from "./component/Home";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    
  </React.StrictMode>,
  document.getElementById("root")
);