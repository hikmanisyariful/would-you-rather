import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Navbar extends Component {
  state = {
    activeItem: "Home"
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });

    if (name === "Logout") {
      this.props.dispatch(setAuthedUser(null));
    }
  };

  render() {
    const { activeItem } = this.state;
    const { user } = this.props;

    return (
      <Menu pointing secondary fluid size="huge" color="teal">
        <Menu.Item
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
          as={NavLink}
          to="/questions"
        />
        <Menu.Item
          name="New Question"
          active={activeItem === "New Question"}
          onClick={this.handleItemClick}
          as={NavLink}
          to="/add"
        />
        <Menu.Item
          name="Leader Board"
          active={activeItem === "Leader Board"}
          onClick={this.handleItemClick}
          as={NavLink}
          to="/leaderboard"
        />
        {this.props.authedUser !== null && (
          <Menu.Menu position="right">
            <Menu.Item name={user.name} />
            <Image src={user.avatarURL} avatar />
            <Menu.Item
              name="Logout"
              active={activeItem === "Logout"}
              onClick={this.handleItemClick}
              as={NavLink}
              exact
              to="/"
            />
          </Menu.Menu>
        )}
      </Menu>
    );
  }
}

function mapStateToProps({ authedUser, users }, props) {
  let user = {};
  Object.keys(users).forEach(key => {
    if (users[key].id === authedUser) {
      user = users[key];
    }
  });
  return {
    authedUser,
    user
  };
}

export default connect(mapStateToProps)(Navbar);
