const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
