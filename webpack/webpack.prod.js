const common = require("./webpack.common");
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const extractSass = new MiniCssExtractPlugin({
  filename: "dist/css/[name].[hash].css",
});

module.exports = merge(common, {
  output: {
    publicPath: ".",
  },
  plugins: [extractSass],
  optimization: { minimizer: [new OptimizeCSSAssetsPlugin({})] },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true, attributes: false },
          },
        ],
      },
    ],
  },
});
