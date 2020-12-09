/* eslint-disable @typescript-eslint/no-var-requires */
const Dotenv = require("dotenv-webpack");

module.exports = {
  configureWebpack: {
    plugins: [new Dotenv()]
  }
};
