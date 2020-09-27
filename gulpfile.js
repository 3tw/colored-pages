const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const useref = require('gulp-useref')
const cssnano = require('gulp-cssnano')

/* Tasks */

gulp.task('sass', function () {
  return gulp.src('./app/scss/colored-pages.scss').pipe(sass()).pipe(gulp.dest('./app/css')).pipe(browserSync.stream())
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
  return gulp.src('./app/*.html').pipe(useref()).pipe(rename('./app.js')).pipe(gulp.dest('dist'))
})

gulp.task(
  'watch',
  gulp.series('sass', function () {
    browserSync.init({
      server: {
        baseDir: './app'
      },
      browser: 'default',
      injectChanges: true,
      notify: false
    })
    gulp.watch('./app/scss/**/*.scss', gulp.series('sass'))
    gulp.watch('./app/*.html', browserSync.reload)
  })
)

/* Build the ./app */
gulp.task('build', gulp.series('dist:css', 'dist:js'), function () {
  console.log('Building Colored Pages')
})
