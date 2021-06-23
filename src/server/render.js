import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Routes from "../app/Routes";

import { flushChunkNames } from "react-universal-component/server";
import flushChunks from "webpack-flush-chunks";

export default ({ clientStats }) =>
  (req, res) => {
    if (req.url === "/__webpack_hmr") return;

    const app = renderToString(
      <StaticRouter location={req.url} context={{}}>
        <Routes />
      </StaticRouter>
    );

    const { cssHash, js, styles, ...rest } = flushChunks(
      clientStats,
      {
        chunkNames: flushChunkNames(),
      }
    );

    res.send(`<html>
    <head>
      <title>SSR</title>
      ${styles}
    </head>
    <body>
      <div id="react-root">${app}</div>
      ${js}
      ${cssHash}
    </body>
  </html>`);
  };
