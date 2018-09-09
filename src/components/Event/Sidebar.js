import React, { Component } from "react";
import RenderShortDate from "../common/RenderShortDate";

class EventSidebar extends Component {
  renderWebsite(website, text) {
    if (website && text) {
      return (
        <a href={website} target="_blank">
          {text}
        </a>
      );
    }
  }

  renderDateTime(datetime) {
    return (
      <div>
        <RenderShortDate date={datetime} />
      </div>
    );
  }

  renderDateCard(start_datetime, website) {
    if (start_datetime !== "") {
      return (
        <div style={{ backgroundColor: "#191a1d" }} className="card">
          <div style={{ backgroundColor: "transparent" }} className="card-body">
            <h5 className="card-title">Date / Time</h5>
            <div className="card-text">
              {this.renderDateTime(start_datetime)}
            </div>
            <p className="card-text">
              {this.renderWebsite(website, "Visit website for full details")}
            </p>
          </div>
        </div>
      );
    }

    return;
  }

  renderTicketCard(tickets_cost) {
    if (tickets_cost !== "") {
      return (
        <div style={{ backgroundColor: "#191a1d" }} className="card">
          <div style={{ backgroundColor: "transparent" }} className="card-body">
            <h5 className="card-title">Tickets / Cost</h5>
            <div dangerouslySetInnerHTML={{ __html: tickets_cost }} />
          </div>
        </div>
      );
    }

    return;
  }

  renderWebsiteCard(website) {
    if (website !== "") {
      return (
        <div style={{ backgroundColor: "#191a1d" }} className="card last">
          <div style={{ backgroundColor: "transparent" }} className="card-body">
            <h5 className="card-title">Website</h5>
            <p className="card-text">
              {this.renderWebsite(website, "Click to visit")}
            </p>
          </div>
        </div>
      );
    }

    return;
  }

  renderLocationCard(location, website) {
    if (location !== "") {
      return (
        <div style={{ backgroundColor: "#191a1d" }} className="card">
          <div style={{ backgroundColor: "transparent" }} className="card-body">
            <h5 className="card-title">Location</h5>
            <p className="card-text">{location}</p>
            <p className="card-text">
              {this.renderWebsite(website, "Visit website for full details")}
            </p>
          </div>
        </div>
      );
    }

    return;
  }

  render() {
    const {
      start_datetime,
      location,
      tickets_cost,
      website,
    } = this.props.event[0];

    return (
      <div className="event-sidebar col-xs-12 col-sm-4 col-md-4">
        {this.renderDateCard(start_datetime, website)}

        {this.renderLocationCard(location, website)}

        {this.renderTicketCard(tickets_cost)}

        {this.renderWebsiteCard(website)}
      </div>
    );
  }
}

export default EventSidebar;
