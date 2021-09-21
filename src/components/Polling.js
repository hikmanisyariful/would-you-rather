import React, { Component } from "react";
import styled from "styled-components";
import { Card, Header, Grid, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import PollingQuestion from "./PollingQuestion";
import PollingResult from "./PollingResult";
import { withRouter } from "react-router";

class Polling extends Component {
  render() {
    const { haveAnswer, user, question } = this.props;
    const { question_id } = this.props.match.params;

    console.log("INI QUESTION ID", question_id);
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
                  <Image
                    src={`https://react.semantic-ui.com/images/avatar/small/matt.jpg`}
                    size="large"
                    circular
                  />
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

function mapStateToProps({ authedUser, questions, users }, props) {
  const question_id = "xj352vofupe1dqz9emx13r";
  // const question_id = props.match.params;

  let haveAnswer = false;

  let user;
  Object.keys(users).forEach(key => {
    if (users[key].id === authedUser) {
      user = users[key];
    }
  });

  let question;
  Object.keys(questions).forEach(key => {
    if (question_id === key) {
      question = questions[key];
    }
  });

  let userAnswers = user.answers;

  Object.keys(userAnswers).forEach(key => {
    if (key === question_id) {
      haveAnswer = true;
    }
  });

  return {
    question_id,
    user,
    question,
    haveAnswer
  };
}

export default connect(mapStateToProps)(withRouter(Polling));
