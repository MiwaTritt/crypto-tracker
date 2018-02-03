const path = require("path");

//plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

//config
const INDEX_HTML = path.resolve(__dirname, "src/index.html");
const INDEX_JS = path.resolve(__dirname, "src/index.js");

module.exports = {
  entry: INDEX_JS,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: [ path.resolve(__dirname, "src"), path.resolve(__dirname, "node_modules") ]
  },
  devServer: {
    inline: true,
    contentBase: "./src",
    port: 8100,
    historyApiFallback: true
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.(s*)css$/, use: ["style-loader", "css-loader", "sass-loader"] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: INDEX_HTML,
      filename: "index.html",
      inject: "body"
    }),
    new CopyWebpackPlugin([
      {
        from: "src/images"
      }
    ])
  ]
};
