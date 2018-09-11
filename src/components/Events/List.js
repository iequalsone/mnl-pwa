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
  fetchAllRegions,
  toggleLoading
} from "../../actions";

import Search from "./Search";
import Card from "./Card";
import Spinner from "../common/Spinner";
import AddToHomeScreen from "../common/AddToHomeScreen";

class List extends Component {
  constructor() {
    super();

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
  }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div>
          <div id="A2HS">{this.renderAddToHomeScreenBtn()}</div>

          <Search
            onFormSubmit={this.onFormSubmit}
            onRegionChange={this.onRegionChange}
            onDateChange={this.onDateChange}
            loading={this.props.loading}
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
    let rows = [];
    rows = _.map(this.props.events, (event, index) => {
      return <Card key={event.id} event={event} />;
    });

    // console.log(this.props.events);
    // console.log(rows.length);

    if (rows.length <= 0) {
      rows.push(<p className="text-center" key="NO_RESULTS">Sorry, no events to display at this time.</p>);
    }

    return rows;
  }

  renderAddToHomeScreenBtn() {
    if (isIos() && !isInStandaloneMode()) {
      return <AddToHomeScreen />;
    }

    return;
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
    this.props.toggleLoading(flag);
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
      this.props.toggleLoading(false);
    }
  }
}

// Detects if device is on iOS 
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(userAgent);
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

function mapStateToProps({ events, regions, loading }) {
  return { events, regions, loading }
}

export default connect(mapStateToProps, {
  fetchEvents,
  fetchEventsByKeyword,
  fetchEventsByDate,
  fetchEventsByTag,
  fetchEventsByRegion,
  fetchAllRegions,
  toggleLoading
})(List);
