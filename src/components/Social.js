import React, { Component } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialWrapper = styled.div`
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  color: LightGrey;
  margin-top: 2rem;
  // border-style: solid;
  // border-color: red;
`;

class Social extends Component {
  state = {
    daily_quote: [],
    encoded_quote: []
  };

  async componentDidMount() {
    const daily_quote = await this.loadData();
    this.setState({
      daily_quote
    });
  }

  async loadData() {
    let initialDate = new Date(2020, 0, 28);
    let now = Date.now();
    let difference = now - initialDate;
    let millisecondsPerDay = 24 * 60 * 60 * 1000;
    let daysSince = Math.floor(difference / millisecondsPerDay);
    console.log("daysSince", daysSince);

    const url = `http://localhost:3001/v1/post/${daysSince}`;
    const response = await fetch(url);
    const data = response.json();
    console.log(data);
    data.then(response => {
      this.setState(
        {
          encoded_quote: response
        },
        () => console.log(this.state)
      );
    });
  }

  encodeQuote() {
    let quoteAndAuthor = `${this.state.encoded_quote.quote} -${this.state.encoded_quote.author}`;

    function encode(thequote) {
      var unencoded = quoteAndAuthor;
      let encoded = encodeURIComponent(unencoded)
        .replace(/'/g, "%27")
        .replace(/"/g, "%22");
      return encoded;
    }

    let twitterFill = encode();

    let twitterReference = `https://twitter.com/intent/tweet?text=${twitterFill}`;
    console.log(twitterReference);
    return twitterReference;
  }

  // TODO edit this when we have website
  // let facebookReference =
  //   "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2Fshare-button%2F&amp;src=sdkpreparse";

  render() {
    const { daily_quote } = this.state;
    let twitterLink = this.encodeQuote();
    console.log(this.state);
    return (
      <SocialWrapper>
        <a className="facebook-share-button" href={daily_quote}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="twitter-share-button" href={twitterLink}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </SocialWrapper>
    );
  }
}

export default Social;
