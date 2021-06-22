import React from "react";
import { Home } from "./pages";
import "./sass/main.sass";
import "./AppRoot.sass";

class AppRoot extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default AppRoot;
