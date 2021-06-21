import { hot } from "react-hot-loader/root";
import React from "react";
import { Home } from "./app/pages";
import "./app/sass/main.sass";
import "./App.sass";

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default hot(App);
