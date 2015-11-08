var webpack = require('webpack');
var path = require('path');

/**
 * This webpack configuration supports hot loading of code changes to a
 * live browser session.
 */
module.exports = {

  /*
   * This relies on the webpack-dev-server to publish live code updates
   * to an HTTP server at localhost:9090
   */
  entry: [
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    './src/index'
  ],

  /*
   * The live result will be at /build/app.js
   */
  output: {
    path:       __dirname + '/build/',
    filename:   'app.js',
    publicPath: 'http://localhost:9090/build/'
  },

  /*
   * Still need to account for ES6 transpilation via Babel, but also hot loading
   * of code whenever it's saved.
   */
  module: {
    loaders: [
      { test: path.join(__dirname, 'src'), loaders: ['react-hot', 'babel-loader']}
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
