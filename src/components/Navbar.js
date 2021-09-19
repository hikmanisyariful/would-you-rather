import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

class Navbar extends Component {
  state = { activeItem: "Home" };

  handleItemClick = (e, { name }) => {
    console.log(name);
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary fluid size="huge" color="teal">
        <Menu.Item
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="New Question"
          active={activeItem === "New Question"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Leader Board"
          active={activeItem === "Leader Board"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps)(Navbar);
