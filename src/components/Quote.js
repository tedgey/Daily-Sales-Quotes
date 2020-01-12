import React, { Component } from "react";
import styled from "styled-components";
// import jsonData from "./quotes.json";

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

class Quote extends Component {
  state = {
    daily_quote: [],
    post_count: 1
  };

  async componentDidMount() {
    const daily_quote = await this.loadData();
    this.setState({
      daily_quote,
      post_count: this.state.post_count
    });
  }

  loadData = async () => {
    const url = `http://localhost:3001/v1/post/${this.state.post_count}`;
    const response = await fetch(url);
    const data = response.json();
    // console.log(data);
    return data;
  };

  render() {
    const { daily_quote } = this.state;
    return (
      <QuoteWrapper>
        <QuoteText className="dencoder">
          <div>{daily_quote.quote}</div>
        </QuoteText>
        <div>{daily_quote.author}</div>
      </QuoteWrapper>
    );
  }
}

export default Quote;
