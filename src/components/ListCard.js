import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Card, Image, Grid } from "semantic-ui-react";

class ListCard extends Component {
  render() {
    return (
      <Card fluid>
        <Card.Content color="grey">
          <h3>{this.props.user.name} asks:</h3>
        </Card.Content>
        <Card.Content extra>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column width={4} textAlign="center" verticalAlign="middle">
                <Image src={this.props.user.avatarURL} size="tiny" circular />
              </Grid.Column>
              <Grid.Column width={12}>
                <h3 style={{ color: "#000" }}>Would You Rather</h3>
                <p>..{this.props.question.optionOne.text}..</p>
                <Button basic color="teal" fluid>
                  View Poll
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

function mapStateToProps({ users }, props) {
  let user = {};
  Object.keys(users).forEach(key => {
    if (users[key].id === props.question.author) {
      user = {
        name: users[key].name,
        avatarURL: users[key].avatarURL
      };
    }
  });

  return {
    question: props.question,
    user
  };
}

export default connect(mapStateToProps)(ListCard);
