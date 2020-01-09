import React from "react";
import styled from "styled-components";
import { BrowserRouter as Link } from "react-router-dom";
import ModalDash from "./ModalDash";

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
    <Footer id="root">
      <ModalDash />
      <Motivation>
        <Link to="/QuoteList">More Motivation!</Link>
      </Motivation>
    </Footer>
  </>
);
