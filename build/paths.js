var path = require('path');

var appRoot = 'client/';

module.exports = {
  //client
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: 'dist/app/',
  serve: 'dist/',

  //Server
  serverSource: 'server/**/*.js',
  serverOutput: 'server_dist/',
  server: 'server.js'
};
