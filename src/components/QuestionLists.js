import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionLists extends Component {
  render() {
    return (
      <div>
        <h1>Question Lists</h1>
        <h3>{this.props.authedUser}</h3>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questions
  };
}

export default connect(mapStateToProps)(QuestionLists);
