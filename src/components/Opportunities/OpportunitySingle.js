

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchOpportunityBySlug } from "../../actions";

import OpportunityArticle from "./OpportunityArticle";
import Spinner from "../common/Spinner";

class OpportunitySingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      nextOpportunityItem: ""
    }
  }

  render() {
    console.log(this.props.opportunityItem);

    if (this.state.loading) {
      return <Spinner />;
    } else {
      return this.renderOutput();
    }
  }

  renderOutput() {
    if (this.props.opportunityItem.length <= 0) {
      return (
        <div className="col-12">
          <p>Opportunity doesn't exist.</p>

          <NavLink to={"/news"}>
            Return to Opportunities List
          </NavLink>
        </div>
      );
    }

    return (
      <div>
        <div className="row">
          <OpportunityArticle opportunityItem={this.props.opportunityItem} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchOpportunityBySlug(this.props.match.params.slug);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.opportunityItem !== this.props.opportunityItem) {
      this.setState({
        loading: false
      });
    }

    if (prevState.nextOpportunityItem !== this.state.nextOpportunityItem) {
      this.setState({ loading: true });
      this.props.fetchOpportunityBySlug(this.state.nextOpportunityItem);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.nextOpportunityItem !== prevState.nextOpportunityItem) {
      return { nextOpportunityItem: nextProps.match.params.slug };
    }

    return null;
  }
}

function mapStateToProps({ opportunityItem }) {
  return { opportunityItem };
}

export default connect(mapStateToProps, {
  fetchOpportunityBySlug
})(OpportunitySingle);