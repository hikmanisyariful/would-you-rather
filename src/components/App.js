import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import QuestionLists from "./QuestionLists";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AddQuestion from "./AddQuestion";
import Leaderboard from "./Leaderboard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Container>
          <Navbar />
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/questions">
            <QuestionLists />
          </Route>
          <Route path="/add">
            <AddQuestion />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
        </Container>
      </Router>
    );
  }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

function mapStateToProps({ users, questions }) {
  return {
    users,
    questions
  };
}

export default connect(mapStateToProps)(App);
