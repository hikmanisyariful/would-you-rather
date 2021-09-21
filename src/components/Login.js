import React, { useState } from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect, useLocation } from "react-router-dom";
import { Dropdown, Button, Header } from "semantic-ui-react";

const Login = () => {
  const [value, setValue] = useState("");
  const [toLogin, setToLogin] = useState(false);
  const { state } = useLocation();
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const handleChange = (event, data) => {
    setValue(data.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value !== "") {
      const id = value;
      setValue("");
      setToLogin(true);

      dispatch(setAuthedUser(id));
    }
  };

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
    return <Redirect to={state?.from || "/questions"} />;
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
      <FormSelect onSubmit={handleSubmit}>
        <Header as="h1" color="teal">
          Sign In
        </Header>
        <Dropdown
          placeholder="Select User: "
          fluid
          selection
          options={userOptions}
          onChange={handleChange}
        />
        <br></br>
        <Button fluid color="teal" type="submit">
          Sign In
        </Button>
      </FormSelect>
    </LoginContainer>
  );
};

export default Login;

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
