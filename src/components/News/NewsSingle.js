

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNewsBySlug } from "../../actions";

import NewsArticle from "./NewsArticle";
import Spinner from "../common/Spinner";

class NewsSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      nextNewsItem: ""
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
    if (this.props.newsItem.length <= 0) {
      return (
        <div className="col-12">
          <p>News item doesn't exist.</p>

          <NavLink to={"/news"}>
            Return to News List
          </NavLink>
        </div>
      );
    }

    return (
      <div>
        <div className="row">
          <NewsArticle newsItem={this.props.newsItem} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchNewsBySlug(this.props.match.params.slug);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.newsItem !== this.props.newsItem) {
      this.setState({
        loading: false
      });
    }

    if (prevState.nextNewsItem !== this.state.nextNewsItem) {
      this.setState({ loading: true });
      this.props.fetchNewsBySlug(this.state.nextNewsItem);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.nextNewsItem !== prevState.nextNewsItem) {
      return { nextNewsItem: nextProps.match.params.slug };
    }

    return null;
  }
}

function mapStateToProps({ newsItem }) {
  return { newsItem };
}

export default connect(mapStateToProps, {
  fetchNewsBySlug
})(NewsSingle);