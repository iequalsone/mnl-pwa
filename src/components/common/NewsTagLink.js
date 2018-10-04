

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NewsTagLink extends Component {
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
          process.env.REACT_APP_NEWS_TAG_URL +
          "/" +
          tag
        }
      >
        #{tag}
      </NavLink>
    );
  }
}

export default NewsTagLink;
