import config from "../../config/webpack.dev.js";
import express from "express";
import expressStaticGzip from "express-static-gzip";
import path from "path";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

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

server.listen(process.env.PORT || 8080, () => {
  console.log("Server is listening");
});
