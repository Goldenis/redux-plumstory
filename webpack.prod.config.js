var path = require('path');
var webpack = require('webpack');
var merge = require('merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

var webpackConfig = {
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  }
};

webpackConfig = merge(webpackConfig, {
  devtool: 'cheap-source-map',
  entry: [
    './src/index'
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /(node_modules|bower_components)/},
      { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10240&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?limit=10240" },
      { test: /\.svg$/, loader: 'svg-inline'},
      { test: /\.json$/, loader: "json"},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?minimize&modules&localIdentName=[name]__[local]___[hash:base64:5]')},
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"] },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      minimize: true,
      compress: {
        dead_code: true,
        unused: true,
        drop_console: true,
        unsafe: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin("app.css")
  ]
});

module.exports = webpackConfig;
