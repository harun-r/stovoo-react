import React from 'react';
import "./assets/scss/app.scss"
import "animate.css/animate.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouters from "./routers/AppRouters";
function App() {
  return (
    <div className="App">
      <Router>
        <AppRouters />
      </Router>
    </div>
  );
}

export default App;
