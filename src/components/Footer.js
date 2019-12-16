import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import QuoteList from "./QuoteList";

const Footer = styled.div`
  font-size: 18px;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  color: black;
  font-weight: 500;
  // border-style: solid;
  // border-color: red;
`;

const Motivation = styled.div`
  color: #1b31ea;
  font-weight: 650;
`;

export default () => (
  <>
    <Footer>
      <div>Have a quote you live by? Submit here to be featured!</div>
      <Motivation>
        <Link to="/QuoteList">More Motivation!</Link>
      </Motivation>
    </Footer>
  </>
);
