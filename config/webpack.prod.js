const path = require("path");
const BrotliPlugin = require("brotli-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    main: ["./src/index.js"],
  },
  mode: "production",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new OptimizeCssAssetsPlugin(), // Optimize css bundle: Remove duplicated code...
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new CompressionPlugin(), // Default algorithm compression is gzip
    new BrotliPlugin(),
  ],
};
