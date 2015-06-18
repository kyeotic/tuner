var path = require('path');

var appRoot = 'client/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  style: 'styles/**/*.css',
  output: 'dist/app/',
  serve: 'dist/',
  sourceMapRelativePath: '../../' + appRoot
};
