import React, { Component } from "react";
import { Card, Form, Button, Header, Divider } from "semantic-ui-react";
import styled from "styled-components";

class AddQuestion extends Component {
  render() {
    return (
      <Container>
        <Card fluid>
          <Card.Content textAlign="center">
            <Header as="h2">Create New Question</Header>
          </Card.Content>
          <Card.Content extra>
            <p>Complete the question:</p>
            <Header as="h3">Would You Rather ...</Header>
            <Form>
              <Form.Field>
                <input placeholder="Enter option one text here" />
              </Form.Field>
              <Divider horizontal>OR</Divider>
              <Form.Field>
                <input placeholder="Enter option two text here" />
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

export default AddQuestion;
