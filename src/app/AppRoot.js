import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./AppRoot.sass";
import Routes from "./Routes";
import "./sass/main.sass";

class AppRoot extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}

export default AppRoot;
