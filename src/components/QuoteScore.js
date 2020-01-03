import React from "react";
import styled from "styled-components";

import Counter from "./Counter";

const QuoteScore = styled.div`
  width: 10%;
  text-align: center;
  color: black;
  margin-top: 1.2rem;
  background: #fafafc;
  box-shadow: 8px 6px 30px rgba(26, 26, 26, 0.1);
  border-radius: 15px;
  height: 2.5rem;
  // border-style: solid;
  // border-color: red;
`;

export default () => (
  <>
    <QuoteScore>
      <Counter className="score" />
    </QuoteScore>
  </>
);
