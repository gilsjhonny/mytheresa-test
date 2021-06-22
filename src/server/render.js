import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import Routes from "../app/Routes";

export default () => (req, res) => {
  res.send(`<html>
    <head>
      <base href="/" />
      <title>SSR</title>
      <link href="/main.css" rel="stylesheet" />
    </head>
    <body>
      <div id="react-root">${ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={{}}>
          <Routes />
        </StaticRouter>
      )}</div>
      <script src="vendors~main-bundle.js"></script>
      <script src="main-bundle.js"></script>
    </body>
  </html>`);
};
