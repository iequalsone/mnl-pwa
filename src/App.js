import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import EventsList from "./components/Events/List";
import EventSingle from "./components/Event/Single";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Router>
          <div className="main">
            <Route exact path="/" component={EventsList} />
            <Route exact path="/event/:slug?" component={EventSingle} />
            <Route
              path={
                "/" +
                process.env.REACT_APP_TAG_URL +
                "/:tag?"
              }
              component={EventsList}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
