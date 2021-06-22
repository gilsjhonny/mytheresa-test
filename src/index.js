import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import AppRoot from "./app/AppRoot.js";

function render(Component) {
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("react-root")
  );
}
render(AppRoot);

if (module.hot) {
  module.hot.accept("./app/AppRoot.js", () => {
    const NewAppRoot = require("./app/AppRoot.js").default;
    render(NewAppRoot);
  });
}
