import React from "react";
import NavBar from "./NavBar";
import Quote from "./Quote";
import Logo from "./Logo";
import DailyQuoteLogo from "./DailyQuoteLogo";
import Social from "./Social";
import EmailWrapper from "./EmailWrapper";
import ModalDash from "./ModalDash";
import PhoneQuote from "./PhoneQuote";
// import styled from "styled-components";

import "../App.css";

function Home() {
  return (
    <>
      <NavBar>
        <Logo />
        <DailyQuoteLogo />
      </NavBar>
      <div className="App-body">
        <Quote />
        <PhoneQuote />
        <Social />
        <ModalDash />
      </div>
      <EmailWrapper />
    </>
  );
}

export default Home;
