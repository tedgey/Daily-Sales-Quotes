import React from "react";
import styled from "styled-components";
import { BrowserRouter as Link } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Quote from "./Quote";
import EmailWrapper from "./EmailWrapper";
import SocialWrapper from "./SocialWrapper";
import DatePosted from "./DatePosted";

const QuoteList = styled.div`
  font-size: 18px;
  width: 80%;
  height: 20vh;
  display: flex;
  flex-direction: center;
  justify-content: flex-end;
  text-align: center;
  color: black;
  font-weight: 500;
  margin-top: 0;
  // border-style: solid;
  // border-color: red;
`;

export default () => (
  <>
    <NavBar>
      <Logo />
    </NavBar>
    <EmailWrapper />
    <QuoteList>
      <DatePosted />
      <Quote />
    </QuoteList>
    <SocialWrapper />
    <QuoteList>
      <DatePosted />
      <Quote />
    </QuoteList>
    <SocialWrapper />
  </>
);
