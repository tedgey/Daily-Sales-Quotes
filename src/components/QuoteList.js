import React from "react";
import styled from "styled-components";
import { BrowserRouter as Link } from "react-router-dom";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Quote from "./Quote";
import EmailWrapper from "./EmailWrapper";
import SocialWrapper from "./SocialWrapper";
// import DatePosted from "./DatePosted";

const QuoteList = styled.div`
  font-size: 18px;
  width: 90%;
  height: 20vh;
  display: flex;
  flex-direction: center;
  justify-content: center;
  text-align: center;
  color: black;
  font-weight: 500;
  margin-top: 0;
  margin-left: 1rem;
  // border-style: solid;
  // border-color: red;
`;

const DatePosted = styled.div`
  font-size: 24px;
  width: 6%;
  height: 10vh;
  display: flex;
  flex-direction: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  color: #1b31ea;
  font-weight: 700;
  margin-left: 10rem;
  margin-top: 1.5rem;
  // border-style: solid;
  // border-color: blue;
`;

export function getCurrentDate(past) {
  let newDate = new Date();
  let date = newDate.getDate() - past;
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${month < 10 ? `0${month}` : `${month}`}/${date}/${year}`;
}

export default () => (
  <>
    <NavBar>
      <Logo />
    </NavBar>
    <EmailWrapper />
    <QuoteList>
      <DatePosted>
        <div>{getCurrentDate(0)}</div>
      </DatePosted>
      <Quote />
    </QuoteList>
    <SocialWrapper />
    <QuoteList>
      <DatePosted>
        <div>{getCurrentDate(1)}</div>
      </DatePosted>
      <Quote />
    </QuoteList>
    <SocialWrapper />
    <QuoteList>
      <DatePosted>
        <div>{getCurrentDate(2)}</div>
      </DatePosted>
      <Quote />
    </QuoteList>
    <SocialWrapper />
  </>
);
