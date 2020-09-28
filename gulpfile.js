const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const concat = require('gulp-concat')
const cssnano = require('gulp-cssnano')

/* Tasks */

gulp.task('sass', function () {
  return gulp.src('./app/scss/colored-pages.scss').pipe(sass()).pipe(gulp.dest('./app/css')).pipe(browserSync.stream())
})

gulp.task('concat:js', function () {
  return gulp.src('./app/js/*.js').pipe(concat('app.js')).pipe(gulp.dest('./app/src/'))
})

gulp.task('dist:css', function () {
  return gulp
    .src('./app/scss/colored-pages.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
    .pipe(cssnano())
    .pipe(rename('colored-pages.min.css'))
    .pipe(gulp.dest('dist'))
})

gulp.task('dist:js', function () {
  return gulp.src('./app/js/*.js').pipe(concat('app.js')).pipe(gulp.dest('./dist'))
})

gulp.task(
  'watch',
  gulp.series('sass', 'concat:js', function () {
    browserSync.init({
      server: {
        baseDir: './app'
      },
      browser: 'default',
      injectChanges: true,
      notify: false
    })
    gulp.watch('./app/scss/**/*.scss', gulp.series('sass'))
    gulp.watch('./app/js/**/*.js', gulp.series('concat:js'))
    gulp.watch('./app/*.html', browserSync.reload)
  })
)
