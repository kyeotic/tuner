var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = require('../paths');
var server = require('gulp-develop-server');
var argv = require('yargs').argv;

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
  browserSync({
    open: false,
    port: 9000,
    proxy: "localhost:9001"
  }, done);
  server.listen({ path: paths.server, env: { port: 9001 } });
});
