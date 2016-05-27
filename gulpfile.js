const fs = require('fs');
const mkdirp = require('mkdirp');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const browserify = require('browserify');
const babelify = require('babelify');
const browserSync = require('browser-sync').create();

gulp.task('images', ['dist'], () => {
  return gulp.src('src/imgs/**/*.jpeg').pipe(gulp.dest('dist/imgs'));
});

gulp.task('dist', () => {
  mkdirp('./dist');
});

gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
  browserify('src/scripts/main.js')
    .transform(babelify, {presets: ["es2015"]})
    .bundle()
    .pipe(fs.createWriteStream('dist/bundled.js'));

  browserSync.reload();
});

gulp.task('sass', () => {
  return gulp
    .src('src/styles/main.scss')
    .pipe(sass())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['html', 'scripts', 'sass', 'images'], () => {
  gulp.watch('src/**/*.js', ['scripts'], browserSync.reload);
  gulp.watch('src/**/*.html', ['html'], browserSync.reload);
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('serve', ['dist', 'watch'], () => {
  browserSync.init({
    server: {
      baseDir: ['dist','./']
    }
  });
});

gulp.task('default', ['serve']);
