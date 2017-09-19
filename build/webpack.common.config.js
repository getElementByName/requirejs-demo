const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
      bundle: "./src/index.js"
    },
    output: {
      filename: "[name].js",
      path: path.resolve(process.cwd(), "dist")
    },
    externals:{
      requirejs: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/assets/index.html",
        inject: false
      })
    ]
  };
