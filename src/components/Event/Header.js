import React, { Component } from "react";
import AddToCalendar from "react-add-to-calendar";
import dateFormat from "dateformat";
import TagLink from "../common/TagLink";
import PlaceholderImage from "../../images/default-event.jpg";

class EventHeader extends Component {
  renderImage(image, title) {
    // console.log(image);
    if (!image) {
      return <img src={PlaceholderImage} alt={title} />;
    }

    return <img src={image[0]} alt={title} />;
  }

  renderTags(tags) {
    if (typeof tags !== "undefined") {
      let output = tags.map(t => {
        return <TagLink key={t} tag={t} />;
      });

      return output;
    }
  }

  renderContent() {
    const {
      image,
      content,
      start_datetime,
      end_datetime,
      tags,
      title,
      location,
    } = this.props.event[0];

    // console.log(this.props.event);

    var startTime,
      endTime = "";

    if (end_datetime !== "") {
      startTime = dateFormat(start_datetime, "isoDateTime");
      endTime = dateFormat(end_datetime, "isoDateTime");
    } else {
      startTime = dateFormat(start_datetime, "isoDateTime");
      endTime = dateFormat(start_datetime, "isoDateTime");
    }

    let event = {
      title,
      description: content,
      location,
      startTime,
      endTime,
    };

    let icon = { "calendar-plus-o": "left" };

    return (
      <div className="event-header">
        <div style={{ marginBottom: "2em" }} className="col-12 text-center">{this.renderImage(image, title)}</div>
        <div className="col-12">
          <p style={{ color: "#28a8e0" }} className="card-text date">
            {dateFormat(start_datetime, "mmm dd, yyyy")}
          </p>
          <h3 style={{ color: "white" }} className="card-text title">{title}</h3>
          <p style={Style.TextStyle} className="card-text location">{location}</p>
          <p style={Style.TextStyle} className="card-text tags">{this.renderTags(tags)}</p>

          <p style={{ backgroundColor: "#28a8e0" }} className="btn"><AddToCalendar
            event={event}
            displayItemIcons={false}
            buttonTemplate={icon}
          /></p>
        </div>
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

const Style = {
  TextStyle: {
    color: "#9b9c9f"
  }
}

export default EventHeader;
