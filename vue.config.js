'use strict';
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  assetsDir: 'resources',
  productionSourceMap: false,
  devServer: {
    port: 8083
  }
}