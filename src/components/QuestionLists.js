import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionLists extends Component {
  render() {
    return (
      <div>
        <h1>Question Lists</h1>
        <h1>AUTHED USER</h1>
        <h3>{this.props.authedUser}</h3>
        <h1>USER</h1>
        {JSON.stringify(this.props.user)}
        <h1>UNASWERED QUESTIONS</h1>
        {JSON.stringify(this.props.unasweredQuestions)}
        <h1>ANSWERED QUESTIONS</h1>
        {JSON.stringify(this.props.answeredQuestions)}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  let user = {};

  Object.keys(users).forEach(key => {
    if (users[key].id === authedUser) {
      user = users[key];
    }
  });

  let answeredQuestions = [];
  let answers = user.answers;
  let count = 0;

  Object.keys(questions).forEach(key => {
    for (const answer in answers) {
      console.log(questions[key], answer);
      if (questions[key].id === answer) {
        answeredQuestions.push(questions[key]);
      }
      count++;
      console.log(count);
    }
  });

  let questionsArr = Object.entries(questions);
  let newQuestionsArr = [];
  for (let i = 0; i < questionsArr.length; i++) {
    newQuestionsArr.push(questionsArr[i][1]);
  }

  const unasweredQuestions = newQuestionsArr.filter(el => {
    return answeredQuestions.indexOf(el) === -1;
  });

  return {
    authedUser,
    user,
    unasweredQuestions,
    answeredQuestions
  };
}

export default connect(mapStateToProps)(QuestionLists);
