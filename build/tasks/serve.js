var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = require('../paths');
var server = require('gulp-develop-server');
var argv = require('yargs').argv;

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
  if (argv.sync || argv.s) {
    console.log('running browsersync')
    browserSync({
      open: false,
      port: 9000,
      server: {
        baseDir: [paths.serve],
        routes: {
          '/system.config.js': './system.config.js',
          '/jspm_packages': './jspm_packages'
        },
        middleware: function (req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          next();
        }
      }
    }, done);
  }    
  else
    server.listen({ path: paths.server});
});
