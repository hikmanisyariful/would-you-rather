import React, { Component } from "react";
import styled from "styled-components";
import LeaderBoardCard from "./LeaderBoardCard";

class Leaderboard extends Component {
  render() {
    return (
      <Container>
        <LeaderBoardCard />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 500px;
  background: pink;
`;

export default Leaderboard;
