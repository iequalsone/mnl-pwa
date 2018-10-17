

import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchOpportunities,
  fetchOpportunitiesByTag,
  toggleLoading
} from "../../actions";

import Card from "./Card";
import Spinner from "../common/Spinner";

class OpportunitiesList extends Component {
  constructor() {
    super();

    this.state = {
      nextTag: ""
    }

    this.toggleLoading = this.toggleLoading.bind(this);
  }

  render() {
    // console.log(this.props.news);
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div>
          <div className="row">
            <div className="container opportunities-list">{this.renderRows()}</div>
          </div>
        </div>
      );
    }
  }

  renderRows() {
    let rows = [];
    rows = _.map(this.props.opportunities, (opportunitiesItem, index) => {
      return <Card key={opportunitiesItem.id} opportunityItem={opportunitiesItem} />;
    });

    if (rows.length <= 0) {
      rows.push(<p className="text-center" key="NO_RESULTS">Sorry, no opportunities to display at this time.</p>);
    }

    return rows;
  }

  toggleLoading(flag) {
    this.props.toggleLoading(flag);
  }

  componentDidMount() {
    const { tag } = this.props.match.params;

    if (typeof tag !== "undefined") {
      this.props.toggleLoading(true);
      this.props.fetchOpportunitiesByTag(tag);
    } else {
      this.props.toggleLoading(true);
      this.props.fetchOpportunities();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.opportunities !== this.props.opportunities) {
      this.props.toggleLoading(false);
    }

    const { tag } = this.props.match.params;

    if (prevState.nextTag !== this.state.nextTag) {
      this.props.toggleLoading(true);
      this.props.fetchOpportunitiesByTag(this.state.nextTag);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.nextTag !== prevState.nextTag) {
      return { nextTag: nextProps.match.params.tag };
    }

    return null;
  }
}

function mapStateToProps({ opportunities, loading }) {
  return { opportunities, loading }
}

export default connect(mapStateToProps, {
  fetchOpportunities,
  fetchOpportunitiesByTag,
  toggleLoading
})(OpportunitiesList);
