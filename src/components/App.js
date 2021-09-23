import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import QuestionLists from "./QuestionLists";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Navbar from "./Navbar";
import AddQuestion from "./AddQuestion";
import Leaderboard from "./Leaderboard";
import Polling from "./Polling";
import LoadingBar from "react-redux-loading";
import NotFound from "./NotFound";

function PrivateRoute({ children, authedUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return authedUser !== null ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        );
      }}
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
        <Fragment>
          <LoadingBar />
          <Container>
            <Navbar />
            <Switch>
              <Route path="/" exact>
                <Login />
              </Route>
              <PrivateRoute
                authedUser={this.props.authedUser}
                path="/questions"
                exact
              >
                <QuestionLists />
              </PrivateRoute>
              <PrivateRoute
                authedUser={this.props.authedUser}
                path="/questions/:question_id"
              >
                <Polling />
              </PrivateRoute>
              <PrivateRoute authedUser={this.props.authedUser} path="/add">
                <AddQuestion />
              </PrivateRoute>
              <PrivateRoute
                authedUser={this.props.authedUser}
                path="/leaderboard"
              >
                <Leaderboard />
              </PrivateRoute>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Container>
        </Fragment>
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
