import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import OpportunitiesTagLink from "../common/OpportunitiesTagLink";
import dateFormat from "dateformat";

class Card extends Component {
  renderDeadline(value) {
    if (typeof value !== "undefined") {
      return (
        <p className="card-text start-date">
          <span className="warning">DEADLINE: {dateFormat(value, "mmmm d, yyyy")}</span>
        </p>
      );
    }

    return;
  }

  renderTags(tags) {
    if (typeof tags !== "undefined") {
      let output = tags.map(t => {
        return <OpportunitiesTagLink key={t} tag={t} />;
      });

      return output;
    }
  }

  renderCategory(value) {
    let output = value.map(t => {
      return t;
    });

    if (typeof output === undefined) {
      return;
    }

    switch (output[0]) {
      case "awards-and-showcases":
        return <p className={`cat-name ${output[0]}`}>Awards and Showcases</p>;
      case "2-external-funding":
        return <p className={`cat-name ${output[0]}`}>External Funding</p>;
      case "1-internal-funding":
        return <p className={`cat-name ${output[0]}`}>Internal Funding</p>;
      case "3-other-opportunities":
        return <p className={`cat-name ${output[0]}`}>Other Opportunities</p>;
      default:
        return;
    }
  }

  renderRows() {
    const {
      slug,
      title,
      deadline,
      excerpt,
      tags,
      category
    } = this.props.opportunityItem;
    var path = "/opportunity-item/" + slug;

    let cat = category.map(t => {
      return t;
    });

    return (
      <div className="col-12">
        <div style={Style.CardStyle} className={`card mb-4 box-shadow opportunities`} >
          <div style={Style.BodyStyle} className="card-body">
            {this.renderCategory(category)}
            <NavLink style={Style.LinkStyle} to={path}>
              <h3 style={Style.TitleStyle} className="card-text title">{title}</h3>
            </NavLink>
            {this.renderDeadline(deadline)}
            <p>{excerpt}</p>
            <div className="justify-content-between align-items-center">
              <p className="card-text tags">{this.renderTags(tags)}</p>
            </div>

            <NavLink to={path} className="btn btn-primary">Learn More</NavLink>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.renderRows();
  }
}

const Style = {
  CardStyle: {
    border: "none",
    background: "#191a1d"
  },
  BodyStyle: {
    color: "#9b9c9f"
  },
  LinkStyle: {
    color: "#9b9c9f",
    textDecoration: "none"
  },
  DateStyle: {
    color: "#28a8e0"
  },
  TitleStyle: {
    marginTop: "0",
    color: "#FFFFFF",
    fontSize: "1.5em",
    textTransform: "uppercase",
    fontFamily: "'Montserrat', sans-serif"
  },
  SubTitleStyle: {
    color: "#5c5f6d",
    fontSize: "1.2em",
    textTransform: "uppercase",
    fontFamily: "'Montserrat', sans-serif"
  }
};

export default Card;
