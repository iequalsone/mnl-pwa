

import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchNews,
  fetchNewsByTag,
  toggleLoading
} from "../../actions";

import Card from "./Card";
import Spinner from "../common/Spinner";

class NewsList extends Component {
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
            <div className="container news-list">{this.renderRows()}</div>
          </div>
        </div>
      );
    }
  }

  renderRows() {
    let rows = [];
    rows = _.map(this.props.news, (newsItem, index) => {
      return <Card key={newsItem.id} newsItem={newsItem} />;
    });

    if (rows.length <= 0) {
      rows.push(<p className="text-center" key="NO_RESULTS">Sorry, no articles to display at this time.</p>);
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
      this.props.fetchNewsByTag(tag);
    } else {
      this.props.toggleLoading(true);
      this.props.fetchNews();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.news !== this.props.news) {
      this.props.toggleLoading(false);
    }

    const { tag } = this.props.match.params;

    if (prevState.nextTag !== this.state.nextTag) {
      this.props.toggleLoading(true);
      this.props.fetchNewsByTag(this.state.nextTag);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.nextTag !== prevState.nextTag) {
      return { nextTag: nextProps.match.params.tag };
    }

    return null;
  }
}

function mapStateToProps({ news, loading }) {
  return { news, loading }
}

export default connect(mapStateToProps, {
  fetchNews,
  fetchNewsByTag,
  toggleLoading
})(NewsList);
