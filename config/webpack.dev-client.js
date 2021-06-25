const path = require("path");
const webpack = require("webpack");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

module.exports = {
  name: "client",
  mode: "development",
  entry: {
    main: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client?reload=true",
      "./src/index.js",
    ],
  },
  output: {
    filename: "[name]-bundle.js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    hot: true,
    stats: {
      colors: true,
    },
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          ExtractCssChunks.loader,
          "css-loader",
          "resolve-url-loader",
          { loader: "postcss-loader" },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"), // use dart-sass instead of node-sass
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
    ],
  },
  plugins: [
    new ExtractCssChunks({ hot: true }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
