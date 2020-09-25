var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var useref = require("gulp-useref");
var cssnano = require("gulp-cssnano");

/* Tasks */

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "app"
    },
    files: [ "css/**/*.css" ],
    browser: "default",
    injectChanges: true,
    watchTask: true,
    notify: false
  });
});

gulp.task("sass", function() {
  return gulp.src("app/scss/colored-pages.scss")
  .pipe(sass())
  .pipe(gulp.dest("app/css"));
});

gulp.task("dist:css", function() {
  return gulp
    .src("app/scss/colored-pages.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist"))
    .pipe(cssnano())
    .pipe(rename("colored-pages.min.css"))
    .pipe(gulp.dest("dist"));
});

gulp.task("dist:js", function() {
  return gulp.src("app/*.html").pipe(useref()).pipe(rename("app.js")).pipe(gulp.dest("dist"));
});

gulp.task("watch", gulp.series([ "browserSync", "sass" ]), function() {
  gulp.watch("app/scss/**/*.scss", gulp.series([ "sass" ]));
  gulp.watch("app/examples/*.html", browserSync.reload);
  gulp.watch("app/js/**/*.js", browserSync.reload);
});

/* Build the app */
gulp.task("build", gulp.series([ "dist:css", "dist:js" ]), function() {
  console.log("Building Colored Pages");
});
