import React, { Component } from "react";
import { Grid, Header, Form, Radio, Button } from "semantic-ui-react";
import { connect } from "react-redux";

class PollingQuestion extends Component {
  state = {};

  handleChange = (e, { value }) => {
    this.setState({ value });
    console.log("INI VALUE", value);
  };

  handleSubmit = (e, qid, authedUser) => {
    e.preventDefault();
    const answer = this.state.value;

    // Dispatch handle save question answer
  };

  render() {
    const { user, question } = this.props;
    return (
      <Grid.Column width={11}>
        <Header as="h2" textAlign="center">
          Would You Rather
        </Header>
        <Form
          onSubmit={e =>
            this.handleSubmit(e, question.id, this.props.authedUser)
          }
        >
          <Form.Field>
            <Radio
              label={question.optionOne.text}
              name="radioGroup"
              value="optionOne"
              checked={this.state.value === "optionOne"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label={question.optionTwo.text}
              name="radioGroup"
              value="optionTwo"
              checked={this.state.value === "optionTwo"}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button color="teal" fluid>
            Submit
          </Button>
        </Form>
      </Grid.Column>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect()(PollingQuestion);
