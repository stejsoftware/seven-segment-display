const webpack = require("webpack");

module.exports = {
  entry: "./lib/index.js",
  output: {
    filename: "./7-seg-display.js",
    libraryTarget: "umd"
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    }
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()]
};
