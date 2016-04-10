require('babel-core/register');
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var stream = require('vinyl-source-stream');
var sass = require('gulp-sass');
var jasmine = require('gulp-jasmine');


gulp.task('bundle-client', function() {
  var b = browserify('client.js')
    .transform(babelify)
    .bundle();
  b.pipe(stream('main.js')).pipe(gulp.dest('public/javascripts'));
});

gulp.task('sass', function() {
  gulp.src('node_modules/materialize-css/sass/materialize.scss')
    .pipe(sass()).pipe(gulp.dest('public/stylesheets'));
});

gulp.task('test', function() {
  gulp.src('tests/**')
    .pipe(jasmine({
      verbose: true
    }));
});