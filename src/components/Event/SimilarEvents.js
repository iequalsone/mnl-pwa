import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEventsByCategory } from "../../actions";

import Card from "../Events/Card";

class SimilarEvents extends Component {
  render() {
    return this.renderOutput();
  }

  renderOutput() {
    if (this.props.similarEvents.length > 0) {
      return (
        <div className="similar-events">
          <div className="container">
            <div className="page-header text-center">
              <h3>Other events you may be interested in</h3>
            </div>
          </div>
          <div className="container">
            <div className="event-list">{this.renderRows()}</div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  renderRows() {
    var rows = _.map(this.props.similarEvents, (event, index) => {
      return <Card key={event.id} event={event} />;
    });

    if (rows.length <= 0) {
      rows.push(<p key="NO_RESULTS">Sorry, no events to display at this time.</p>);
    }

    return rows;
  }

  componentDidMount() {
    if (this.props.eventCat !== null && this.props.eventCat !== "" && this.props.eventCat !== undefined && this.props.eventCat !== false) {
      this.props.fetchEventsByCategory(this.props.eventCat, this.props.eventId);
    }
  }
}

function mapStateToProps({ similarEvents }) {
  return {
    similarEvents
  }
}

export default connect(mapStateToProps, { fetchEventsByCategory })(SimilarEvents);
