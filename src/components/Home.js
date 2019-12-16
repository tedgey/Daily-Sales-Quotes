import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./NavBar";
import Quote from "./Quote";
import Logo from "./Logo";
import QuoteScore from "./QuoteScore";
import Social from "./Social";
import Footer from "./Footer";

import "../App.css";

function Home() {
  return (
    <div className="App">
      <NavBar>
        <Logo />
      </NavBar>
      <div className="App-body">
        <Quote />
        <QuoteScore />
        <Social />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
