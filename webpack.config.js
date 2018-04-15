const path = require("path");

//plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

//config
const INDEX_HTML = path.resolve(__dirname, "src/index.html");
const INDEX_JS = path.resolve(__dirname, "src/index.js");

module.exports = {
  entry: ["whatwg-fetch", INDEX_JS],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "src/"), "node_modules/"]
  },
  devServer: {
    inline: true,
    contentBase: "./src",
    compress: true,
    port: 8100,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader"
          },
          { loader: "sass-loader" }
        ]
      }
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
