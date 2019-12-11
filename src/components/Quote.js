import React from "react";
import styled from "styled-components";
import jsonData from "./quotes.json";

const Quote = styled.div`
  font-size: 34px;
  width: 80%;
  text-align: center;
  color: black;
  // border-style: solid;
  // border-color: red;
`;

const QuoteText = styled.div`
  padding: 1rem;
`;

let randomQuote = jsonData[Math.floor(Math.random() * jsonData.length)];
console.log(randomQuote.quote);

export default () => (
  <>
    <Quote>
      <QuoteText>{randomQuote.quote}</QuoteText>
      <div>- {randomQuote.author}</div>
    </Quote>
  </>
);
