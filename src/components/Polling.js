import React, { Component } from "react";
import styled from "styled-components";
import { Card, Header, Grid, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import PollingQuestion from "./PollingQuestion";
import PollingResult from "./PollingResult";
import { withRouter } from "react-router";

class Polling extends Component {
  render() {
    // const { haveAnswer, user, question } = this.props;
    const { users, questions, authedUser } = this.props;

    const { question_id } = this.props.match.params;

    let question;

    Object.keys(questions).forEach(key => {
      if (question_id === key) {
        question = questions[key];
      }
    });

    let user;
    let userQuestion;

    Object.keys(users).forEach(key => {
      if (users[key].id === authedUser) {
        user = users[key];
      }
      if (key === question.author) {
        userQuestion = users[key];
      }
    });

    let userAnswers = user.answers;

    let haveAnswer = false;

    Object.keys(userAnswers).forEach(key => {
      if (key === question_id) {
        haveAnswer = true;
      }
    });

    return (
      <Container>
        <Card fluid>
          <Card.Content style={{ background: "#D3D3D3" }}>
            {haveAnswer === false ? (
              <Header as="h3">{user.name} asks :</Header>
            ) : (
              <Header as="h3">Asked by {user.name}</Header>
            )}
          </Card.Content>
          <Card.Content>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column
                  width={5}
                  textAlign="center"
                  verticalAlign="middle"
                >
                  <Image src={userQuestion.avatarURL} size="large" circular />
                </Grid.Column>

                {haveAnswer === false ? (
                  <PollingQuestion question={question} />
                ) : (
                  <PollingResult user={user} question={question} />
                )}
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 500px;
  background: "pink";
`;

function mapStateToProps({ authedUser, questions, users }) {
  return {
    users,
    questions,
    authedUser
  };
}

export default connect(mapStateToProps)(withRouter(Polling));
