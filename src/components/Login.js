import React, { Component } from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

import { Dropdown } from "semantic-ui-react";
import "semantic-ui-less/semantic.less";

class Login extends Component {
  state = {
    value: "",
    toLogin: false
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
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

    const userOptions = Object.keys(users).map(key => (
      <option key={users[key].id} value={users[key].id}>
        {users[key].name}
      </option>
    ));

    if (toLogin === true) {
      return <Redirect to="/questions" />;
    }

    const friendOptions = [
      {
        key: "Jenny Hess",
        text: "Jenny Hess",
        value: "Jenny Hess",
        image: {
          avatar: true,
          src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
        }
      },
      {
        key: "Elliot Fu",
        text: "Elliot Fu",
        value: "Elliot Fu",
        image: {
          avatar: true,
          src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
        }
      }
    ];

    return (
      <LoginContainer>
        <Title>
          <h2>Welcome to the World You Rather App!</h2>
          <h3>Please sign in to continue</h3>
        </Title>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <FormSelect>
          <h1>Sign In</h1>
          <form onSubmit={this.handleSubmit}>
            <Select onChange={this.handleChange}>{userOptions}</Select>
            <Button type="submit">Submit</Button>
          </form>
          <DropdownWrap>
            <Dropdown
              placeholder="Select Friend"
              fluid
              selection
              options={friendOptions}
            />
          </DropdownWrap>
        </FormSelect>
      </LoginContainer>
    );
  }
}

const DropdownWrap = styled.div`
  width: 500px;
  background: pink;
`;

const LoginContainer = styled.div`
  width: 700px;
  height: 500px;
  border: solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  border-bottom-style: solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.div`
  width: 200px;
  height: 200px;
  padding: 10px;
`;

const FormSelect = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Select = styled.select`
  min-width: 70%;
  height: 40px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 70%;
  height: 40px;
  background: blue;
`;

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Login);
