/* List.js */

import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchEvents,
  fetchEventsByKeyword,
  fetchEventsByDate,
  fetchEventsByTag,
  fetchEventsByRegion,
  fetchAllRegions
} from "../../actions";

import Search from "./Search";
import Card from "./Card";
import Spinner from "../common/Spinner";

class List extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    } else {
      return (
        <div>
          <Search
            onFormSubmit={this.onFormSubmit}
            onRegionChange={this.onRegionChange}
            onDateChange={this.onDateChange}
            loading={this.state.loading}
            toggleLoading={this.toggleLoading}
            regions={this.props.regions}
          />

          <div className="row">
            <div className="container event-list">{this.renderRows()}</div>
          </div>
        </div>
      );
    }
  }

  renderRows() {
    var rows = _.map(this.props.events, (event, index) => {
      return <Card key={event.id} event={event} />;
    });

    if (rows.length <= 0) {
      rows.push(<p key="NO_RESULTS">Sorry, no events to display at this time.</p>);
    }

    return rows;
  }

  onFormSubmit(value) {
    this.props.fetchEventsByKeyword(value);
  }

  onRegionChange(value) {
    this.props.fetchEventsByRegion(value);
  }

  onDateChange(value) {
    this.props.fetchEventsByDate(value);
  }

  toggleLoading(flag) {
    this.setState({
      loading: flag
    });
  }

  componentDidMount() {
    const { tag } = this.props.match.params;

    if (typeof tag !== "undefined") {
      this.props.fetchEventsByTag(tag);
    } else {
      this.props.fetchEvents();
    }

    this.props.fetchAllRegions();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.events !== this.props.events) {
      this.setState({
        loading: false
      });
    }
  }
}

function mapStateToProps({ events, regions }) {
  return { events, regions }
}

export default connect(mapStateToProps, {
  fetchEvents,
  fetchEventsByKeyword,
  fetchEventsByDate,
  fetchEventsByTag,
  fetchEventsByRegion,
  fetchAllRegions
})(List);
