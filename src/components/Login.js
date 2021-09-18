import React, { Component } from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

import { Dropdown, Button, Header } from "semantic-ui-react";

class Login extends Component {
  state = {
    value: "",
    toLogin: false
  };

  handleChange = (event, data) => {
    console.log(data.value);
    this.setState({ value: data.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("SUBMIT", this.state);

    if (this.state.value !== "") {
      const id = this.state.value;
      this.setState({
        value: "dafult",
        toLogin: true
      });
      this.props.dispatch(setAuthedUser(id));
    }
  };

  render() {
    const { users } = this.props;
    const { toLogin } = this.state;

    const userOptions = [];

    Object.keys(users).forEach(key => {
      let userFormat = {
        key: users[key].id,
        text: users[key].name,
        value: users[key].id,
        image: {
          avatar: true,
          src: users[key].avatarURL
        }
      };
      userOptions.push(userFormat);
    });

    if (toLogin === true) {
      return <Redirect to="/questions" />;
    }

    return (
      <LoginContainer>
        <Title>
          <Header as="h2">Welcome to the World You Rather App!</Header>
          <Header as="h3" disabled>
            Please sign in to continue
          </Header>
        </Title>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <FormSelect onSubmit={this.handleSubmit}>
          <Header as="h1" color="teal">
            Sign In
          </Header>
          <Dropdown
            placeholder="Select User: "
            fluid
            selection
            options={userOptions}
            onChange={this.handleChange}
          />
          <br></br>
          <Button fluid color="teal" type="submit">
            Sign In
          </Button>
        </FormSelect>
      </LoginContainer>
    );
  }
}

const LoginContainer = styled.div`
  width: 700px;
  height: 500px;
  border: solid;
  border-width: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  background: #dcdcdc;
  border-bottom-style: solid;
  border-width: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const Logo = styled.div`
  width: 200px;
  height: 200px;
  padding: 10px;
`;

const FormSelect = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Login);
