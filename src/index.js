import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import AppRoot from "./app/AppRoot.js";
import { Provider } from "react-redux";
import store from "./redux/store";

function render(Component) {
  ReactDOM.hydrate(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
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
