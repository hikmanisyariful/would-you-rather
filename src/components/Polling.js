import React, { Component } from "react";
import styled from "styled-components";
import {
  Card,
  Header,
  Grid,
  Image,
  Form,
  Radio,
  Button,
  Progress
} from "semantic-ui-react";

class Polling extends Component {
  render() {
    return (
      <Container>
        <Card fluid>
          <Card.Content style={{ background: "#D3D3D3" }}>
            <Header as="h3">USER NAME ASKS :</Header>
          </Card.Content>
          <Card.Content>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column
                  width={5}
                  textAlign="center"
                  verticalAlign="middle"
                >
                  <Image
                    src={`https://react.semantic-ui.com/images/avatar/small/matt.jpg`}
                    size="large"
                    circular
                  />
                </Grid.Column>
                <Grid.Column width={11}>
                  <Header as="h2" textAlign="center">
                    Would You Rather
                  </Header>
                  <Form>
                    <Form.Field>
                      <Radio
                        label="Question Option One"
                        name="radioGroup"
                        value="this"
                        // checked={this.state.value === "this"}
                        // onChange={this.handleChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Radio
                        label="Question Option Two"
                        name="radioGroup"
                        value="this"
                        // checked={this.state.value === "this"}
                        // onChange={this.handleChange}
                      />
                    </Form.Field>
                    <Button color="teal" fluid>
                      Submit
                    </Button>
                  </Form>

                  <Header textAlign="center" as="h2">
                    Result
                  </Header>
                  <Card fluid>
                    <Card.Content>
                      <Header as="h5">
                        Would you rather be option one front-end decveloper ?
                      </Header>
                      <Progress percent={50} color="teal" progress />
                      <Card.Description textAlign="center">
                        <strong>1 out of 2 votes</strong>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                  <Card fluid>
                    <Card.Content
                      fluid
                      style={{ background: "rgb(64,224,208, 0.3)" }}
                    >
                      <div className="ui teal top right ribbon label">
                        Your Vote
                      </div>
                      <Header as="h5">
                        Would you rather be option two front-end decveloper ?
                      </Header>
                      <Progress percent={50} color="teal" progress />
                      <Card.Description textAlign="center">
                        <strong>1 out of 2 votes</strong>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 500px;
  background: "pink";
`;

export default Polling;
