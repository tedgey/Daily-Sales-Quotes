import React, { Component } from "react";
import styled from "styled-components";
import jsonData from "./quotes.json";

const QuoteWrapper = styled.div`
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

let dailyQuote = jsonData[0];
console.log(dailyQuote.quote);

class Quote extends Component {
  render() {
    return (
      <QuoteWrapper>
        <QuoteText className="dencoder">{dailyQuote.quote}</QuoteText>
        <div>- {dailyQuote.author}</div>
      </QuoteWrapper>
    );
  }
}

export default Quote;
