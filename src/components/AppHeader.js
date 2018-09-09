

import React, { Component } from "react";

import FlagImage from "../images/flag-default.jpg";

class AppHeader extends Component {
  render() {
    return <div><img style={{ marginBottom: "2em" }} className="img-fluid" src={FlagImage} alt="MusicNL: Instrumental Connections" /></div>;
  }
}

export default AppHeader;