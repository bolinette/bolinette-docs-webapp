/* eslint-disable @typescript-eslint/no-var-requires */
const Dotenv = require("dotenv-webpack");

module.exports = {
  configureWebpack: {
    plugins: [new Dotenv()]
  },
  // Set value of htmlWebpackPlugin.options.title
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Bolinette Docs";
      return args;
    });
  }
};
