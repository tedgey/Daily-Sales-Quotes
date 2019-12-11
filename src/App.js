import React from "react";
import NavBar from "./components/NavBar";
import Quote from "./components/Quote";
import Logo from "./components/Logo";
import QuoteScore from "./components/QuoteScore";
import Social from "./components/Social";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar>
        <Logo />
      </NavBar>
      <body className="App-body">
        <Quote />
        <QuoteScore />
        <Social />
      </body>
      <Footer />
    </div>
  );
}

export default App;
