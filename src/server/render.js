import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";

import Routes from "../app/Routes";
import { Provider } from "react-redux";
import configureStore from "../redux/store";
import {
  clearChunks,
  flushChunkNames,
} from "react-universal-component/server";
import flushChunks from "webpack-flush-chunks";
import { fetchMovies } from "../redux/modules/home";

export default ({ clientStats }) =>
  async (req, res) => {
    if (req.url === "/__webpack_hmr") return;

    // Setup store
    const store = configureStore();

    // Load Movies
    const loadMovies = (site, slug) => {
      return store.dispatch(fetchMovies);
    };

    const app = () =>
      renderToString(
        <Provider store={store}>
          <StaticRouter location={req.originalUrl} context={{}}>
            <Routes />
          </StaticRouter>
        </Provider>
      );

    const template = () => {
      const appOutput = app();

      // Clear Chunks
      clearChunks();
      const { cssHash, js, styles } = flushChunks(clientStats, {
        chunkNames: flushChunkNames(),
      });

      return `
      <html>
        <head>
          <title>SSR</title>
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

    if (req.path.match(/^\/$/) || req.path.match(/^\/index.html$/)) {
      try {
        await loadMovies();
        res.send(template());
      } catch (err) {
        console.log(err);
      }
    } else {
      res.send(template());
    }
  };
