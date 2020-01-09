import React from "react";
import styled from "styled-components";

import QuoteScore from "./QuoteScore";
import Social from "./Social";

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
  margin-top: 2rem;
  // border-style: solid;
  // border-color: blue;
`;

export function getCurrentDate(separator = "/") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}${separator}${year}`;
}

export default () => (
  <>
    <DatePosted>
      <div> {getCurrentDate()} </div>
    </DatePosted>
  </>
);
