import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

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
    score: 0,
    voted: false,
    post_count: 1
  };

  handleClick = () => {
    const adding_url = `http://localhost:3001/v1/add/${this.state.post_count}`;
    const subtracting_url = `http://localhost:3001/v1/subtract/${this.state.post_count}`;

    if (this.state.voted === true) {
      this.setState({
        voted: false
      });
      axios.get(subtracting_url);
      this.setState({
        score: this.state.score - 1
      });
    } else {
      this.setState({
        voted: true
      });
      axios.get(adding_url);
      console.log(this.state.score + 1);
      this.setState({
        score: this.state.score + 1
      });
    }
  };

  //counter needs to reflect likes for the same quote that is appearing
  loadData = async () => {
    const url = `http://localhost:3001/v1/post/${this.state.post_count}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  };

  componentDidMount() {
    this.countRefresh();
  }

  countRefresh = () => {
    this.loadData().then(data =>
      this.setState({
        score: data.score
      })
    );
  };

  render() {
    return (
      <CounterWrapper onClick={this.handleClick}>
        {this.state.score} <FontAwesomeIcon icon={faHeart} />
      </CounterWrapper>
    );
  }
}

export default Counter;
