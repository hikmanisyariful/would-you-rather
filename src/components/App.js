import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import QuestionLists from "./QuestionLists";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Container>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/questions">
            <QuestionLists />
          </Route>
        </Container>
      </Router>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function mapStateToProps({ users, questions }) {
  return {
    users,
    questions
  };
}

export default connect(mapStateToProps)(App);
