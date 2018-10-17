

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class OpportunitiesTagLink extends Component {
  handleOnClick(event) {
    console.log(event);
  }

  render() {
    const { tag } = this.props;
    return (
      <NavLink
        style={{ marginRight: "5px" }}
        onClick={this.handleOnClick}
        to={
          "/" +
          process.env.REACT_APP_OPPORTUNITIES_TAG_URL +
          "/" +
          tag
        }
      >
        #{tag}
      </NavLink>
    );
  }
}

export default OpportunitiesTagLink;
