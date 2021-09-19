import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import styled from "styled-components";

import ListCard from "./ListCard";

class QuestionLists extends Component {
  state = {
    activeItem: "unanswered"
  };

  handleItemClick = (e, { name }) => {
    console.log(name);
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <QuestionsContainer>
        <Menu fluid widths={2} size="large">
          <Menu.Item
            name="unanswered"
            active={activeItem === "unanswered"}
            onClick={this.handleItemClick}
            color="teal"
          >
            Unanswered Questions
          </Menu.Item>
          <Menu.Item
            name="answered"
            active={activeItem === "answered"}
            onClick={this.handleItemClick}
            color="teal"
          >
            Answered Questions
          </Menu.Item>
        </Menu>
        {activeItem === "unanswered" ? (
          <Lists>
            {this.props.unansweredQuestions.map(question => (
              <ListCard key={question.id} question={question} />
            ))}
          </Lists>
        ) : (
          <Lists>
            {this.props.answeredQuestions.map(question => (
              <ListCard key={question.id} question={question} />
            ))}
          </Lists>
        )}
      </QuestionsContainer>
    );
  }
}

const QuestionsContainer = styled.div`
  width: 500px;
  border: solid;
  border-width: 2px;
`;

const Lists = styled.div`
  width: 500px;
  padding: 10px;
`;

function mapStateToProps({ authedUser, questions, users }) {
  let user = {};

  Object.keys(users).forEach(key => {
    if (users[key].id === authedUser) {
      user = users[key];
    }
  });

  let answeredQuestions = [];
  let answers = user.answers;

  Object.keys(questions).forEach(key => {
    for (const answer in answers) {
      if (questions[key].id === answer) {
        answeredQuestions.push(questions[key]);
      }
    }
  });

  let questionsArr = Object.entries(questions);
  let newQuestionsArr = [];
  for (let i = 0; i < questionsArr.length; i++) {
    newQuestionsArr.push(questionsArr[i][1]);
  }

  const unansweredQuestions = newQuestionsArr.filter(el => {
    return answeredQuestions.indexOf(el) === -1;
  });

  return {
    authedUser,
    user,
    unansweredQuestions: unansweredQuestions.sort(
      (a, b) => b.timestamp - a.timestamp
    ),
    answeredQuestions: answeredQuestions.sort(
      (a, b) => b.timestamp - a.timestamp
    )
  };
}

export default connect(mapStateToProps)(QuestionLists);
