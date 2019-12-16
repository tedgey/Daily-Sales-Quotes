import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import Counter from "./Counter";
import NavBar from "./NavBar";
import Quote from "./Quote";
import QuoteScore from "./QuoteScore";

const QuoteList = styled.div`
  font-size: 18px;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: center;
  justify-content: center;
  text-align: center;
  color: black;
  font-weight: 500;
  border-style: solid;
  border-color: red;
`;

export default () => (
  <>
    <NavBar>
      <Logo />
    </NavBar>
    <QuoteList>
      <Quote />
      <QuoteScore />
    </QuoteList>
  </>
);
