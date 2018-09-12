/* List.js */

import _ from "lodash";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import geolib from "geolib";
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

    this.state = {
      nextTag: ""
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  render() {
    // console.log(this.props.regions);
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

    rows.push(<p className="text-center" key="RESET_FORM"><button style={{ backgroundColor: "#ef465a" }} className="btn btn-default" onClick={this.resetForm}>Reset</button></p>);

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

  onRegionChange(value, coords) {
    // console.log(coords);
    // console.log(coords.latitude);
    // console.log(coords.longitude);

    if ((typeof coords !== undefined) && (value === "use-gps-coords")) {
      _.map(this.props.regions, (region, index) => {
        let distance = geolib.getDistance(
          // { latitude: 47.56265129625375, longitude: -52.709770522325 },
          { latitude: coords.latitude, longitude: coords.longitude },
          { latitude: region.lat, longitude: region.lng }
        );

        // console.log(typeof region.lat);
        // console.log(typeof region.lng);

        if (geolib.convertUnit("mi", distance, 0) <= 100) {
          // console.log(region.slug);
          this.props.fetchEventsByRegion(region.slug);
        }
      });
    } else {
      this.props.fetchEventsByRegion(value);
    }
  }

  onDateChange(value) {
    this.props.fetchEventsByDate(value);
  }

  resetForm() {
    this.props.history.push("/");
    this.props.toggleLoading(true);
    this.props.fetchEvents();
  }

  toggleLoading(flag) {
    this.props.toggleLoading(flag);
  }

  componentDidMount() {
    const { tag } = this.props.match.params;

    if (typeof tag !== "undefined") {
      this.props.toggleLoading(true);
      this.props.fetchEventsByTag(tag);
    } else {
      this.props.toggleLoading(true);
      this.props.fetchEvents();
    }

    this.props.fetchAllRegions();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.events !== this.props.events) {
      this.props.toggleLoading(false);
    }

    const { tag } = this.props.match.params;

    if (prevState.nextTag !== this.state.nextTag) {
      this.props.toggleLoading(true);
      this.props.fetchEventsByTag(this.state.nextTag);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.nextTag !== prevState.nextTag) {
      return { nextTag: nextProps.match.params.tag };
    }

    return null;
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
