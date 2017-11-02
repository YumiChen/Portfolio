var express = require('express');
var BodyParser = require( 'body-parser' );

var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);

var router = require('./routes.js');

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");



// App setup
var app = express();
var server = app.listen(process.env.port || 5000, function(){
    console.log('listening for requests on port 5000,');
});

// set hot-reload
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: config[0].output.publicPath,
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

// Static files
app.use(express.static('public'));


app.use( BodyParser.urlencoded( { extended: false } ) );
app.use( BodyParser.json() );

app.use("/",router);