var express = require('express');
var serveStatic = require('serve-static');
var app = express();
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

// Use the dev configuration for hot loading
var config = require('./webpack-dev.config');

// Set up a redirect to the react-dev-server for app.js
app.get('/app.js', function (req, res) {
  res.redirect('//localhost:9090/build/app.js');
});

// Map / to src/static/index.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/src/static/index.html');
});

// Any other static assets like styles.css, too
app.use(serveStatic(__dirname + '/src/static'));

// Start the webpack dev server on port 9090
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  }).listen(9090, 'localhost', function (err, result) {
      if (err) {
        console.log(err);
      }
    });

// Start the static file server on port 8080
var server = app.listen(8080, function () {
  console.log('Listening at http://localhost:%s', server.address().port);
});
