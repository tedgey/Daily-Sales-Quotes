import React from "react";
import styled from "styled-components";

export const NAVBAR_HEIGHT = "60px";

const Bar = styled.div`
  width: 98%;
  text-align: left;
  margin-left: 2rem;
  height: 10vh;
  // border-style: solid;
  // border-color: blue;
`;

const NavBar = ({ children }) => <Bar>{children}</Bar>;

export default NavBar;
