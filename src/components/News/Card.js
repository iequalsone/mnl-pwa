import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TagLink from "../common/TagLink";
import dateFormat from "dateformat";

class Card extends Component {
  renderDateTime(pub_date) {
    if (typeof pub_date !== "undefined") {
      return (
        <p style={Style.DateStyle} className="card-text start-date">
          {dateFormat(pub_date, "mmmm d, yyyy")}
        </p>
      );
    }

    return;
  }

  renderTags(tags) {
    if (typeof tags !== "undefined") {
      let output = tags.map(t => {
        return <TagLink key={t} tag={t} />;
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
      case "news":
        return <p className={`cat-name ${output[0]}`}>News</p>;
      case "member-news":
        return <p className={`cat-name ${output[0]}`}>Member News</p>;
      case "opportunities":
        return <p className={`cat-name ${output[0]}`}>Opportunities</p>;
      default:
        return;
    }
  }

  renderRows() {
    const {
      slug,
      title,
      sub_title,
      pub_date,
      tags,
      category
    } = this.props.newsItem;
    var path = "/news-item/" + slug;

    let cat = category.map(t => {
      return t;
    });

    return (
      <div className="col-12">
        <div style={Style.CardStyle} className={`card mb-4 box-shadow ${cat}`} >
          <div style={Style.BodyStyle} className="card-body">
            {this.renderCategory(category)}
            <NavLink style={Style.LinkStyle} to={path}>
              <h3 style={Style.TitleStyle} className="card-text title">{title}</h3>
            </NavLink>
            <h4 style={Style.SubTitleStyle}>{sub_title}</h4>
            {this.renderDateTime(pub_date)}
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
