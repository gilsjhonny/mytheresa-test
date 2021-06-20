import config from "../../config/webpack.dev.js";
import express from "express";
import path from "path";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

const server = express();

// WEBPACK MIDDLEWARES
// --------------------------------------------
const compiler = webpack(config);

// Allows serving of the files emitted from webpack
server.use(webpackDevMiddleware(compiler, config.devServer));

// Allows hot reloading into an existing server
server.use(webpackHotMiddleware(compiler));
// --------------------------------------------

// STATIC MIDDLEWARE
const staticMiddleware = express.static("dist");
server.use(staticMiddleware);

server.listen(8080, () => {
  console.log("Server is listening");
});
