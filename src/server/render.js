import React from "react";
import { renderToString } from "react-dom/server";
import { matchPath, StaticRouter } from "react-router";

import Routes from "../app/Routes";
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import {
  clearChunks,
  flushChunkNames,
} from "react-universal-component/server";
import flushChunks from "webpack-flush-chunks";
import { routes } from "../app/constants";

export default ({ clientStats }) =>
  async (req, res) => {
    if (req.url === "/__webpack_hmr") return;

    const store = configureStore();
    const url = req.originalUrl;
    let preInitStorePromise;
    let match;

    // Get preInitStore static method if the requested
    // url matches one of the routes
    Object.values(routes).some((route) => {
      match = matchPath(url, route);
      const { preInitStore } = route.component;

      if (match && preInitStore) {
        preInitStorePromise = preInitStore;
      }

      return !!match;
    });

    const app = () =>
      renderToString(
        <Provider store={store}>
          <StaticRouter location={url} context={{}}>
            <Routes />
          </StaticRouter>
        </Provider>
      );

    const template = () => {
      const appOutput = app();

      clearChunks();
      const { cssHash, js, styles } = flushChunks(clientStats, {
        chunkNames: flushChunkNames(),
      });

      return `
      <html>
        <head>
          <title>My Movies</title>
          ${styles}
        </head>
        <body>
          <div id="react-root">${appOutput}</div>
          ${js}
          <script>
            window.INITIAL_STATE = ${JSON.stringify(store.getState())}
          </script>
          ${cssHash}
      </body>
    </html>`;
    };

    if (preInitStorePromise) {
      try {
        await preInitStorePromise(store);
        res.send(template());
      } catch (err) {
        console.log(err);
      }
    } else {
      res.send(template());
    }
  };
