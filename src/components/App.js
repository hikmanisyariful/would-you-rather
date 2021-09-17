import React, { Component } from "react";
import * as API from "../utils/api";

class App extends Component {
  state = {
    users: [],
    questions: []
  };

  componentDidMount() {
    API.getInitialData().then(({ users, questions }) => {
      this.setState(() => ({
        users: users,
        questions: questions
      }));
    });
  }

  render() {
    const { users, questions } = this.state;
    return (
      <div>
        <h1>Would You Rather?</h1>
        <h2>USERS</h2>
        {JSON.stringify(users)}

        <h2>QUESTIONS</h2>
        {JSON.stringify(questions)}
      </div>
    );
  }
}
export default App;
