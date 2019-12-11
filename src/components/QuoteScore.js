import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const QuoteScore = styled.div`
  width: 10%;
  text-align: center;
  color: black;
  margin-top: 3rem;
  background: #fafafc;
  box-shadow: 5px 10px 30px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 2.5rem;
  padding-top: 10px;
  // border-style: solid;
  // border-color: red;
`;

export default () => (
  <>
    <QuoteScore>
      <div className="score">100</div>
      <FontAwesomeIcon icon={faHeart} />
    </QuoteScore>
  </>
);
