import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import withTracker from "./components/common/WithTracker";

import TopBar from "./components/common/TopBar";
import AppHeader from "./components/AppHeader";
import EventsList from "./components/Events/List";
import EventSingle from "./components/Event/Single";
import NewsList from "./components/News";
import NewsSingle from "./components/News/NewsSingle";
import OpportunitiesList from "./components/Opportunities";
import OpportunitySingle from "./components/Opportunities/OpportunitySingle";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="main">
            <TopBar />
            <AppHeader />

            <Route exact path="/" component={withTracker(EventsList)} />
            <Route exact path="/event/:slug?" component={withTracker(EventSingle)} />
            <Route
              path={
                "/" +
                process.env.REACT_APP_TAG_URL +
                "/:tag?"
              }
              component={withTracker(EventsList)}
            />

            <Route exact path="/news" component={withTracker(NewsList)} />
            <Route exact path="/news-item/:slug?" component={withTracker(NewsSingle)} />
            <Route
              path={
                "/" +
                process.env.REACT_APP_NEWS_TAG_URL +
                "/:tag?"
              }
              component={withTracker(NewsList)}
            />

            <Route exact path="/opportunities" component={withTracker(OpportunitiesList)} />
            <Route exact path="/opportunity-item/:slug?" component={withTracker(OpportunitySingle)} />
            <Route
              path={
                "/" +
                process.env.REACT_APP_OPPORTUNITIES_TAG_URL +
                "/:tag?"
              }
              component={withTracker(OpportunitiesList)}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
