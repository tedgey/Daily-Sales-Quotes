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
    daily_quote: []
  };

  async componentDidMount() {
    const daily_quote = await this.loadData();
    this.setState({
      daily_quote
    });
  }

  //hard coding "2" instead of :post_id? for testing
  //TODO: update :post_id? with date
  loadData = async () => {
    // const quoteCounter = "";
    // if a day has passed add 1 to quoteCounter and increase post/x x + 1

    function date_iterate() {
      let today = new Date(today.getDate());
      let tomorrow = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1,
        0,
        0,
        0
      );

      if (today === tomorrow) {
        post_count += 1;
        date_iterate();
      }
    }

    let post_count = 1;
    const url = `http://localhost:3001/v1/post/${post_count}`;
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
