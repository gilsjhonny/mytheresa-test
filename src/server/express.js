import React from "react";
import ReactDOMServer from "react-dom/server";
import config from "../../config/webpack.dev.js";
import express from "express";
import expressStaticGzip from "express-static-gzip";
import path from "path";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import AppRoot from "../app/AppRoot";

const server = express();

const isProd = process.env.NODE_ENV === "production";

if (!isProd) {
  // WEBPACK MIDDLEWARES
  // --------------------------------------------
  const compiler = webpack(config);

  // Allows serving of the files emitted from webpack
  server.use(webpackDevMiddleware(compiler, config.devServer));

  // Allows hot reloading into an existing server
  server.use(webpackHotMiddleware(compiler));
  // --------------------------------------------
}

// Use brotli compression for assets with fallback to gzip
server.use(
  expressStaticGzip("dist", {
    enableBrotli: true,
    orderPreference: ["br", "gz"],
  })
);

server.get("*", (req, res) => {
  res.send(`
  <html>
    <head>
      <link href="server.css" rel="stylesheet" />
    </head>
    <body>
      <div id="react-root">
        ${ReactDOMServer.renderToString(<AppRoot />)}
      </div>
      <script src="vendors-bundle.js"></script>
      <script src="main-bundle.js"></script>
    </body>
  </html>  
  `);
});

server.listen(process.env.PORT || 8080, () => {
  console.log("Server is listening");
});
