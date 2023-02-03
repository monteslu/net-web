const path = require('path');

const mode = process.env.BUILD_MODE || 'development';

module.exports = {
  entry: "./net-web.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: mode === 'development' ? 'net-web.js' : 'net-web.min.js'
  },
  mode,
  resolve: {
    alias: {
    }
  },
};