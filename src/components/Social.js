import React from "react";
import styled from "styled-components";
import jsonData from "./quotes.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Social = styled.div`
  width: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  color: LightGrey;
  margin-top: 4rem;
  // border-style: solid;
  // border-color: red;
`;

let dailyQuote = jsonData[0];
console.log(dailyQuote.quote);
console.log(dailyQuote.author);

let quoteAndAuthor = `${dailyQuote.quote}" - ${dailyQuote.author}`;

function encode(thequote) {
  var unencoded = quoteAndAuthor;
  let encoded = encodeURIComponent(unencoded)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");
  return encoded;
}

let twitterFill = encode();

let twitterReference = `https://twitter.com/intent/tweet?text="${twitterFill}`;
console.log(twitterReference);

export default () => (
  <>
    <Social>
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faFacebook} />
      <a className="twitter-share-button" href={twitterReference}>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </Social>
  </>
);
