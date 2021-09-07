const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const rename = require('gulp-rename');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const compiler = require('webpack');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

// Development Tasks
// -----------------

// Start browserSync server
gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: '.',
    },
    notify: false,
    // https: true,
  });

  gulp.watch('./assets/style.scss', gulp.parallel('sass'));
  gulp.watch('./assets/main.js', gulp.parallel('scripts'));
});

gulp.task('sass', () => {
  return gulp
    .src('./assets/style.scss')
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename('style.min.css'))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
  return gulp
    .src('./assets/main.js')
    .pipe(rename('main.min.js'))
    .pipe(
      webpack(webpackConfig, compiler, function (err, stats) {
        console.log(err);
      })
    )
    .pipe(gulp.dest('./assets'))
    .pipe(browserSync.stream());
});



// Watchers
gulp.task('watch', gulp.series( 'sass', 'scripts', 'browserSync'));