/* Search.js */

import _ from "lodash";
import React, { Component } from "react";
import { geolocated } from "react-geolocated";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
      region: "",
      date_range: "",
    };

    this.updateSearchKeyword = this.updateSearchKeyword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  render() {
    // console.log(this.props.isGeolocationEnabled);
    return (
      <div className="search-form-wrap">
        <form className="row text-center" onSubmit={this.handleSubmit}>
          <div className="form-group col-12">
            <select style={Style.SelectStyle} value={this.state.region} name="region" onChange={this.handleRegionChange}>
              <option>Region</option>
              {this.outputRegions(this.props.regions)}
            </select>
          </div>
          <div className="form-group col-12">
            <select style={Style.SelectStyle} value={this.state.date_range} name="date-range" onChange={this.handleDateChange}>
              <option value="all-time">All Time</option>
              <option value="today">Today</option>
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
            </select>
          </div>
          <div className="form-group col-12">
            <input
              style={Style.InputStyle}
              name="keyword"
              value={this.state.keyword}
              onChange={this.updateSearchKeyword}
              type="text"
              className="form-control"
              placeholder="Search events"
              required
            />
            <button style={Style.ButtonStyle} type="submit" className="btn btn-default">
              SEARCH
            </button>
          </div>
        </form>
      </div>
    );
  }

  updateSearchKeyword(event) {
    this.setState({
      keyword: event.target.value,
    });
  }

  outputRegions(regions) {
    let output = _.map(regions, r => {
      const { id, name, slug } = r;
      return (
        <option key={id} value={slug}>
          {name}
        </option>
      );
    });

    if (this.props.isGeolocationEnabled) {
      output.push(<option key="USE_GPS_COORDS" value="use-gps-coords">Use Your Location</option>);
    }

    // console.log(regions);

    return output;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      region: '',
      date_range: ''
    });
    this.props.toggleLoading(true);
    this.props.onFormSubmit(this.state.keyword);
  }

  handleRegionChange(event) {
    // console.log(this.props.coords.latitude);
    // console.log(this.props.coords.longitude);

    this.setState({
      keyword: '',
      region: event.target.value,
      date_range: '',
    });
    this.props.toggleLoading(true);
    this.props.onRegionChange(event.target.value, this.props.coords);
  }

  handleDateChange(event) {
    this.setState({
      keyword: '',
      region: '',
      date_range: event.target.value,
    });
    this.props.toggleLoading(true);
    this.props.onDateChange(event.target.value);
  }
}

const Style = {
  SelectStyle: {
    display: "block",
    background: "transparent",
    borderColor: "#28a8e0",
    color: "#9b9c9f"
  },
  ButtonStyle: {
    backgroundColor: "#28a8e0"
  },
  InputStyle: {
    borderColor: "#28a8e0"
  }
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Search);