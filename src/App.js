import React from "react";
import "./assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
      </Router>
      <Router>
        <Route exact path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
