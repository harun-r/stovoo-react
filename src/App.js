import React from 'react';
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
