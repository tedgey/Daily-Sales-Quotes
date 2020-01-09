import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

import "./App.css";
import QuoteList from "./components/QuoteList";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/QuoteList" component={QuoteList} />
      </div>
    </Router>
  );
}

export default App;
