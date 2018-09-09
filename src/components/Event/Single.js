/* Single.js */

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEventBySlug } from "../../actions";

import Header from "./Header";
import Article from "./Article";
import SimilarEvents from "./SimilarEvents";
import Spinner from "../common/Spinner";

class Single extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      nextEvent: ""
    }
  }
  render() {
    if (this.state.loading) {
      return <Spinner />;
    } else {
      return this.renderOutput();
    }
  }

  renderOutput() {
    if (this.props.event.length <= 0) {
      return (
        <div className="col-12">
          <p>Event doesn't exist.</p>

          <NavLink to={"/"}>
            Return to Events List
          </NavLink>
        </div>
      );
    }

    return (
      <div>
        <div className="row">
          <Header event={this.props.event} />
        </div>

        <div className="row">
          <Article event={this.props.event} />
        </div>

        <div className="row">
          <SimilarEvents
            eventId={this.props.event[0].id}
            eventCat={this.props.event[0].category}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchEventBySlug(this.props.match.params.slug);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.event !== this.props.event) {
      this.setState({
        loading: false
      });
    }

    if (prevState.nextEvent !== this.state.nextEvent) {
      this.setState({ loading: true });
      this.props.fetchEventBySlug(this.state.nextEvent);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.nextEvent !== prevState.nextEvent) {
      return { nextEvent: nextProps.match.params.slug };
    }

    return null;
  }
}

function mapStateToProps({ event }) {
  return { event };
}

export default connect(mapStateToProps, { fetchEventBySlug })(Single);