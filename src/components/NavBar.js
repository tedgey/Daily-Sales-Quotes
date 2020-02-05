import React from "react";
import styled from "styled-components";

export const NAVBAR_HEIGHT = "60px";

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 99%;
  text-align: left;
  padding-left: 2rem;
  height: 10vh;
  @media (max-width: 380px) {
    display: none;
  }
  // border-style: solid;
  // border-color: blue;
`;

const NavBar = ({ children }) => <Bar>{children}</Bar>;

export default NavBar;
