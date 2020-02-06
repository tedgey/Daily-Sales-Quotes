import React, { Component } from "react";
import styled from "styled-components";

const QuoteWrapper = styled.div`
  display: none;
  font-size: 34px;
  width: 80%;
  text-align: center;
  color: black;
  @media (max-width: 900px) {
    display: block;
  }
`;

const QuoteText = styled.div`
  padding: 1rem;
  @media (max-width: 380px) {
    display: block;
    margin-top 6rem;
  }
`;

class PhoneQuote extends Component {
  state = {
    daily_quote: []
  };

  async componentDidMount() {
    const daily_quote = await this.loadData();
    this.setState({
      daily_quote
    });
  }

  loadData = async () => {
    let initialDate = new Date(2020, 11, 31);
    let now = Date.now();
    let difference = initialDate - now;
    let millisecondsPerDay = 24 * 60 * 60 * 1000;
    let daysSince = Math.floor(difference / millisecondsPerDay);

    const url = `http://localhost:3001/v1/post/${daysSince}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  render() {
    const { daily_quote } = this.state;
    return (
      <QuoteWrapper>
        <QuoteText className="dencoder">
          <div>{daily_quote.quote}</div>
        </QuoteText>
        <div>-{daily_quote.author}</div>
      </QuoteWrapper>
    );
  }
}

export default PhoneQuote;
