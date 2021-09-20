import React from "react";
import {
  Card,
  Divider,
  Image,
  Header,
  Icon,
  Grid,
  Rail,
  Label
} from "semantic-ui-react";

const LeaderBoardCard = props => {
  const { user } = props;
  return (
    <Card fluid>
      <Card.Content>
        <Grid columns={3} divided>
          <Grid.Row centered>
            <Grid.Column width={4} textAlign="center" verticalAlign="middle">
              <Image src={user.avatarURL} fluid circular />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h2">{user.name}</Header>
              <p>Answered Questions</p>
              <p>{user.answeredQuestions}</p>
              <Divider />
              <p>Created Question</p>
              <p>{user.createdQuestions}</p>
            </Grid.Column>
            <Grid.Column width={4} textAlign="center" verticalAlign="middle">
              <Card>
                <Card.Content>
                  <Card.Header>Score</Card.Header>
                </Card.Content>
                <Card.Content>
                  <Label circular size="massive" color="teal">
                    {user.score}
                  </Label>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>

      <Rail attached internal position="left">
        <Icon.Group>
          <Icon color="yellow" name="trophy" circular />
        </Icon.Group>
      </Rail>
    </Card>
  );
};

export default LeaderBoardCard;
