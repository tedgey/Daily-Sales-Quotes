import React from "react";
import NavBar from "./NavBar";
import Quote from "./Quote";
import Logo from "./Logo";
import QuoteScore from "./QuoteScore";
import Social from "./Social";
import Footer from "./Footer";

import "../App.css";

function Home() {
  return (
    <>
      <NavBar>
        <Logo />
      </NavBar>
      <div className="App-body">
        <Quote />
        <QuoteScore />
        <Social />
      </div>
      <Footer />
    </>
  );
}

export default Home;
