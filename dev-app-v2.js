var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config;
if(process.env.NODE_ENV === 'production') {
 config = require('./webpack.prod.config');
}else{
  config = require('./webpack.dev.config');
}

var app = express();
var compiler = webpack(config);

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');


var dashboard = new Dashboard();

compiler.apply(new DashboardPlugin(dashboard.setData));

app.use("/assets", express.static(path.join(__dirname, 'assets')));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
