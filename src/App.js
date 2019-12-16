import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";

import "./App.css";
import QuoteList from "./components/QuoteList";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/QuoteList" component={QuoteList} />
    </Router>
  );
}

export default App;
