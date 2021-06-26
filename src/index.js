import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./app/index.js";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

// Get initial state previously loaded on server side
const store = configureStore(window.INITIAL_STATE);

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
render(App);

if (module.hot) {
  module.hot.accept("./app/index.js", () => {
    const NewApp = require("./app/index.js").default;
    render(NewApp);
  });
}
