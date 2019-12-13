import React from "react";
import styled from "styled-components";

import Counter from "./Counter";

const QuoteScore = styled.div`
  width: 10%;
  text-align: center;
  color: black;
  margin-top: 3rem;
  background: #fafafc;
  box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.3);
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
