import express from "express";
import expressStaticGzip from "express-static-gzip";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackHotServerMiddleware from "webpack-hot-server-middleware";

// Webpack Configs
import configDevClient from "../../config/webpack.dev-client";
import configDevServer from "../../config/webpack.dev-server";
import configProdClient from "../../config/webpack.prod-client";
import configProdServer from "../../config/webpack.prod-server";

const server = express();

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;
const PORT = process.env.PORT || 8080;
let isBuilt = false;

const done = () => {
  if (isBuilt) return;
  server.listen(PORT, () => {
    isBuilt = true;
    console.log(
      `Server listening on http://*.local:${PORT} in ${process.env.NODE_ENV}`
    );
  });
};

if (isDev) {
  // WEBPACK MIDDLEWARES
  // --------------------------------------------
  const compiler = webpack([configDevClient, configDevServer]);

  const clientCompiler = compiler.compilers[0];

  // Allows serving of the files emitted from webpack
  server.use(
    webpackDevMiddleware(compiler, configDevClient.devServer)
  );

  server.use(webpackHotServerMiddleware(compiler));

  server.use(
    webpackHotMiddleware(clientCompiler, configDevClient.devServer)
  );

  console.log("Middleware enabled");

  done();
  // --------------------------------------------
} else {
  webpack([configProdClient, configProdServer]).run((err, stats) => {
    const clientStats = stats.toJson().children[0];
    const render =
      require("../../build/prod-server-bundle.js").default;

    console.log(
      stats.toString({
        colors: true,
      })
    );

    console.log("Running webpack in production...");

    // Use brotli compression for assets with fallback to gzip
    server.use(
      expressStaticGzip("dist", {
        enableBrotli: true,
        orderPreference: ["br", "gz"],
      })
    );

    server.use(render({ clientStats }));

    done();
  });
}
