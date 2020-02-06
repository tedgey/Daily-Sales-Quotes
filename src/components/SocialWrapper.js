import React from "react";
import styled from "styled-components";

import QuoteScore from "./QuoteScore";
import Social from "./Social";

const SocialWrapper = styled.div`
  font-size: 18px;
  width: 60%;
  height: 12vh;
  display: flex;
  flex-direction: row;
  justify-content: left;
  text-align: center;
  color: black;
  font-weight: 500;
  margin-left: 20rem;
  margin-top: 0px;
`;

export default () => (
  <>
    <SocialWrapper>
      <Social />
      <QuoteScore />
    </SocialWrapper>
  </>
);
