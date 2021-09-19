import React, { Component } from "react";
import { Card, Form, Button, Header, Divider } from "semantic-ui-react";
import styled from "styled-components";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";

class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false
  };

  handleChange = e => {
    this.setState(() => ({
      [e.target.id]: e.target.value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch } = this.props;

    dispatch(handleAddQuestion(optionOne, optionTwo));

    this.setState(() => ({
      optionOne: "",
      optionTwo: "",
      toHome: true
    }));
  };

  render() {
    const { optionOne, optionTwo, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to="/questions" />;
    }

    return (
      <Container>
        <Card fluid>
          <Card.Content textAlign="center">
            <Header as="h2">Create New Question</Header>
          </Card.Content>
          <Card.Content extra>
            <p>Complete the question:</p>
            <Header as="h3">Would You Rather ...</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <input
                  placeholder="Enter option one text here"
                  value={optionOne}
                  id="optionOne"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Divider horizontal>OR</Divider>
              <Form.Field>
                <input
                  placeholder="Enter option two text here"
                  value={optionTwo}
                  id="optionTwo"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button fluid color="teal" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 500px;
`;

export default connect()(AddQuestion);
