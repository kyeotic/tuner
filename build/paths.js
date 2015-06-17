var path = require('path');

var appRoot = 'client/';
var outputRoot = 'dist/app/';
var serveBase  = 'dist/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: outputRoot,
  serve: serveBase,
  sourceMapRelativePath: '../' + appRoot
};
