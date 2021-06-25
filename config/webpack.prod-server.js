const path = require("path");
const externals = require("../config/node-externals");
const webpack = require("webpack");

module.exports = {
  name: "server",
  target: "node",
  externals,
  entry: "./src/server/render.js",
  mode: "production",
  output: {
    filename: "prod-server-bundle.js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "../build"),
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.sass$/,
        use: [
          "css-loader",
          "resolve-url-loader",
          { loader: "postcss-loader", options: { sourceMap: true } },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"), // use dart-sass instead of node-sass
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".sass"],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
  ],
};
