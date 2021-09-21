import React, { Component } from "react";
import { Grid, Header, Card, Progress } from "semantic-ui-react";
import { connect } from "react-redux";

class PollingResult extends Component {
  render() {
    const { optionOne, optionTwo, optionAnswer } = this.props;
    return (
      <Grid.Column width={11}>
        <Header textAlign="center" as="h2">
          Result
        </Header>
        <Card fluid>
          <Card.Content
            style={{
              background:
                optionAnswer === "optionOne" ? "rgb(64,224,208, 0.3)" : "none"
            }}
          >
            {optionAnswer === "optionOne" && (
              <div className="ui yellow top right ribbon label">Your Vote</div>
            )}
            <Header as="h4">Would you rather {optionOne.text}</Header>
            <Progress percent={optionOne.percentage} color="teal" progress />
            <Card.Description textAlign="center">
              <strong>
                {optionOne.votes} out of {optionOne.totalVotes} votes
              </strong>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card fluid color="teal">
          <Card.Content
            style={{
              background:
                optionAnswer === "optionTwo" ? "rgb(64,224,208, 0.3)" : "none"
            }}
          >
            {optionAnswer === "optionTwo" && (
              <div className="ui yellow top right ribbon label">Your Vote</div>
            )}

            <Header as="h4">Would you rather {optionTwo.text}</Header>
            <Progress percent={optionTwo.percentage} color="teal" progress />
            <Card.Description textAlign="center">
              <strong>
                {optionTwo.votes} out of {optionTwo.totalVotes} votes
              </strong>
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

function mapStateToProps({ users, authedUser }, props) {
  const question = props.question;
  const voteOptionOne = question.optionOne.votes.length;
  const voteOptionTwo = question.optionTwo.votes.length;
  const totalVotes = voteOptionOne + voteOptionTwo;

  const percentageOptionOne = (voteOptionOne / totalVotes) * 100;
  const percentageOptionTwo = (voteOptionTwo / totalVotes) * 100;

  const optionOne = {
    text: question.optionOne.text,
    votes: voteOptionOne,
    percentage: percentageOptionOne,
    totalVotes
  };
  const optionTwo = {
    text: question.optionTwo.text,
    votes: voteOptionTwo,
    percentage: percentageOptionTwo,
    totalVotes
  };

  let userAnswers;
  Object.keys(users).forEach(key => {
    if (key === authedUser) {
      userAnswers = users[key].answers;
    }
  });

  let optionAnswer;
  Object.keys(userAnswers).forEach(key => {
    if (key === question.id) {
      optionAnswer = userAnswers[key];
    }
  });

  return {
    optionOne,
    optionTwo,
    user: props.user,
    optionAnswer
  };
}

export default connect(mapStateToProps)(PollingResult);
