import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const CounterWrapper = styled.div`
  text-align: center;
  color: black;
  background: #fafafc;
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 10px;
  border-radius: 15px;
  // border-style: solid;
  // border-color: red;
`;

class Counter extends Component {
  state = {
    count: 0,
    voted: false
  };

  handleClick = () => {
    this.setState(
      (prevState, { count }) => ({
        count: prevState.count + 1,
        voted: true
      }),
      console.log(this.state.voted)
    );
    if (this.state.voted === true) {
      this.setState(
        (prevState, { count }) => ({
          count: prevState.count - 2,
          voted: false
        }),
        console.log(this.state.count)
      );
    }
  };

  render() {
    return (
      <CounterWrapper onClick={this.handleClick}>
        {this.state.count} <FontAwesomeIcon icon={faHeart} />
      </CounterWrapper>
    );
  }
}

export default Counter;
