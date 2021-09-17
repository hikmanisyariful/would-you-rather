import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <h1>Would You Rather?</h1>
        <h2>USERS</h2>
        {JSON.stringify(this.props.users)}

        <h2>QUESTIONS</h2>
        {JSON.stringify(this.props.questions)}
      </div>
    );
  }
}

function mapStateToProps({ users, questions }) {
  return {
    users,
    questions
  };
}

export default connect(mapStateToProps)(App);
