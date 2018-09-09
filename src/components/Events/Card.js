import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TagLink from "../common/TagLink";
import dateFormat from "dateformat";
import placeholderImage from "../../images/events-placeholder.jpg";

class Card extends Component {
  renderImage(image, member_profile_image, title) {
    // console.log(image);
    // console.log(member_profile_image);
    if (!image) {
      // console.log(member_profile_image);
      if (!member_profile_image) {
        return (
          <img className="card-img-top" src={placeholderImage} alt={title} />
        );
      }
      return (
        <img className="card-img-top" src={member_profile_image} alt={title} />
      );
    }

    return <img className="card-img-top" src={image[0]} alt={title} />;
  }

  renderDateTime(start_date) {
    // console.log(start_date);
    if (typeof start_date !== "undefined") {
      return (
        <p style={Style.DateStyle} className="card-text start-date">
          {dateFormat(start_date, "mmmm d, yyyy, h:MM TT")}
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

  renderFloatingTag(floatingTag) {
    if (floatingTag === "") {
      return;
    }

    return <div className="floating-tag">{floatingTag}</div>;
  }

  renderRows() {
    // console.log(this.props);
    const {
      slug,
      image,
      member_profile_image,
      title,
      start_datetime,
      location,
      tags,
      floatingTag,
    } = this.props.event;
    var path = "/event/" + slug;

    return (
      <div className="col-12">
        <div style={Style.CardStyle} className="card mb-4 box-shadow">
          {this.renderFloatingTag(floatingTag)}
          <NavLink to={path}>{this.renderImage(image, member_profile_image, title)}</NavLink>
          <div style={Style.BodyStyle} className="card-body">
            <NavLink style={Style.LinkStyle} to={path}>
              {this.renderDateTime(start_datetime)}
              <h3 style={Style.TitleStyle} className="card-text title">{title}</h3>
              <p className="card-text location">{location}</p>
            </NavLink>
            <div className="justify-content-between align-items-center">
              <p className="card-text tags">{this.renderTags(tags)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // componentDidMount() {
  //   // console.log(this.props);
  // }

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
    color: "#FFFFFF"
  }
};

export default Card;
