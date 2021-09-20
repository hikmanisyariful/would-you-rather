import React, { Component } from "react";
import styled from "styled-components";
import LeaderBoardCard from "./LeaderBoardCard";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    let { users } = this.props;
    return (
      <Container>
        {users.map(user => (
          <LeaderBoardCard key={user.id} user={user} />
        ))}
      </Container>
    );
  }
}

const Container = styled.div`
  width: 500px;
`;

function mapStateToProps({ users }) {
  let newUsers = [];

  Object.keys(users).forEach(key => {
    let answers = Object.keys(users[key].answers).length;
    let questions = users[key].questions.length;
    let score = answers + questions;

    let data = {
      id: users[key].id,
      name: users[key].name,
      avatarURL: users[key].avatarURL,
      answeredQuestions: answers,
      createdQuestions: questions,
      score
    };

    newUsers.push(data);
  });

  const usersRank = newUsers.sort((a, b) => b.score - a.score);

  return {
    users: usersRank
  };
}

export default connect(mapStateToProps)(Leaderboard);
