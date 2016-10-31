import path from 'path'
import Express from 'express'
import React from 'react'
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config;
if(process.env.NODE_ENV === 'production') {
  config = require('./webpack.prod.config');
}else{
  config = require('./webpack.dev.config');
}

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true
})
server.use("/assets", Express.static(path.join(__dirname, 'assets')));
server.use('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

server.listen(process.env.PORT, process.env.SERVER, function (err, result) {
  if (err) return console.log(err);
  console.log(`Listening at http://${process.env.SERVER}:${process.env.PORT}/`);
});
