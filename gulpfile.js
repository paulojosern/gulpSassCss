const gulp = require('gulp')
const concatCss = require('gulp-concat-css')
const cssNano = require('gulp-cssnano')
const sass = require('gulp-sass')

gulp.task('sass', function sassFunc() {
  return gulp
    .src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(concatCss('styles.css'))
    .pipe(gulp.dest('./src/css'))
})

gulp.task('minify', function minifyFunc() {
  return gulp
    .src('./src/css/styles.css')
    .pipe(cssNano())
    .pipe(gulp.dest('./src/css'))
})

gulp.task('watch', function watchFunc() {
  gulp.watch('./src/sass/*.scss', gulp.series('sass', 'minify'))
})
