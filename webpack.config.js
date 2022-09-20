const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {

  const { mode } = argv;
  const isProduction = mode === "production";
  

  return {
    output: {
      path: path.resolve(__dirname, "build"),
      filename: isProduction ? "[name].[contenthash].js" : "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {},
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
    ],
  };
};
