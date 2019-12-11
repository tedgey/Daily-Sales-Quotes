import React from "react";
import styled from "styled-components";
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

// const coffee = <FontAwesomeIcon icon={faCoffee} />;

export default () => (
  <>
    <Social>
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faTwitter} />
    </Social>
  </>
);
