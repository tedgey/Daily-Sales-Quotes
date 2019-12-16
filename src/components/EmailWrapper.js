import React from "react";
import styled from "styled-components";

const EmailWrapper = styled.div`
  font-size: 18px;
  width: 98%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  color: black;
  font-weight: 500;
  margin-top: 3rem;
  // border-style: solid;
  // border-color: red;
`;

const EmailBox = styled.div`
  display: flex;
  margin-top: 1rem;
  width: 60%;
  font-weight: 400;
  // border-style: solid;
  // border-color: black;
`;

const EmailInput = styled.input`
  width: 10rem;
  height: 20px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-color: grey;
  margin: 0px 8px 0px 8px;
  // border-style: solid;
  // border-color: cyan;
`;

const EmailButton = styled.button`
  color: #1b31ea;
  width: 5rem;
  height: 25px;
  font-weight: 600;
  font-size: 24px;
  padding: 0px;
  margin: 0px;
  background: white;
  border-style: none;
`;

export default () => (
  <>
    <EmailWrapper>
      <EmailBox>
        Start your week off right with the best Sales Quotes!
        <EmailInput value="Email" />
        <EmailButton> Submit </EmailButton>
      </EmailBox>
    </EmailWrapper>
  </>
);
