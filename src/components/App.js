import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import QuestionLists from "./QuestionLists";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import AddQuestion from "./AddQuestion";
import Leaderboard from "./Leaderboard";

function PrivateRoute({ component: Component, authedUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authedUser !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

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
          <PrivateRoute
            authedUser={this.props.authedUser}
            path="/questions"
            component={QuestionLists}
          />
          <PrivateRoute
            authedUser={this.props.authedUser}
            path="/add"
            component={AddQuestion}
          />
          <PrivateRoute
            authedUser={this.props.authedUser}
            path="/leaderboard"
            component={Leaderboard}
          />
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

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser
  };
}

export default connect(mapStateToProps)(App);
