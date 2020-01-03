import React from "react";
import styled from "styled-components";

const DatePosted = styled.div`
  font-size: 24px;
  width: 6%;
  height: 10vh;
  display: flex;
  flex-direction: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  color: #1b31ea;
  font-weight: 700;
  margin-left: 10rem;
  margin-top: 2rem;
  // border-style: solid;
  // border-color: blue;
`;

export default () => (
  <>
    <DatePosted>
      <div> Jan 01/20 </div>
    </DatePosted>
  </>
);
